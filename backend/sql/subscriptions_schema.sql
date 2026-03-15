-- Create subscriptions table for tracking user subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    plan_type VARCHAR(50) DEFAULT 'annual',
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    order_id VARCHAR(100) UNIQUE NOT NULL,
    payment_id VARCHAR(100) UNIQUE NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'completed', -- completed, failed, refunded, pending
    subscription_status VARCHAR(50) DEFAULT 'active', -- active, cancelled, expired, on-hold
    start_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    renewal_date TIMESTAMP WITH TIME ZONE NOT NULL,
    auto_renewal BOOLEAN DEFAULT TRUE,
    payment_method VARCHAR(50), -- upi, card, netbanking, wallet, etc
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Constraints
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
    CONSTRAINT valid_amount CHECK (amount > 0),
    CONSTRAINT valid_dates CHECK (end_date > start_date)
);

-- Create index on user_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);

-- Create index on subscription_status
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(subscription_status);

-- Create index on renewal_date for auto-renewal processes
CREATE INDEX IF NOT EXISTS idx_subscriptions_renewal_date ON subscriptions(renewal_date);

-- Create index on order_id for payment verification
CREATE INDEX IF NOT EXISTS idx_subscriptions_order_id ON subscriptions(order_id);

-- Enable Row Level Security (RLS)
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own subscriptions
CREATE POLICY subscriptions_user_access ON subscriptions
    FOR SELECT
    USING (auth.uid() = user_id);

-- RLS Policy: Users can update only their own subscription (limited fields)
CREATE POLICY subscriptions_user_update ON subscriptions
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- RLS Policy: Inserts are done by auth (via API)
-- This should be handled by the backend API, not directly by users

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_subscriptions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on row update
DROP TRIGGER IF EXISTS trigger_subscriptions_updated_at ON subscriptions;
CREATE TRIGGER trigger_subscriptions_updated_at
    BEFORE UPDATE ON subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION update_subscriptions_updated_at();

-- Function to check if user has active subscription
CREATE OR REPLACE FUNCTION has_active_subscription(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM subscriptions
        WHERE subscriptions.user_id = has_active_subscription.user_id
        AND subscription_status = 'active'
        AND end_date > CURRENT_TIMESTAMP
    );
END;
$$ LANGUAGE plpgsql;

-- Function to get user's current active subscription
CREATE OR REPLACE FUNCTION get_active_subscription(p_user_id UUID)
RETURNS TABLE (
    subscription_id BIGINT,
    plan_type VARCHAR,
    end_date TIMESTAMP WITH TIME ZONE,
    renewal_date TIMESTAMP WITH TIME ZONE,
    days_remaining BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        subscriptions.id,
        subscriptions.plan_type,
        subscriptions.end_date,
        subscriptions.renewal_date,
        EXTRACT(DAY FROM subscriptions.end_date - CURRENT_TIMESTAMP)::BIGINT
    FROM subscriptions
    WHERE subscriptions.user_id = p_user_id
    AND subscription_status = 'active'
    AND end_date > CURRENT_TIMESTAMP
    ORDER BY end_date DESC
    LIMIT 1;
END;
$$ LANGUAGE plpgsql;

-- Add comments for documentation
COMMENT ON TABLE subscriptions IS 'Stores user subscription information and payment history';
COMMENT ON COLUMN subscriptions.user_id IS 'Reference to auth.users table';
COMMENT ON COLUMN subscriptions.plan_type IS 'Type of subscription: annual, monthly, lifetime, etc';
COMMENT ON COLUMN subscriptions.order_id IS 'Razorpay Order ID - unique identifier for the order';
COMMENT ON COLUMN subscriptions.payment_id IS 'Razorpay Payment ID - unique identifier for the payment';
COMMENT ON COLUMN subscriptions.payment_status IS 'Current status of the payment';
COMMENT ON COLUMN subscriptions.subscription_status IS 'Current status of the subscription';
COMMENT ON COLUMN subscriptions.auto_renewal IS 'Whether subscription should auto-renew';
COMMENT ON FUNCTION has_active_subscription(UUID) IS 'Check if a user has an active, non-expired subscription';
COMMENT ON FUNCTION get_active_subscription(UUID) IS 'Get the user''s current active subscription details';
