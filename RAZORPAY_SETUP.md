## Payment System Environment Variables

### Frontend Environment Variables (.env.local for development)

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Backend API
VITE_API_URL=http://localhost:5000

# Razorpay - TEST KEYS (for development)
# Get TEST keys from: https://dashboard.razorpay.com/?newui=1#/app/keys
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxxxx
```

### Backend Environment Variables (.env for development or appsettings.Development.json)

```json
{
  "Razorpay": {
    "KeyId": "rzp_test_xxxxxxxxxxxxxxxx",
    "KeySecret": "your_razorpay_test_key_secret_xxxxxxxx"
  }
}
```

Or in your `Program.cs` or configured via environment variables:

```bash
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_test_key_secret_xxxxxxxx
```

## Setting Up Razorpay Integration

### Step 1: Create Razorpay Account

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Sign up or log in
3. Complete KYC verification (for live keys) - takes 24-48 hours
4. Go to **Settings** → **API Keys**

### Step 2: Get Test Keys (Immediate)

1. In the API Keys section, you'll see **TEST** and **LIVE** tabs
2. Copy the **Key ID** from the TEST tab (starts with `rzp_test_`)
3. Copy the **Key Secret** from the TEST tab
4. These work immediately for testing

### Step 3: Configure in Code

#### Frontend (.env.local)

```bash
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxxxx
```

#### Backend (appsettings.Development.json)

```json
{
  "Razorpay": {
    "KeyId": "rzp_test_xxxxxxxxxxxxxxxx",
    "KeySecret": "your_razorpay_test_key_secret_xxxxxxxx"
  }
}
```

### Step 4: Test Locally

- With TEST keys, Razorpay checkout will work in test mode
- Use test card: 4111 1111 1111 1111 (any future date, any CVV)
- Or use UPI test mode with any ID format

### Step 5: Deploy to Production

#### For Netlify (Frontend):

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add new environment variables:
   ```
   VITE_RAZORPAY_KEY_ID = rzp_test_xxxxxxxxxxxxxxxx (or live key after verification)
   ```

#### For Render or Railway (Backend):

1. Add environment variables in the deployment settings:
   ```
   RAZORPAY_KEY_ID = rzp_test_xxxxxxxxxxxxxxxx
   RAZORPAY_KEY_SECRET = your_key_secret
   ```

### Step 6: Get Live Keys (Optional - After Deployment)

1. Submit your website for verification on Razorpay dashboard
2. Wait 24-48 hours for approval
3. Once approved, switch to LIVE keys
4. Update all environment variables with LIVE keys
5. Deploy to production

## Testing the Payment Flow

### With TEST Keys:

```
1. Click "Continue to Payment" on pricing page
2. Razorpay checkout will appear
3. Use test payment details:
   - Card: 4111 1111 1111 1111
   - Expiry: Any future date
   - CVV: Any 3 digits
   - OTP: 123456
4. Payment will be marked as completed
5. Redirect to payment success page
```

### With UPI (Test):

```
1. Select UPI option in checkout
2. Enter any UPI ID format (e.g., test@upi)
3. Complete payment
```

## Important Notes

- **TEST keys work immediately** - no verification needed
- **LIVE keys require 24-48 hour verification** - need deployed website URL
- Test payments do NOT deduct money
- You can test both success and failure scenarios with test mode
- Do NOT use LIVE keys during development
- Keep KEY_SECRET confidential - never commit to git

## Troubleshooting

### "Razorpay not recognized"

- Ensure `<script src="https://checkout.razorpay.com/v1/checkout.js"></script>` loads
- Check browser console for network errors

### "Payment verification failed"

- Verify HMAC signature generation matches Razorpay's format
- Ensure KEY_SECRET is correctly configured
- Check backend logs for signature comparison errors

### "Missing API Keys"

- Ensure environment variables are set
- For frontend: `VITE_RAZORPAY_KEY_ID` must start with `VITE_`
- For backend: Environment variables or appsettings.json must have the keys

## Documentation Links

- [Razorpay Integration Guide](https://razorpay.com/docs/payments/integration/javascript/)
- [Razorpay Payment Gateway](https://razorpay.com/docs/api/)
- [Signature Verification](https://razorpay.com/docs/payments/webhooks/verify-signature/)
- [Integrations & Plugins](https://razorpay.com/integrations-plugins)
