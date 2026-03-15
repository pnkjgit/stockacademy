export interface LessonContent {
  id: number;
  title: string;
  moduleId: number;
  content: string;
  keyPoints: string[];
  duration: string;
}

export const lessonContents: { [key: string]: LessonContent } = {
  "1-1": {
    id: 1,
    title: "What is Indian Stock Market?",
    moduleId: 1,
    content: `
The Indian Stock Market is a platform where shares of publicly listed companies are bought and sold. 
It's one of the largest stock markets in the world and plays a crucial role in India's economy.

## Overview
The stock market allows companies to raise capital by issuing shares to investors. In return, investors 
become partial owners of these companies and can earn profits through:
- Capital appreciation (buying low, selling high)
- Dividends (share of company profits)

## Key Features
- Market operates 5 days a week (Monday to Friday)
- Trading hours: 9:15 AM to 3:30 PM IST
- Highly regulated and transparent market
- Real-time price discovery mechanism
- Millions of retail and institutional investors

## Importance
- Mobilizes savings into productive investments
- Helps companies grow and expand
- Provides investment opportunities for individuals
- Contributes to economic growth and development
    `,
    keyPoints: [
      "Stock market is a platform for buying and selling shares",
      "Allows companies to raise capital",
      "Provides investment opportunities for individuals",
      "Operates 5 days a week from 9:15 AM to 3:30 PM",
      "Highly regulated and transparent mechanism",
    ],
    duration: "15 mins",
  },
  "1-2": {
    id: 2,
    title: "Understanding Stocks & Shares",
    moduleId: 1,
    content: `
A stock (or share) represents an ownership stake in a company. When you buy a stock, you become 
a partial owner of that company.

## What is a Stock?
A stock is a security that represents a fractional ownership of a company. Companies issue stocks 
to raise capital for their operations and growth.

## Types of Stocks
1. **Common Stocks**: Regular shares with voting rights and dividend eligibility
2. **Preferred Stocks**: Priority in dividend payments but usually no voting rights

## Understanding Equity Ownership
- If a company has 1,000,000 shares and you buy 1,000 shares, you own 0.1% of the company
- Each share entitles you to a proportional share of profits
- Ownership gives you voting rights in company decisions

## How Stocks Work
1. Company decides to raise capital
2. Issues stocks through IPO (Initial Public Offering)
3. Investors buy stocks at launch price
4. Stock price fluctuates based on supply and demand
5. Investors can sell stocks anytime during market hours

## Benefits of Stock Ownership
- Potential for capital appreciation
- Dividend income
- Voting rights in company decisions
- Liquidity (easy to buy and sell)
    `,
    keyPoints: [
      "Stock represents partial ownership in a company",
      "Two types: Common and Preferred stocks",
      "Stock price changes based on supply and demand",
      "Stockholders can earn through capital appreciation and dividends",
      "Stocks provide liquidity and voting rights",
    ],
    duration: "18 mins",
  },
  "1-3": {
    id: 3,
    title: "NSE vs BSE - Key Differences",
    moduleId: 1,
    content: `
India has two main stock exchanges: NSE (National Stock Exchange) and BSE (Bombay Stock Exchange). 
Both have their own characteristics and differences.

## NSE (National Stock Exchange)
- Established: 1992
- Headquarters: Mumbai
- Index: NIFTY 50 (top 50 companies)
- Technology: Fully electronic and highly automated
- Turnover: Higher trading volume
- More commonly used by traders
- Better liquidity

## BSE (Bombay Stock Exchange)
- Established: 1875 (oldest stock exchange in Asia)
- Headquarters: Mumbai
- Index: SENSEX (top 30 companies)
- Historical significance: Oldest and most recognized
- Turnover: Lower trading volume compared to NSE
- Strong presence among traditional investors
- More companies listed

## Key Differences

| Feature | NSE | BSE |
|---------|-----|-----|
| Year Established | 1992 | 1875 |
| Index | NIFTY | SENSEX |
| Technology | Fully Electronic | Electronic |
| Trading Volume | Higher | Lower |
| Liquidity | Better | Good |
| Preferred by | Modern traders | Traditional investors |

## Which One to Use?
Both are equally safe and regulated. Your choice depends on:
- Broker availability
- Trading instruments available
- Personal preference
- Stock liquidity preference
    `,
    keyPoints: [
      "NSE established in 1992, BSE established in 1875",
      "NSE index is NIFTY 50, BSE index is SENSEX",
      "NSE has higher trading volume and better liquidity",
      "Both are equally safe and government regulated",
      "NSE preferred for active trading, BSE for traditional investing",
    ],
    duration: "16 mins",
  },
  "1-4": {
    id: 4,
    title: "Market Indices - Sensex & Nifty",
    moduleId: 1,
    content: `
Market indices are benchmarks that represent the overall health and performance of the stock market. 
SENSEX and NIFTY are India's two most important indices.

## What is an Index?
An index is a statistical measure of changes in a portfolio of stocks representing a portion of 
the market. It acts as a barometer of market health.

## SENSEX (Sensitive Index)
- BSE's flagship index
- Comprises 30 large-cap companies
- Represents about 45% of BSE's market cap
- Often called "Barometer of Indian Economy"
- Base value: 100 (on April 1, 1979)
- Weighted by market capitalization

## NIFTY 50
- NSE's flagship index
- Comprises 50 large-cap companies
- Represents about 71% of NSE's market cap
- More representative of the market
- Base value: 1000 (on November 3, 1995)
- Weighted by market capitalization

## Key Differences

| Feature | SENSEX | NIFTY |
|---------|--------|-------|
| Exchange | BSE | NSE |
| Companies | 30 | 50 |
| Market Cap Coverage | ~45% | ~71% |
| Base Value | 100 | 1000 |
| Popularity | Traditional | Modern |

## Why They Matter
- Indicate overall market performance
- Reflect economic health
- Used as reference for investment decisions
- Help compare portfolio performance
- Drive market sentiment

## How to Interpret
- Index going up = Market performing well
- Index going down = Market facing challenges
- Index helps determine bull and bear markets
    `,
    keyPoints: [
      "SENSEX has 30 companies, NIFTY has 50 companies",
      "Both are weighted by market capitalization",
      "NIFTY is more representative of overall market",
      "Indices indicate market health and economic trends",
      "Used as benchmarks for portfolio comparison",
    ],
    duration: "20 mins",
  },
  "1-5": {
    id: 5,
    title: "How to Open a Trading Account",
    moduleId: 1,
    content: `
To start investing in the stock market, you need a trading account. Here's a complete guide to opening one.

## Step-by-Step Process

### Step 1: Choose a Broker
- Research and compare brokers
- Check brokerage fees and charges
- Verify regulatory compliance
- Popular brokers: Zerodha, Angel Broking, HDFC Securities, etc.

### Step 2: Complete KYC (Know Your Customer)
Required documents:
- PAN Card (mandatory)
- Aadhar Card
- Bank Account Details
- Address Proof
- Phone Number and Email

### Step 3: Fill Application Form
- Provide personal information
- Income details
- Investment experience
- Risk profile questionnaire

### Step 4: Complete Verification
- Video call verification
- Document verification
- Email confirmation

### Step 5: Receive Login Credentials
- Get username and password
- Download trading software
- Set up mobile app

### Step 6: Fund Your Account
- Link your bank account
- Transfer initial funds
- Ready to start trading

## Documents Required
1. PAN Card (essential)
2. Aadhaar Card
3. Bank Statement or Passbook
4. Address Proof (recent utility bill)
5. Cancelled Cheque (for bank linking)
6. Photograph (selfie during video verification)

## Time Required
- Complete process takes 1-3 days
- Some brokers offer same-day account opening
- Instant digital verification available with many brokers

## Charges
- Account opening: Usually FREE
- Brokerage charges: Varies by broker (₹0 to ₹20 per trade)
- Additional charges: Demat, depository fees

## Tips
- Compare multiple brokers before choosing
- Look for customer support quality
- Check trading platforms features
- Understand fee structure completely
- Start with small investments while learning
    `,
    keyPoints: [
      "Choose a trusted broker registered with SEBI",
      "Complete KYC with necessary documents",
      "Process takes 1-3 days typically",
      "No account opening charges usually",
      "Link your bank account for funding",
    ],
    duration: "22 mins",
  },
  "1-6": {
    id: 6,
    title: "Bid-Ask Spreads Explained",
    moduleId: 1,
    content: `
In stock trading, every stock has two prices at any given time: BID and ASK. Understanding 
these is crucial for efficient trading.

## What is Bid Price?
- The highest price a buyer is willing to pay for a stock
- The price at which you can SELL your shares
- Always lower than the ask price
- Example: Bid = ₹100

## What is Ask Price?
- The lowest price a seller is willing to accept
- The price at which you can BUY shares
- Always higher than the bid price
- Example: Ask = ₹102

## The Bid-Ask Spread
- The difference between ask and bid price
- Spread = Ask Price - Bid Price
- Example: ₹102 - ₹100 = ₹2 spread
- Represents profit margin for market makers

## Why Does Spread Exist?
1. **Market Making**: Brokers profit from the difference
2. **Liquidity**: Wider spreads in illiquid stocks
3. **Volatility**: Wider spreads during volatile markets
4. **Supply-Demand**: Changes based on trading volume

## Factors Affecting Spread
- **Stock Liquidity**: Lower for liquid stocks
- **Market Volatility**: Wider during volatile times
- **Trading Volume**: Lower for high-volume stocks
- **Time of Day**: Narrower during peak hours
- **Market Sentiment**: Wider when uncertain

## Example
Stock ABC:
- Bid Price: ₹500
- Ask Price: ₹505
- Spread: ₹5

To profit from buying and selling:
- Buy at ₹505
- Need to sell at more than ₹505 + spread
- Must sell above ₹510 to break even

## Tips for Better Trading
- Trade liquid stocks with smaller spreads
- Trade during market peak hours (narrower spreads)
- Use limit orders to get better prices
- Monitor spreads before entering trades
- Larger trades may result in wider spreads
    `,
    keyPoints: [
      "Bid is price buyers offer, Ask is price sellers ask",
      "Bid-Ask spread is the difference between them",
      "Spreads are tighter for liquid stocks",
      "Spread narrows during peak trading hours",
      "Understanding spreads helps minimize transaction costs",
    ],
    duration: "14 mins",
  },
  "1-7": {
    id: 7,
    title: "Bull & Bear Markets",
    moduleId: 1,
    content: `
Markets move in cycles. Understanding bull and bear markets helps you make informed decisions 
based on market conditions.

## Bull Market
A bull market is characterized by:
- **Definition**: Prices rising consistently over time
- **Duration**: Usually lasts several months to years
- **Investor Sentiment**: Very optimistic and positive
- **Trading Volume**: High volume with strong momentum
- **Economic Indicators**: Economic growth, low unemployment
- **What Happens**: More buying than selling

### Characteristics
- Upward trend with occasional pullbacks
- Strong investor confidence
- Companies perform well
- Media coverage is positive
- IPOs and fundraising increase

### How to Trade
- Follow the uptrend
- Buy on dips (corrections)
- Long-term investing works well
- Momentum strategies succeed

## Bear Market
A bear market is characterized by:
- **Definition**: Prices falling consistently over time
- **Duration**: Usually lasts several months to years
- **Investor Sentiment**: Very pessimistic and fearful
- **Trading Volume**: High volume with panic selling
- **Economic Indicators**: Recession, unemployment rising
- **What Happens**: More selling than buying

### Characteristics
- Downward trend with occasional rallies
- Investor fear and panic
- Companies struggle
- Media coverage is negative
- Market volatility increases

### How to Trade
- Avoid chasing falling stocks
- Look for reversals
- Diversify holdings
- Consider short selling or hedging

## Key Differences

| Factor | Bull Market | Bear Market |
|--------|------------|-------------|
| Direction | Upward | Downward |
| Sentiment | Optimistic | Pessimistic |
| Volume | High buying | High selling |
| Duration | Months/Years | Months/Years |
| Opportunities | Growth stocks | Value stocks |
| Risk | Lower | Higher |

## How to Identify
- Bull: NIFTY/SENSEX consistently reaching new highs
- Bear: NIFTY/SENSEX consistently making new lows
- Bull: More 'Green' days than 'Red' days
- Bear: More 'Red' days than 'Green' days

## Portfolio Strategy

### In Bull Market
- Invest more aggressively
- Take some profits on rallies
- Increase equity allocation
- Dollar-cost averaging upward

### In Bear Market
- Reduce exposure gradually
- Maintain emergency funds
- Look for buying opportunities
- Focus on quality companies
    `,
    keyPoints: [
      "Bull market: prices rising, optimistic sentiment",
      "Bear market: prices falling, pessimistic sentiment",
      "Bull markets usually last months to years",
      "Bear markets create buying opportunities",
      "Understanding cycles helps time investments better",
    ],
    duration: "18 mins",
  },
  "1-8": {
    id: 8,
    title: "Types of Orders in Stock Trading",
    moduleId: 1,
    content: `
Different types of orders allow traders to buy and sell stocks in various ways. Understanding these is crucial for effective trading.

## Market Order
- Buy or sell at the current market price
- Executed immediately at best available price
- No price guarantee
- Best for: Quick execution when price doesn't matter much
- Example: Buy 10 shares of ABC Ltd at market price = Instant execution

## Limit Order
- Buy or sell at a specific price or better
- May not execute if your price isn't reached
- Gives price control but no execution guarantee
- Best for: When you want a specific price
- Example: Sell 10 shares of ABC Ltd at ₹500 or higher only

## Stop Loss Order
- Automatic sell when price falls to a specific level
- Protects against large losses
- Triggers when stock price touches the stop price
- Can become a market order after triggering
- Best for: Risk management

## Stop Loss Market Order
- Becomes a market order when stock falls to stop price
- Sells immediately but at market price
- Protects against further losses
- Example: Set stop loss at ₹450, auto-sells if price touches ₹450

## Good-Till-Cancel (GTC) Order
- Remains active until you cancel it
- Valid for 30-90 days typically
- Useful for long-term target prices
- Automatically canceled if filled

## Day Order
- Valid only for the current trading day
- Automatically canceled at end of day if not filled
- Default order type for most brokers

## Comparison Table

| Order Type | Price Control | Execution Guarantee | Best For |
|-----------|---------------|-------------------|----------|
| Market | No | Yes | Quick trades |
| Limit | Yes | No | Specific prices |
| Stop Loss | No | Conditional | Risk protection |
| GTC | Yes | Conditional | Patient investing |

## How to Choose
- For quick entry/exit: Market Order
- For specific prices: Limit Order
- For protection: Stop Loss Order
- For long-term: GTC Order
    `,
    keyPoints: [
      "Market orders execute immediately at current price",
      "Limit orders allow price control but may not execute",
      "Stop Loss orders protect against large losses",
      "GTC orders remain valid until canceled or filled",
      "Choose order type based on your trading goal",
    ],
    duration: "16 mins",
  },
  "1-9": {
    id: 9,
    title: "Brokers and Brokerage Charges",
    moduleId: 1,
    content: `
Brokers are intermediaries who execute your buy and sell orders in the stock market. Understanding brokerage is crucial for profitability.

## What is a Broker?
A broker is a licensed financial intermediary who buys and sells securities on behalf of clients.

## Types of Brokers
1. **Full-Service Brokers**: Provide advisory, research, and portfolio management
   - Higher brokerage charges (0.2% to 0.5%)
   - Provide guidance and tips
   - Examples: Traditional brokers, banks

2. **Discount Brokers**: Provide basic trading platform
   - Very low charges (₹0 to ₹20 per trade)
   - Self-directed trading
   - Examples: Zerodha, Upstox, Angel Broking

## Brokerage Charges Breakdown

### Common Charges
1. **Brokerage Commission**: Per trade charge
   - Full-service: 0.2-0.5%
   - Discount brokers: ₹0-20 per trade or 0.02-0.1%

2. **Demat Charges**: For holding shares in electronic form
   - Annual or per transaction
   - Typically ₹100-500/year

3. **Depository Charges**: Fee for depository services
   - Usually ₹100-500/year

4. **GST**: 18% tax on brokerage and other fees

5. **Transaction Fee**: Fee charged by exchange
   - Usually ₹0.001% of trade value

6. **Stamp Duty**: Tax on buying shares
   - ₹0 to ₹100 per transaction (varies by state)

## Example Cost Calculation

**Buying 100 shares at ₹500 each = ₹50,000**

Discount Broker (Zerodha):
- Brokerage: ₹20
- GST: ₹3.60
- Transaction charges: ₹2.20
- **Total: ~₹25-30**

Full-Service Broker:
- Brokerage (0.3%): ₹150
- GST: ₹27
- Transaction charges: ₹2.20
- **Total: ~₹180**

## How to Choose a Broker
- Compare brokerage charges
- Check platform quality
- Verify regulatory status (ensure SEBI registration)
- Look at customer service
- Check if they offer features you need

## Regulatory Requirements
- All brokers must be registered with SEBI
- Must be member of NSE and/or BSE
- Insurance for client funds

## Tips to Reduce Costs
- Use discount brokers for frequent trading
- Batch your orders to save on charges
- Compare brokerage before choosing
- Avoid unnecessary trades
    `,
    keyPoints: [
      "Brokers are licensed intermediaries for stock trading",
      "Full-service brokers charge more but provide guidance",
      "Discount brokers charge minimal fees but no advisory",
      "Total cost includes brokerage, GST, and transaction fees",
      "Choose broker based on your trading frequency and needs",
    ],
    duration: "14 mins",
  },
  "1-10": {
    id: 10,
    title: "How to Read Stock Quotes",
    moduleId: 1,
    content: `
Stock quotes display information about a stock's current and historical prices. Learning to read them is essential for trading.

## Key Information in Stock Quotes

### Price Information
- **Current Price (LTP)**: Last Traded Price - the most recent trade price
- **Bid Price**: Highest price a buyer is willing to pay
- **Ask Price**: Lowest price a seller is willing to accept
- **Open**: Opening price for the day
- **High**: Highest price during the day
- **Low**: Lowest price during the day
- **Close**: Previous day's closing price

### Volume and Value
- **Volume**: Number of shares traded
- **Turnover**: Total value of shares traded in rupees

### Percentage Change
- **% Change**: Percentage movement from previous close
- **Price Change**: Absolute rupee movement

### Example Stock Quote

Stock: TCS Limited
- LTP: ₹3,450
- Bid Price: ₹3,449
- Ask Price: ₹3,451
- Open: ₹3,410
- High: ₹3,480
- Low: ₹3,400
- Previous Close: ₹3,400
- Change: +₹50 (+1.47%)
- Volume: 2,500,000 shares
- Turnover: ₹8.6 Billion

## What to Look For

### Price Movement
- **Green Arrow/Color**: Price increased
- **Red Arrow/Color**: Price decreased

### Volume Analysis
- High volume with price increase: Strong buying
- High volume with price decrease: Strong selling
- Low volume with movement: May not sustain

### Market Depth (Level 2)
Shows:
- Top 5 bid prices and quantities
- Top 5 ask prices and quantities
- Helps understand buying/selling pressure

## Advanced Quote Information

### P/E Ratio (Price-to-Earnings)
- Stock price divided by earnings per share
- Higher = Market expecting more growth

### Market Cap
- Total value of company = Share price × Total shares

### Dividend Yield
- Annual dividend as percentage of stock price

### 52-Week High/Low
- Highest and lowest prices in last year
- Helps understand stock's range

## Reading Different Timeframes

### Intraday (1-minute to hourly)
- Used for day trading
- Shows frequent price changes

### Swing (daily to weekly)
- Used for swing trading
- Shows daily price action

### Long-term (weekly/monthly)
- Used for investing
- Shows overall trend

## Tips for Reading Quotes
- Always check both bid and ask prices
- Compare volume with historical average
- Look at price movement with volume
- Don't focus only on percentage change
- Check market depth for execution prices
    `,
    keyPoints: [
      "LTP is the most recent price at which stock traded",
      "Bid-Ask spread shows the gap between buyers and sellers",
      "Volume indicates strength of price movement",
      "Percentage change shows relative price movement",
      "Market depth helps understand buying/selling pressure",
    ],
    duration: "12 mins",
  },
  "1-11": {
    id: 11,
    title: "Intraday vs Long-term Investing",
    moduleId: 1,
    content: `
Two main approaches to stock market: Intraday trading and long-term investing. Each has different strategies and risk levels.

## Intraday Trading
### What is It?
- Buying and selling stocks on the same day
- Position closed before market close
- Also called "Day Trading"

### Characteristics
- Duration: Few minutes to several hours
- Goal: Profit from short-term price movements
- Leverage: Often use margin/leverage
- Activity: Very frequent trades
- Focus: Technical analysis, price patterns

### Advantages
- Quick profits possible
- No overnight risk
- Leverage amplifies small moves
- No stock holding cost

### Disadvantages
- Very time-consuming
- High brokerage costs (frequent trades)
- High risk of losses
- Requires significant expertise
- Emotional stress and quick decisions needed

### Requirements
- High capital to make meaningful profits
- Strong technical analysis knowledge
- Discipline and patience
- Quick decision-making ability
- Good risk management

### Example
- Buy 100 shares of ABC Ltd at ₹100 = ₹10,000
- Price rises to ₹102 during day
- Sell at ₹102 = receive ₹10,200
- Profit: ₹200 (after brokerage, actual profit ≈ ₹150)

## Long-term Investing
### What is It?
- Holding stocks for months to years
- Also called "Position Trading" or "Investing"

### Characteristics
- Duration: Months to years
- Goal: Build wealth through capital appreciation and dividends
- Leverage: Usually no leverage
- Activity: Infrequent trades
- Focus: Fundamental analysis, company strength

### Advantages
- Lower brokerage costs (fewer trades)
- Dividend income
- Less time-consuming
- Can build significant wealth
- Lower stress and pressure

### Disadvantages
- Requires patience
- Large capital needed for quick results
- Market downturns can affect you
- Stock selection is critical

### Requirements
- Patience and discipline
- Understanding of company fundamentals
- Ability to stay invested through volatility
- Long-term financial goals

### Example
- Buy 100 shares of ABC Ltd at ₹100 = ₹10,000
- Hold for 2 years
- Stock grows to ₹150
- Receive ₹2,000 dividends over 2 years
- Sell at ₹150 = ₹15,000
- Total profit: ₹5,000 + ₹2,000 = ₹7,000

## Comparison Table

| Factor | Intraday | Long-term |
|--------|----------|-----------|
| Duration | Hours | Months/Years |
| Frequency | High | Low |
| Leverage | Often | Minimal |
| Analysis | Technical | Fundamental |
| Ability | High | Medium |
| Risk | Very High | Medium |
| Time Required | Very High | Low |
| Suitable For | Professionals | Everyone |
| Capital Needed | High | Medium |

## Which is Right for You?

### Choose Intraday If:
- You have strong technical knowledge
- You can monitor markets throughout day
- You have ₹2-5 lakh capital minimum
- You can handle emotional stress
- You're experienced trader

### Choose Long-term If:
- You're building wealth for future
- You can't monitor markets daily
- You have limited capital
- You have stable income
- You want passive income
- You're beginner or intermediate

## Success Rate Statistics
- Intraday traders losing money: 80-90%
- Long-term investors losing money: 20-30%
- Most people succeed with long-term investing

## Important Note
Long-term investing is recommended for 90% of retail investors. Intraday trading is very risky and should only be attempted by experienced traders.
    `,
    keyPoints: [
      "Intraday: Buy and sell on same day, high risk",
      "Long-term: Hold for months/years, lower risk",
      "Intraday needs expertise, long-term needs patience",
      "Intraday costs high brokerage, long-term saves costs",
      "Most people succeed with long-term investing",
    ],
    duration: "20 mins",
  },
  "1-12": {
    id: 12,
    title: "Stock Splits and Bonus Shares",
    moduleId: 1,
    content: `
Companies sometimes split their stocks or give bonus shares to existing shareholders. These actions don't change your ownership but affect share price and count.

## Stock Split

### What is a Stock Split?
A company divides existing shares into multiple shares without changing your ownership percentage.

### How It Works
Example: 1:2 Stock Split
- You own: 100 shares at ₹100 each = ₹10,000
- After split: 200 shares at ₹50 each = ₹10,000
- Your wealth remains same
- But now you have more shares at lower price

### Common Ratios
- 1:2 Split: 1 share becomes 2 shares (price halves)
- 1:3 Split: 1 share becomes 3 shares (price becomes 1/3)
- 2:1 Split: 2 shares become 1 share (price doubles)

### Why Companies Do Stock Splits
1. **Increase Liquidity**: More affordable for retail investors
2. **Increase Trading**: Higher number of shares traded
3. **Psychological Effect**: Lower price feels cheaper
4. **Employee Stock Plans**: Easier for employee benefits

### Example Impact
Before Split: ₹1000 stock, only wealthy investors buy
After 1:5 split: ₹200 stock, more people can invest
Result: More demand, more trading

## Bonus Shares

### What are Bonus Shares?
Free shares given to existing shareholders in proportion to their holdings.

### How It Works
Example: 1:1 Bonus (1 free share for each existing share)
- You own: 100 shares
- After bonus: 200 shares (100 original + 100 free)

### Common Ratios
- 1:1 Bonus: 1 free share for each share owned
- 1:2 Bonus: 1 free share for every 2 shares owned
- 1:5 Bonus: 1 free share for every 5 shares owned

### Why Companies Give Bonuses
1. **Reward Loyal Shareholders**: Show appreciation
2. **Better Liquidity**: More shares available for trading
3. **Use Reserves**: Company's retained earnings go to capital
4. **Increase Trading**: More attractive with more shares

### Important Dates
- **Announcement Date**: When company announces bonus
- **Ex-Date**: Last date to own shares to receive bonus
- **Record Date**: Date shares are officially transferred
- **Payment Date**: When bonus shares credited

## Stock Split vs Bonus - Key Difference

### Stock Split
- Company reduces par/face value
- Increases number of shares
- Stock price adjusts downward
- No new wealth created

### Bonus
- Company uses reserves
- Gives free shares
- Stock price may fall slightly
- No new wealth created mathematically

## Impact on Your Investment

### Your Ownership
- Stock Split: %, ownership stays same
- Bonus: % ownership stays same

### Your Wealth
- Stock Split: Total value unchanged
- Bonus: Total value unchanged (initially)

### Example
100 shares worth ₹1,00,000

After 1:2 Stock Split:
- 200 shares worth ₹1,00,000

After 1:1 Bonus:
- 200 shares worth ₹1,00,000

## Should You Worry?

### No, Because:
- Your wealth doesn't change
- Your ownership % doesn't change
- Your dividends per rupee invested don't change

### Why You Shouldn't Panic Sell
- Stock split/bonus makes stock accessible to more people
- Usually increases demand in long-term
- Company is rewarding shareholders

## Tax Implications
- No tax on stock split or bonus
- Bonus increases cost base for future calculation
- When you sell later, tax is on gain above this new cost base

## Adjustment of Cost Base

### Stock Split
- Original: 100 shares @ ₹100 = ₹10,000
- After 1:2 split: 200 shares @ ₹50 = ₹10,000
- New cost per share: ₹50

### Bonus
- Original: 100 shares @ ₹100 = ₹10,000
- After 1:1 bonus: 200 shares
- New cost per share: ₹50
    `,
    keyPoints: [
      "Stock split: More shares at lower price, wealth unchanged",
      "Bonus: Free shares from company reserves, wealth unchanged",
      "Neither increases or decreases your actual wealth",
      "Stock split makes stock more liquid and accessible",
      "Both are usually bullish signs from companies",
    ],
    duration: "15 mins",
  },
  "1-13": {
    id: 13,
    title: "Dividends and Dividend Yield",
    moduleId: 1,
    content: `
Dividends are profits that companies share with shareholders. Understanding dividends helps you earn passive income from stocks.

## What is a Dividend?

A dividend is a portion of a company's profit distributed to shareholders as a return on their investment.

## Types of Dividends

### Cash Dividend
- Direct payment of money to shareholders
- Most common type
- Example: ₹5 per share

### Stock Dividend (Bonus)
- Additional shares given instead of cash
- Less common

### Special Dividend
- One-time payment for special circumstances
- When company has extra profits

## Dividend Frequency

### Interim Dividend
- Paid during financial year
- Usually once or twice a year

### Final Dividend
- Paid after annual results declared
- Usually once a year

### Quarterly Dividend
- Some companies pay every quarter
- Four times a year

## How Dividends Work

### Timeline Example
1. **Announcement Date** (Monday)
   - Company announces ₹5 dividend per share

2. **Ex-Dividend Date** (Wednesday)
   - Last day to buy stock to receive dividend
   - After this date, you won't get dividend

3. **Record Date** (Friday)
   - Company checks who owns shares
   - Database of dividend recipients

4. **Payment Date** (Next Month)
   - Dividend credited to shareholder accounts

## Dividend Yield

### What is It?
Dividend Yield = Annual Dividend ÷ Share Price × 100

### Example
- Share Price: ₹100
- Annual Dividend: ₹5
- Dividend Yield = 5/100 × 100 = 5%

### Interpretation
- 5% dividend yield = Every ₹100 invested earns ₹5/year in dividends

## Dividend Calculation

### For Your Investment
Stock Price: ₹50, Dividend: ₹2 per share, Your holding: 100 shares

Annual Dividend = ₹2 × 100 = ₹200

If you invested ₹5,000:
- Dividend Yield = 200/5000 × 100 = 4%

## Factors Affecting Dividend

### Why Companies Pay Dividends
1. **Distribute Profits**: Share earnings with shareholders
2. **Show Strength**: Financially strong companies pay dividends
3. **Attract Investors**: Dividend stocks attract long-term investors
4. **Return Capital**: Give back to shareholders

### Why Companies Don't Pay Dividends
1. **Growth Focus**: Reinvest in business growth
2. **Young Companies**: Need capital for expansion
3. **Debt Reduction**: Using profit to reduce debt
4. **Startup Phase**: No profits yet to distribute

## Dividend Aristocrats

Companies that:
- Pay dividends consistently
- Increase dividends year after year
- Never decrease dividends
- Examples: TCS, Reliance, HUL, ITC

## Who Should Invest in Dividend Stocks

### Good For:
- Retirees seeking income
- Long-term investors wanting passive income
- Conservative investors
- People with stable income

### Not Ideal For:
- Short-term traders
- Growth-focused investors
- Young people with long investment horizon
- Those seeking capital appreciation

## Taxation of Dividends

### Dividend Distribution Tax (DDT)
- Tax paid by company before distributing
- Already deducted from your dividend

### Personal Tax
- Your dividend income is taxable
- Added to your total income for taxation
- Depends on your tax slab

## Dividend vs Buyback

| Feature | Dividend | Buyback |
|---------|----------|---------|
| Form | Cash or stock | Company buys its own shares |
| Income | Passive income | Capital appreciation |
| Tax | Taxable immediately | Tax when you sell |
| Dilution | No change | Reduces shares |

## Key Points to Remember
- Dividends are share of company profits
- Higher yield doesn't always mean better investment
- Consistent dividends show financial health
- Consider dividend + growth for overall returns
- Safety (no dividend cut) is important for dividend investors
    `,
    keyPoints: [
      "Dividend is company's profit shared with shareholders",
      "Dividend yield = Annual dividend ÷ Share price",
      "Ex-dividend date is last day to buy for dividend",
      "Dividend stocks attract long-term investors",
      "Dividend aristocrats never cut dividends",
    ],
    duration: "17 mins",
  },
  "1-14": {
    id: 14,
    title: "Diversification and Portfolio Building",
    moduleId: 1,
    content: `
Diversification means spreading investments across different stocks and sectors. It reduces risk while building wealth.

## What is Diversification?

Investing in multiple stocks instead of putting all money in one stock. Classic saying: "Don't put all eggs in one basket."

## Why Diversify?

### Risk Reduction
- If one stock falls, others may compensate
- No single stock can wipe out entire portfolio
- Reduces emotional pressure

### Sector Exposure
- Different sectors perform differently
- At any time, some sectors rise while others fall
- Diversification captures multiple opportunities

### Financial Security
- Protects against company-specific problems
- Protects against sector-wide downturns
- Provides stability

## Types of Diversification

### Sector Diversification
Invest across different sectors:
- Banking/Finance
- IT/Technology
- Pharma
- FMCG (Consumer Goods)
- Auto
- Energy/Oil
- Real Estate

### Market Cap Diversification
Invest across different company sizes:
- Large Cap (Big companies > ₹20,000 Cr)
- Mid Cap (Medium companies ₹5,000-20,000 Cr)
- Small Cap (Small companies < ₹5,000 Cr)

### Risk Diversification
Mix stocks with different risk levels:
- Defensive stocks (stable, low growth)
- Aggressive stocks (growth, higher risk)
- Dividend stocks (income-focused)

## How Many Stocks?

### Beginner Portfolio
- 5-10 stocks minimum
- Start with large cap
- Add other sizes gradually

### Intermediate Portfolio
- 10-15 stocks
- Mix of large, mid, small cap
- 3-4 sectors

### Advanced Portfolio
- 20-30 stocks
- All sectors represented
- Different risk profiles

### Large Portfolio
- 30+ stocks
- Could use Mutual Funds instead
- Very diversified

## Building Your Portfolio

### Step 1: Decide Allocation
Example:
- Large Cap: 50%
- Mid Cap: 30%
- Small Cap: 20%

### Step 2: Sector Selection
- Finance (₹50,000)
- IT (₹30,000)
- FMCG (₹20,000)

### Step 3: Stock Selection
- Research stocks in each sector
- Choose fundamentally strong companies
- Vary risk profiles

### Step 4: Buy and Monitor
- Start with available capital
- Rebalance periodically (1-2 years)
- Add more stocks with new capital

## Portfolio Allocation Table

| Holding Size | Large Cap | Mid Cap | Small Cap |
|-------------|-----------|---------|-----------|
| ₹1-5 Lakh | 5-10% each | 2-3% each | Skip or minimal |
| ₹5-20 Lakh | 5-8% each | 2-5% each | 1-3% each |
| ₹20+ Lakh | 3-5% each | 2-4% each | 1-3% each |

## Sector Allocation Example

₹1 Lakh Portfolio:
- Banking: ₹20,000 (20%)
- IT: ₹20,000 (20%)
- FMCG: ₹15,000 (15%)
- Pharma: ₹15,000 (15%)
- Auto: ₹15,000 (15%)
- Others: ₹15,000 (15%)

## Rebalancing Your Portfolio

### When to Rebalance
- Yearly review
- When one sector exceeds 40% of portfolio
- When allocation drifts significantly

### How to Rebalance
1. Check current allocation
2. Identify overweight positions
3. Sell some of overweight stocks
4. Buy underweight stocks

### Example
Portfolio started as: 50% Finance, 30% IT, 20% Pharma
After 2 years: 60% Finance, 20% IT, 20% Pharma
Finance grew more = Sell 10% of Finance, Buy IT

## Common Diversification Mistakes

### Too Many Stocks
- More than 30 stocks = difficult to track
- Spreads focus too thin
- Better to use Mutual Fund

### Too Concentrated
- Less than 5 stocks = too risky
- Need minimum diversity

### Wrong Variety
- Only banking stocks = not diversified
- Only growth stocks = too risky

### Not Rebalancing
- Portfolio drifts from original plan
- Risk profile changes unintentionally

## Diversification Benefits
- Reduces portfolio volatility
- Provides multiple income opportunities
- Protects against market shocks
- More consistent returns
- Better sleep at night!

## Important Note
Diversification doesn't eliminate risk; it reduces specific risk. Market risk always exists.
    `,
    keyPoints: [
      "Diversification spreads investment across multiple stocks",
      "Reduces risk of losing entire investment",
      "Spread across sectors and company sizes",
      "Start with 5-10 stocks, grow gradually",
      "Rebalance portfolio annually for best results",
    ],
    duration: "16 mins",
  },
  "1-15": {
    id: 15,
    title: "How to Research and Analyze a Stock",
    moduleId: 1,
    content: `
Before buying a stock, research it thoroughly. Good research reduces risk and identifies quality investments.

## Research Sources

### Official Sources
- Company website and investor relations
- Stock exchange filings (NSE, BSE)
- SEBI website for regulatory info

### Financial Websites
- MoneyControl
- EconomicTimes
- StockEdge
- Market Mojo

### News Sources
- Business newspapers (Economic Times, BSE India)
- News websites (CNBC, Business Today)
- Official company press releases

## Basic Information Gathering

### Company Profile
- What does the company do?
- Which sector does it belong to?
- Market position and competitors
- Long-term vision and goals

### Marketing and Competition
- Who are main competitors?
- Company's market share
- Competitive advantages
- Growth potential

## Financial Analysis

### Annual Report Information
- Revenue (sales)
- Profit (net income)
- Debt levels
- Cash reserves
- Returns on equity (ROE)

### Key Financial Ratios

**P/E Ratio (Price-to-Earnings)**
- Stock Price ÷ Earnings Per Share
- Lower can mean undervalued
- Compare with industry average

**P/B Ratio (Price-to-Book)**
- Stock Price ÷ Book Value Per Share
- Indicates valuation vis-a-vis assets

**ROE (Return on Equity)**
- Company profit ÷ Shareholder equity
- Higher is better (above 15% is good)

**Debt-to-Equity Ratio**
- Company debt ÷ Shareholder equity
- Lower is safer (below 1.0 is good)

**Current Ratio**
- Current assets ÷ Current liabilities
- Above 1.5 is healthy

## Fundamental Analysis

### Growth Analysis
- Revenue growth rate (year-over-year)
- Profit growth rate
- Compare with industry growth
- Future growth potential

### Profitability Analysis
- Profit margins (net, operating, gross)
- Whether company is becoming more profitable
- Sustainability of profitability

### Management Quality
- Top management background and experience
- Track record of past performances
- Corporate governance standards
- Promoter backing

### Industry Position
- Market leader or follower?
- Competitive advantages
- Industry growth prospects
- Regulatory environment

## Financial Health Check

### Revenue Stability
- Is revenue growing consistently?
- Are there sudden drops?
- What causes revenue changes?

### Profit Quality
- Are profits growing with revenue?
- Are one-time gains inflating profits?
- Operating profit trend important

### Cash Flow Health
- Is company generating cash?
- Cash reserves growing or falling?
- Can it fund operations and dividends?

### Debt Analysis
- Total debt levels
- Debt trends (increasing or decreasing)
- Interest coverage ratio
- Can company repay debt?

## Red Flags to Avoid

### Immediate Red Flags
- Continuous losses
- Rising debt while profits fall
- Falling cash reserves
- Management fraud or misconduct

### Concerning Indicators
- Revenue declining
- Profit margins contracting
- High debt-to-equity ratio
- Customer losses
- Regulatory issues

### Warning Signs
- Frequent director changes
- Suspiciously inflated profits
- Accounting changes
- Missed corporate announcements

## Positive Indicators

### Green Flags
- Consistent revenue growth
- Increasing profit margins
- Strong cash generation
- Decreasing debt levels
- Good management

### Strength Indicators
- Market leadership
- Unique products/services
- Growing market share
- Strong brand value
- Efficient operations

## Valuation Check

### Fair Value Assessment
- Compare P/E ratio with peers
- Check historical P/E ratios
- Industry average P/E
- Growth justified valuation

### Price-to-Growth Ratio
- P/E Ratio ÷ Growth Rate
- Lower is better
- Helps find reasonable valuations

## Decision Checklist

Before buying any stock:
- ☑ Company's business is understandable
- ☑ Company is profitable and growing
- ☑ Debt levels are manageable
- ☑ Management is capable
- ☑ Valuation is reasonable
- ☑ Industry has good prospects
- ☑ Price aligns with value
- ☑ You're buying for right reasons

## Research Tips

### Research Discipline
- Never skip research due to FOMO (Fear of Missing Out)
- Spend at least 30 minutes on stock research
- Read annual reports carefully
- Compare with 3-4 competitors

### Avoid Research Pitfalls
- Don't rely only on tips
- Don't ignore bad news
- Don't analyze only when buying
- Don't assume past performance = future

### Ongoing Monitoring
- Review holdings quarterly
- Track major news about company
- Monitor quarterly results
- Check if thesis still valid
    `,
    keyPoints: [
      "Research stock before buying to reduce risk",
      "Check fundamentals: Revenue, Profit, Debt",
      "Compare P/E ratio with industry peers",
      "Monitor management quality and track record",
      "Avoid red flags: losses, rising debt, fraud",
    ],
    duration: "18 mins",
  },
  "2-1": {
    id: 1,
    title: "Candlestick Patterns 101",
    moduleId: 2,
    content: `
Candlesticks are the fundamental building blocks of technical analysis. Each candlestick represents price action over a specific time period.

## How to Read a Candlestick

### Components
A candlestick consists of:
1. **Open**: Price when the candle started
2. **Close**: Price when the candle ended  
3. **High**: Highest price during the period
4. **Low**: Lowest price during the period
5. **Body**: Distance between open and close
6. **Wicks**: Lines extending above and below the body

### Color Interpretation
- **Green/White Candle**: Close > Open (Bullish)
- **Red/Black Candle**: Close < Open (Bearish)

## Common Candlestick Patterns

### Bullish Patterns (Price going up)
1. **Hammer**: Small body, long lower wick
   - Indicates support and potential reversal
   - Appears at bottoms

2. **Engulfing**: Larger candle completely covers previous candle
   - Strong bullish signal
   - Shows reversal in momentum

3. **Morning Star**: Three candles showing reversal
   - Small bearish candle
   - Gap down with small body
   - Green candle that recovers losses

### Bearish Patterns (Price going down)
1. **Shooting Star**: Small body, long upper wick
   - Indicates rejection of higher prices
   - Appears at tops

2. **Engulfing**: Larger candle covers previous candle
   - Strong bearish signal
   - Shows reversal in momentum

3. **Evening Star**: Three candles showing reversal
   - Small bullish candle
   - Gap up with small body
   - Red candle that covers losses

## Visual Pattern Reference

[VISUALIZATION:CandlestickPatterns]

## Key Characteristics

### Long Wick Meaning
- **Upper wick**: Buyers tried but sellers took over
- **Lower wick**: Sellers tried but buyers took over
- Indicates indecision and potential reversal

### Body Size Meaning
- **Large body**: Strong conviction about direction
- **Small body**: Indecision in the market
- **No body (Doji)**: Complete indecision

## Reading Candlestick Charts

### Time Frames
- **1-minute**: Ultra-short term trading
- **5-minute**: Day trading
- **1-hour**: Intraday trading
- **Daily**: Swing trading
- **Weekly/Monthly**: Long-term investing

### Pattern Confirmation
- Always wait for pattern completion
- Volume confirmation important
- Support/resistance zones matter
- Don't trade isolated patterns

## Practical Trading Tips
- Combine multiple patterns for confirmation
- Always use stop loss with candle patterns
- Backtest patterns before trading
- Don't rely on candles alone
    `,
    keyPoints: [
      "Candlesticks show open, close, high, low for a period",
      "Green candles: bullish, Red candles: bearish",
      "Patterns repeat because of human psychology",
      "Wicks show rejection or acceptance of prices",
      "Always confirm patterns with volume and support/resistance",
    ],
    duration: "16 mins",
  },
  "2-2": {
    id: 2,
    title: "Support & Resistance Levels",
    moduleId: 2,
    content: `
Support and resistance are crucial concepts in technical analysis that help identify key price levels where stocks are likely to reverse or consolidate.

## What is Support?

Support is a price level where demand is strong enough to prevent prices from falling further.

### Characteristics
- Multiple touches strengthen support
- Horizontal lines form natural support
- Volume matters at support levels
- Broken support becomes resistance

### How to Identify
- Look at previous lows
- Multiple touches at same level
- Price bounces from this level
- Volume increases at support

## What is Resistance?

Resistance is a price level where supply is strong enough to prevent prices from rising further.

### Characteristics
- Multiple touches strengthen resistance
- Horizontal lines form natural resistance
- Volume matters at resistance
- Broken resistance becomes support

### How to Identify
- Look at previous highs
- Multiple touches at same level
- Price falls from this level
- Volume increases at resistance

## Support Levels

### Types
1. **Horizontal Support**: Price stalls at same level multiple times
2. **Trend Line Support**: Diagonal line connecting lows
3. **Moving Average Support**: Price bounces off MA
4. **Psychological Support**: Round numbers like 100, 500

### Strength Factors
- Number of touches: More touches = stronger
- Age: Older levels = weaker
- Volume: Higher volume = stronger
- Time interval: Longer timeframes = stronger

## Resistance Levels

### Types
1. **Horizontal Resistance**: Price stalls at same level
2. **Trend Line Resistance**: Diagonal line connecting highs
3. **Moving Average Resistance**: Price rejected by MA
4. **Psychological Resistance**: Round numbers

### Strength Factors
- Multiple touches = stronger
- Older resistance = weaker with time
- Volume = higher volume stronger
- Longer timeframes = more significant

## Trading Support & Resistance

### Buy at Support
- Wait for confirmation near support
- Place stop loss below support
- Target next resistance
- Volume should increase on bounce

### Sell at Resistance
- Wait for confirmation near resistance
- Place stop loss above resistance
- Target next support
- Volume should increase on reversal

### Level Breaks
- When support breaks: becomes new resistance
- When resistance breaks: becomes new support
- Broken levels lose importance over time
- Look for new support/resistance beyond breach

## Tools for Identifying Levels

### Manual Method
- Scroll chart and mark previous highs/lows
- Draw horizontal lines
- Look for clusters of levels
- Combine with volume

### Technical Tools
- Pivot points
- Fibonacci retracements
- Moving averages
- Volume profile

## Practical Example

Stock ABC at ₹100:
- Support at ₹95 (touched 3 times)
- Resistance at ₹105 (touched 2 times)
- Stock falls to ₹95 → buy opportunity
- Stop loss at ₹92
- Target resistance at ₹105
    `,
    keyPoints: [
      "Support where buyers step in, Resistance where sellers",
      "Multiple touches strengthen levels",
      "Broken support becomes resistance and vice versa",
      "Combine support/resistance with volume for confirmation",
      "Use levels for placing stop loss and targets",
    ],
    duration: "14 mins",
  },
  "2-3": {
    id: 3,
    title: "Understanding Trends",
    moduleId: 2,
    content: `
Trends are the general direction of price movement. Understanding and following trends is one of the most important aspects of technical analysis.

## What is a Trend?

A trend is a consistent direction in which a stock's price is moving over time. The famous saying: "The trend is your friend."

## Types of Trends

### Uptrend
- Series of higher highs and higher lows
- Each new high is above previous high
- Each new low is above previous low
- Buyers in control of market
- Opportunity to buy on dips

### Downtrend
- Series of lower highs and lower lows
- Each new high is below previous high
- Each new low is below previous low
- Sellers in control of market
- Opportunity to sell on rallies

### Sideways/Consolidation
- Price moves between support and resistance
- No clear direction
- Preparation for breakout
- Avoid trading until breakout

## Trend Duration

### Short-term Trends
- Hours to days
- Timeframe: 1-minute, 5-minute, 15-minute
- Used by day traders
- Volatile and sensitive to news

### Medium-term Trends
- Weeks to months
- Timeframe: 1-hour, 4-hour, daily
- Used by swing traders
- More reliable than short-term

### Long-term Trends
- Months to years
- Timeframe: daily, weekly, monthly
- Used by investors
- Very reliable for investment decisions

## Trend Lines

### Drawing Trend Lines

**Uptrend Line**:
- Connect at least 2 lows
- Line should slope upward
- Ideally 3+ touches confirm
- Price bounces off this line

**Downtrend Line**:
- Connect at least 2 highs
- Line should slope downward
- Ideally 3+ touches confirm
- Price rebounds from this line

### Trend Line Strength
- Number of touches: More = stronger
- Angle: Steeper = less sustainable
- Age: Older = stronger
- Volume: Higher volume = stronger support

## Following the Trend

### In an Uptrend
- Buy on dips (when price tests support)
- Set profit targets at resistance
- Stop loss below recent support
- Avoid shorting (selling)
- Hold winners

### In a Downtrend
- Sell on rallies (when price tests resistance)
- Set targets at next support
- Stop loss above recent resistance
- Avoid buying/long positions
- Cut losses quickly

### In Consolidation
- Wait for breakout
- Don't anticipate direction
- When breakout happens, follow the new direction
- Can trade range (buy support, sell resistance)

## Trend Reversals

### Signs of Potential Reversal in Uptrend
- Lower high than previous high
- Lower low than previous low
- Price breaks below support
- Volume decreases on rallies
- Divergence on indicators

### Signs of Potential Reversal in Downtrend
- Higher high than previous high
- Higher low than previous low
- Price breaks above resistance
- Volume increases on bounce
- Divergence on indicators

## Key Principles

1. **Trend Persistence**: Trends tend to continue longer than people think
2. **Trend Strength**: Steeper trends are harder to sustain
3. **Trend Confirmation**: Volume matters for confirming trends
4. **Trend Duration**: Longer timeframe trends are more reliable
5. **Trend Reversal**: Look for multiple signs before calling reversal
    `,
    keyPoints: [
      "Uptrend: series of higher highs and higher lows",
      "Downtrend: series of lower highs and lower lows",
      "Trends can be short, medium, or long-term",
      "Trend lines drawn through support or resistance",
      "Always follow trend, don't fight it for profits",
    ],
    duration: "15 mins",
  },
  "2-4": {
    id: 4,
    title: "Moving Averages",
    moduleId: 2,
    content: `
Moving averages smooth out price data to identify trends more clearly. They're among the most popular technical indicators.

## What is a Moving Average?

A moving average is the average price of a stock over a specific number of periods, calculated repeatedly as new data arrives.

## Types of Moving Averages

### Simple Moving Average (SMA)
- Most common and easy to understand
- Calculation: Sum of prices ÷ Number of periods
- Example: 50-day SMA = Sum of last 50 closes ÷ 50

**Advantages**:
- Easy to calculate and understand
- Less responsive to recent changes
- Good for identifying long-term trends

**Disadvantages**:
- Lag (slow to react)
- Gives equal weight to all prices
- May miss quick turning points

### Exponential Moving Average (EMA)
- Gives more weight to recent prices
- More responsive than SMA
- Better at catching trend changes

**Advantages**:
- Faster to react to price changes
- Good for short-term trading
- Follows current trend better

**Disadvantages**:
- More prone to false signals
- Complex calculation
- Sensitive to recent spikes

## Common Moving Average Periods

### Short-term (Fast MA)
- 5, 10, 20-day moving averages
- Used for day trading
- More responsive to changes
- More whipsaws and false signals

### Medium-term (Medium MA)
- 50-day moving average
- Used for swing trading
- Good balance of sensitivity and reliability

### Long-term (Slow MA)
- 100, 150, 200-day moving averages
- Used for investing
- Smooth trends
- Less false signals

## Trading with Moving Averages

### Price Above MA (Bullish)
- Stock is in uptrend
- Good time to buy
- Support may form at MA

### Price Below MA (Bearish)
- Stock is in downtrend
- Good time to sell/avoid
- Resistance may form at MA

### MA Crossover Strategy

**Golden Cross**: (Bullish Signal)
- Fast MA crosses above Slow MA
- Example: 50-day MA crosses above 200-day MA
- Generate buy signals
- Indicates uptrend starting

**Death Cross**: (Bearish Signal)
- Fast MA crosses below Slow MA
- Example: 50-day MA crosses below 200-day MA
- Generate sell signals
- Indicates downtrend starting

## Multiple Moving Averages

### 3 MA System
1. Fast MA (21-day)
2. Medium MA (55-day)
3. Slow MA (200-day)

**Setup**:
- Price above all three = strong uptrend
- All MAs aligned upward = strong uptrend
- Buy when 21 crosses above 55 and both above 200

### Golden Pocket Strategy
When fast MA is between medium and slow MA:
- Stock consolidating or reversing
- When price breaks through fast MA could signal reversal
- Watch for quick breakout

## Moving Average Tips

### Trading Signals
1. Price crossing MA
2. MA crossing another MA
3. Price bouncing off MA (support/resistance)
4. Multiple MAs alignment

### Reliability Rules
- Longer timeframes = more reliable
- Use multiple MAs together
- Combine with volume
- Combine with support/resistance
- Watch for divergences

### Common Mistakes
- Using MA on short timeframes (too many false signals)
- Trusting single MA crossover (not enough confirmation)
- Not considering volume
- Ignoring support/resistance levels
- Over-trading the MA signals
    `,
    keyPoints: [
      "Moving average smooths price and identifies trends",
      "SMA: simple but slow, EMA: fast but prone to whipsaws",
      "Price above MA: bullish, Price below MA: bearish",
      "Golden cross: fast MA above slow MA (buy signal)",
      "Death cross: fast MA below slow MA (sell signal)",
    ],
    duration: "16 mins",
  },
  "2-5": {
    id: 5,
    title: "RSI & MACD Indicators",
    moduleId: 2,
    content: `
Momentum indicators like RSI and MACD help identify overbought and oversold conditions, as well as trend strength and direction changes.

## RSI (Relative Strength Index)

### What is RSI?
- Measures momentum (speed of price changes)
- Ranges from 0 to 100
- Indicator of overbought or oversold conditions
- Helps identify potential reversals

### Calculation
- Uses last 14 periods by default
- Compares gains vs losses
- Formula: RSI = 100 - (100 / (1 + RS))
- Where RS = Average gains / Average losses

### Interpretation

**RSI Below 30**: Oversold
- Stock sold too much
- May bounce back
- Potential buy opportunity
- But it can go lower in strong downtrend

**RSI Above 70**: Overbought
- Stock bought too much
- May pull back
- Potential sell opportunity
- But it can go higher in strong uptrend

**RSI 50**: Neutral
- No clear direction
- Between bulls and bears
- Neither overbought nor oversold

### Trading Signals
1. RSI crosses above 30: Bullish (upturn)
2. RSI crosses below 70: Bearish (downturn)
3. Divergence: RSI and price moving opposite (reversal signal)

### RSI Divergence

**Bullish Divergence**:
- Price makes lower low
- RSI makes higher low
- Signal: Downtrend may end
- Action: Look for buy signal

**Bearish Divergence**:
- Price makes higher high
- RSI makes lower high
- Signal: Uptrend may end
- Action: Look for sell signal

## MACD (Moving Average Convergence Divergence)

### What is MACD?
- Shows relationship between two moving averages
- Helps identify momentum and trend direction
- Three components: MACD line, Signal line, Histogram

### Components

1. **MACD Line** (Fast - Slow MA):
   - 12-day EMA minus 26-day EMA
   - Shows momentum direction
   - Moving line on chart

2. **Signal Line**:
   - 9-day EMA of MACD line
   - Triggers buy/sell signals
   - When MACD crosses signal line

3. **Histogram**:
   - Difference between MACD and Signal line
   - Visual representation
   - Shows momentum strength

### Trading Signals

**MACD Crossover** (Most Important):
- MACD crosses above Signal: BUY signal
- MACD crosses below Signal: SELL signal
- Most reliable when above/below zero line

**Zero Line Crossover**:
- MACD crosses above zero: Strong buy
- MACD crosses below zero: Strong sell
- Indicates trend direction change

**Divergence**:
- Price new high, MACD lower high: Sell
- Price new low, MACD higher low: Buy
- Indicates weakness in trend

### Histogram Color
- Green histogram: MACD above signal line (bullish)
- Red histogram: MACD below signal line (bearish)
- Growing histogram: Momentum increasing
- Shrinking histogram: Momentum decreasing

## RSI vs MACD

| Feature | RSI | MACD |
|---------|-----|------|
| Range | 0-100 | No range |
| Best For | Overbought/Oversold | Trend & Momentum |
| Signal Type | Level-based | Crossover-based |
| Lag | Moderate | Low-Moderate |

## Combined Strategy

### Buy Signal (Both indicators agree)
- RSI crosses above 30 (from below)
- MACD crosses above signal line
- Both above zero line
- Volume confirms

### Sell Signal (Both indicators agree)
- RSI crosses below 70 (from above)
- MACD crosses below signal line
- Both below zero line
- Volume confirms

## Tips for Using These Indicators

1. Never trade on indicator signal alone
2. Combine with price action and volume
3. Use on appropriate timeframe
4. Watch for divergences
5. Confirm with other indicators
    `,
    keyPoints: [
      "RSI measures overbought (>70) and oversold (<30)",
      "MACD shows momentum through line crossovers",
      "Divergence in both: potential reversal signals",
      "Use both together for stronger confirmation",
      "Combine indicators with price action",
    ],
    duration: "17 mins",
  },
  "2-6": {
    id: 6,
    title: "Chart Patterns - Triangles & Flags",
    moduleId: 2,
    content: `
Chart patterns are visual representations of market psychology. Triangles and flags are continuation patterns that signal further movement in the same direction.

## Triangle Patterns

### Symmetric Triangle
- Two converging trendlines
- High and lows getting closer
- Indication of consolidation
- Breakout expected in original direction

**Setup**:
- Uptrend before triangle: Breakout upward likely
- Downtrend before triangle: Breakout downward likely
- Volume decreases inside triangle
- Volume increases on breakout

**Trading**:
- Buy above triangle top (if uptrend)
- Sell below triangle bottom (if downtrend)
- Stop loss beyond opposite end
- Target = pattern height added to breakout point

### Ascending Triangle
- Lower trendline slopes up
- Upper trendline horizontal
- Resistance at upper line
- Bullish pattern

**Characteristics**:
- Higher lows each time
- Resistance at same level
- Volume increasing upward
- Breaks through resistance

**Trading**:
- Buy when price breaks above resistance
- Stop loss below recent low
- Target = resistance level + pattern height

### Descending Triangle
- Upper trendline slopes down
- Lower trendline horizontal
- Support at lower line
- Bearish pattern

**Characteristics**:
- Lower highs each time
- Support at same level
- Volume increasing downward
- Breaks through support

**Trading**:
- Sell when price breaks below support
- Stop loss above recent high
- Target = support level - pattern height

## Flag Patterns

### Bullish Flag
- Consolidation after sharp uptrend
- Slopes downward against trend
- Sideways movement on lower volume
- Then sharp move up continues

**Characteristics**:
- Strong uptrend before flag
- Sharp downward slope
- Relatively small consolidation
- Clear breakout upward

**Trading**:
- Buy on breakout above top of flag
- Stop loss below flag
- Target = pole height added to breakout point

### Bearish Flag
- Consolidation after sharp downtrend
- Slopes upward against trend
- Sideways movement on lower volume
- Then sharp move down continues

**Characteristics**:
- Strong downtrend before flag
- Sharp upward slope
- Relatively small consolidation
- Clear breakout downward

**Trading**:
- Sell on breakout below bottom of flag
- Stop loss above flag
- Target = pole height subtracted from breakout point

### Pennant Pattern
- Very small triangle after strong move
- Consolidation in tight range
- Breakout usually explosive
- Can be bullish or bearish

**Formation**:
- Strong impulse move (pole)
- Small consolidation (pennant)
- Quick breakout in trend direction
- High volume on breakout

## Pattern Reliability

### Success Factors
1. Clear impulse move before pattern
2. Volume pattern matches expectations
3. Pattern has proper formation
4. Clear breakout direction
5. Market sentiment aligns

### False Signals
- Premature breakout (fake out)
- No volume confirmation
- Pattern not properly formed
- Goes against major support/resistance
- Conflicting indicators

## Trading Pattern Breakouts

### Confirmation Checklist
- ☑ Price closes beyond supply/demand line
- ☑ Volume increases on breakout
- ☑ Other timeframes confirm
- ☑ Support/resistance aligns
- ☑ Indicators agree (RSI, MACD)

### Risk Management
- Stop loss just beyond opposite end
- Risk-Reward should be favorable
- Don't chase after big move
- Take profits at target
- Scale in on long patterns
    `,
    keyPoints: [
      "Symmetric triangle: breakout in trend direction",
      "Ascending triangle: bullish, breakout upward",
      "Descending triangle: bearish, breakout downward",
      "Flag is small consolidation after sharp move",
      "Confirm patterns with volume and indicators",
    ],
    duration: "15 mins",
  },
  "2-7": {
    id: 7,
    title: "Volume & Price Action",
    moduleId: 2,
    content: `
Volume is the number of shares traded. It's crucial for confirming price movements and identifying the strength of trends.

## Understanding Volume

### What is Volume?
- Number of shares traded during a period
- Measured in shares or contracts
- Shows market participation
- Critical for confirming trends

### Why Volume Matters?
- Shows strength of price movement
- Confirms breakouts and reversals
- Identifies institutional buying/selling
- Reveals market interest

## Volume Analysis

### High Volume
- Many shares traded
- Strong buyer interest or seller pressure
- Significant move likely to sustain
- Increased odds of breakout

### Low Volume
- Few shares traded
- Lack of interest
- Move may not sustain
- Potential reversal likely

### Volume Patterns

**Increasing Volume**:
- Price moving up + volume up = Bullish
- Price moving down + volume up = Bearish
- Confirms trend strength
- Breakout likely to hold

**Decreasing Volume**:
- Price moving up + volume down = Weak uptrend
- Price moving down + volume down = Weak downtrend
-Trend may reverse
- Consolidation period

## Price Action Trading

### What is Price Action?
- Analyzing price movements without indicators
- Reading candlesticks and patterns
- Understanding buyer/seller behavior
- Combined with volume analysis

### Key Price Action Concepts

**Support Bounce**:
- Price approaches support
- Volume increases
- Strong bounce expected
- Buy opportunity

**Resistance Rejection**:
- Price approaches resistance
- Volume increases
- Strong rejection expected
- Sell opportunity

**Breakout**:
- Price breaks level decisively
- Volume increases significantly
- Continuation expected
- Trade with trend

**Fail Breakout (Fakeout)**:
- Price breaks level
- Volume doesn't confirm
- Price quickly reverses
- Avoid trading

## Volume Confirmation Rules

### Uptrend Confirmation
1. Price makes higher high
2. Volume must increase on uptick
3. Pullback has lower volume
4. Next push up has higher volume

### Downtrend Confirmation
1. Price makes lower low
2. Volume must increase on down move
3. Bounce has lower volume
4. Next decline has higher volume

### Consolidation Pattern
- Volume decreases
- Price moves sideways
- Preparation for breakout
- On breakout, volume should spike

## Volume Divergence

### Bullish Divergence
- Price makes lower low
- Volume doesn't make lower low
- Buyers still buying on dips
- Downtrend weakening
- Buy setup on next bounce

### Bearish Divergence
- Price makes higher high
- Volume doesn't make higher high
- Sellers not aggressive
- Uptrend weakening
- Sell setup on next pullback

## Advanced Volume Indicators

### On-Balance Volume (OBV)
- Cumulative volume indicator
- Adds volume on up days
- Subtracts volume on down days
- Shows accumulation/distribution

### Volume Rate of Change
- Measures volume speed
- High = strong trend
- Low = trend weakening

### Accumulation/Distribution Line
- Shows money flow
- Accumulation: smart money buying
- Distribution: smart money selling

## Trading with Volume

### Buy Signals
- Price bounces from support on high volume
- Break above resistance with volume spike
- Higher low formation with increasing volume
- Price above MA, volume above average

### Sell Signals
- Price rejected at resistance on high volume
- Break below support with volume spike
- Lower high formation with increasing volume
- Price below MA, volume above average

### Avoid Trading When
- Volume is very low
- Volume doesn't confirm price move
- Volume decreases on breakout
- Price action contradicts volume
    `,
    keyPoints: [
      "High volume on trend confirms strength",
      "Low volume suggests trend weakness",
      "Volume must confirm breakouts",
      "Divergences between price and volume = reversal",
      "Never ignore volume in your analysis",
    ],
    duration: "14 mins",
  },
  "2-8": {
    id: 8,
    title: "Breakouts & Reversals",
    moduleId: 2,
    content: `
Breakouts occur when price breaks through a significant level, while reversals happen when the trend changes direction. Both offer great trading opportunities.

## Understanding Breakouts

### What is a Breakout?
- Price moves beyond established support or resistance
- Breaking through a significant level
- Usually followed by continued movement
- High probability trade when confirmed

### Types of Breakouts

**Bullish Breakout**:
- Price breaks above resistance
- Strong upward move expected
- Buy signal
- Part of uptrend continuation

**Bearish Breakout**:
- Price breaks below support
- Strong downward move expected
- Sell signal
- Part of downtrend continuation

**Breakout from Consolidation**:
- After sideways movement
- Strong move in breakout direction
- Highest probability breakouts
- After volume decrease during consolidation

## Breakout Confirmation

### Volume Confirmation (Most Important)
- Breakout volume > average volume
- Volume should spike on breakout candle
- Absence of volume = false breakout
- Low volume breakouts frequently fail

### Price Action Confirmation
- Close beyond level, not just wick
- Gap hole (open beyond level)
- Second candle continues movement
- Multiple candles forming new trend

### Indicator Confirmation
- RSI moves above 70 (bullish) or below 30 (bearish)
- MACD crosses signal line
- Moving average alignment
- Multiple indicators agreeing

### Time Confirmation
- Higher timeframe alignment important
- Breakout on daily confirms intraday
- Weekly chart trend matters
- Longer timeframes = more reliable

## Identifying False Breakouts (Fakeouts)

### Signs of Fakeout
- Low volume on breakout candle
- Closes back within the level
- No follow-through buying/selling
- Next candle reverses

### Common Fakeout Locations
- Around earnings announcements
- During low volume periods
- Before major news events
- When RSI already overbought/oversold

### How to Protect Yourself
- Require volume confirmation
- Wait for second candle confirmation
- Place stop loss close to level
- Use small position sizes for breakouts

## Understanding Reversals

### What is a Reversal?
- Shift from one direction to opposite direction
- Can be quick (reversal day) or gradual
- Change in trend direction
- New opportunities appear

### Types of Reversals

**Bullish Reversal**:
- Downtrend changes to uptrend
- Price starts making higher highs and higher lows
- After series of lower lows
- Signals buying opportunity

**Bearish Reversal**:
- Uptrend changes to downtrend
- Price starts making lower highs and lower lows
- After series of higher highs
- Signals selling opportunity

## Reversal Patterns

### V-Shaped Reversal
- Price falls sharply
- Quick bounce back
- Minimal consolidation
- Strong reversal signal

### U-Shaped Reversal
- Price falls gradually
- Consolidation period
- Gradual recovery
- Slower moving reversal

### Reversal Day
- Price trends one direction
- Near end of session, reverses
- Closes opposite direction
- Potential daily reversal

## Trading Reversals

### Reversal Entry Signals
1. Previous level breaks (support/resistance flip)
2. Chart patterns complete (head and shoulders)
3. Divergence on indicators confirming
4. Volume pattern changes
5. Candlestick reversal pattern forms

### Reversal Confirmation Checklist
- ☑ Multiple confirmation signals present
- ☑ Volume increases on reversal
- ☑ Price holds above/below new level
- ☑ Indicators align with reversal
- ☑ Risk-reward is favorable

## Trading Strategy

### Breakout Strategy
1. Identify consolidation or resistance
2. Wait for volume confirmation
3. Enter on breakout candle close
4. Stop loss at previous level
5. Target = prior move size + breakout point

### Reversal Strategy
1. Identify extreme RSI reading
2. Spot divergence on charts
3. Wait for candlestick confirmation
4. Enter on reversal candle close
5. Stop loss beyond extreme
6. Target next support/resistance

### Risk Management
- Risk only 1-2% per trade
- Stop loss beyond confirmation level
- Take profits at predetermined target
- Don't chase breakouts after big moves
- Scale into reversals, don't go all-in
    `,
    keyPoints: [
      "Breakout: price breaks support/resistance",
      "Volume confirmation essential for breakouts",
      "False breakouts common in low volume",
      "Reversal: trend direction changes",
      "Multiple confirmations reduce false signals",
    ],
    duration: "16 mins",
  },
  "3-1": {
    id: 1,
    title: "Reading Financial Statements",
    moduleId: 3,
    content: `
Financial statements are the foundation of fundamental analysis. Understanding them helps you evaluate a company's financial health.

## Three Main Financial Statements

### Income Statement (P&L)
Shows company's profitability over a period.

**Key Items**:
- Revenue: Total sales
- Cost of Goods Sold (COGS): Direct production costs
- Gross Profit: Revenue - COGS
- Operating Expenses: Salaries, rent, utilities
- Operating Profit: Gross - Operating expenses
- Net Profit: Bottom line profit

**Analysis**:
- Revenue growing year-over-year = good
- COGS decreasing as % of revenue = good
- Net profit growing = healthy company

### Balance Sheet
Snapshot of company's financial position at a point in time.

**Assets**:
- Current assets: Cash, receivables, inventory
- Fixed assets: Buildings, equipment

**Liabilities**:
- Current liabilities: Short-term debt, payables
- Long-term liabilities: Long-term debt

**Equity**:
- Shareholder equity: Assets - Liabilities
- Represents owner's stake

**Analysis**:
- Strong equity = financially healthy
- Low debt = less risk
- Assets > Liabilities = good position

### Cash Flow Statement
Shows actual cash movement in company.

**Three Sections**:
1. Operating CF: Cash from business operations
2. Investing CF: Cash from investments/assets
3. Financing CF: Cash from debt/equity

**Analysis**:
- Positive operating cash = business is profitable
- Growing OCF = business improving
- Declining OCF with growing profit = red flag

## Reading Annual Reports

### Key Sections
1. Letter from CEO
2. Management Discussion & Analysis
3. Financial Statements
4. Footnotes
5. Auditor's Report

### What to Look For
- Revenue growth trend
- Profit growth trend
- Debt levels
- Cash position
- Competitive advantages
- Future guidance

## Common Financial Metrics

### Profitability Metrics
- Gross Margin: (Gross Profit ÷ Revenue) × 100
- Operating Margin: (Operating Profit ÷ Revenue) × 100
- Net Margin: (Net Profit ÷ Revenue) × 100

### Liquidity Metrics
- Current Ratio: Current Assets ÷ Current Liabilities
- Quick Ratio: (Current Assets - Inventory) ÷ Current Liabilities

### Solvency Metrics
- Debt-to-Equity: Total Debt ÷ Equity
- Debt-to-Assets: Total Debt ÷ Total Assets

## Red Flags in Financial Statements

### Danger Signs
- Declining revenue
- Profit declining while revenue increasing
- Rising debt levels
- Decreasing cash reserves
- High accounts receivable (customers not paying)
- Frequent restatements
- Changes in auditors

### Warning Signs
- One-time gains boosting profits
- Revenue recognition changes
- Large capital expenditures
- Related party transactions
- Excessive management compensation

## Understanding Notes to Statements

### Important Information
- Accounting policies used
- Contingent liabilities
- Related party transactions
- Segment information
- Subsequent events

### Red Flags in Notes
- Many critical accounting policies
- Large contingent liabilities
- Frequent related party transactions
- Management conflicts
- Legal disputes

## Year-over-Year Comparison

### What to Compare
- Revenue this year vs last year
- Growth percentage
- Profit trends
- Debt trends
- Cash position

### Trend Analysis
- 3-year trends most meaningful
- Growth consistency important
- Look for acceleration or deceleration
- Compare with competitors
    `,
    keyPoints: [
      "Income statement shows profitability",
      "Balance sheet shows financial position",
      "Cash flow statement shows actual cash movement",
      "Look for growing revenue and profit",
      "Watch for declining cash and rising debt",
    ],
    duration: "15 mins",
  },
  "3-2": {
    id: 2,
    title: "P/E Ratio & Valuation",
    moduleId: 3,
    content: `
The P/E ratio is the most common valuation metric. Understanding it helps identify fairly valued, undervalued, and overvalued stocks.

## What is P/E Ratio?

P/E Ratio = Stock Price ÷ Earnings Per Share

### Example
- Stock price: ₹100
- EPS: ₹5
- P/E = 100 ÷ 5 = 20

### Interpretation
- P/E of 20 means you pay ₹20 for every ₹1 of earnings
- Higher P/E = market expects higher growth
- Lower P/E = market expects lower growth or trouble

## Types of P/E Ratios

### Trailing P/E
- Uses last 12 months of earnings
- Historical data
- Actual earnings known
- Most commonly used

### Forward P/E
- Uses projected future earnings
- Based on analyst estimates
- Theoretical
- Depends on accuracy of projections

### PEG Ratio (P/E to Growth)
- P/E ÷ Growth Rate  
- Compares valuation to growth
- PEG < 1 = undervalued relative to growth
- PEG > 2 = overvalued

## Interpreting P/E Ratios

### High P/E Ratio (>20-25)
- Market expects strong growth
- Stock may be overvalued
- Risky if growth doesn't materialize
- Tech stocks often have high P/E

### Low P/E Ratio (<10-15)
- Market expects low growth
- Could be undervalued opportunity
- Or company has problems
- Value stocks often have low P/E

### Average P/E Ratio
- NSE average around 20-25
- Compare with industry average
- Compare with historical P/E
- Use as benchmark

## Comparing P/E Ratios

### Same Company Over Time
- Was stock cheaper before?
- Current P/E vs historical average
- Trend in P/E expansion/compression

### With Competitors
- Industry average P/E
- Better company = higher P/E justified
- Similar companies should have similar P/E

### With Market Index
- Nifty average P/E
- If stock P/E < Nifty, may be undervalued
- If stock P/E > Nifty, may be overvalued

## Limitations of P/E Ratio

### Doesn't Account For:
- Debt levels (different structures)
- Growth differences (quality of earnings)
- Cyclical nature (different phases)
- One-time items affecting earnings

### Industries with Low P/E
- Banks and insurance (high yields)
- Real estate
- Manufacturing
- Mature industries

### Industries with High P/E
- Technology and IT
- Pharmaceuticals
- Growth-focused companies
- Emerging businesses

## Other Valuation Metrics

### P/B Ratio (Price-to-Book)
- Stock Price ÷ Book Value Per Share
- Good for capital-intensive businesses
- Low P/B = undervalued

### EV/EBITDA (Enterprise Value)
- Market Cap ÷ EBITDA
- Accounts for debt
- Useful for comparing across leverage

### Dividend Yield
- Annual Dividend ÷ Stock Price
- Good for dividend stocks
- Higher yield = more income

## Valuation Frameworks

### DCF Analysis (Discounted Cash Flow)
- Project future cash flows
- Discount back to present value
- Theoretical fair value
- Most accurate but complex

### Relative Valuation
- Compare P/E with peers
- Compare with historical levels
- Simpler but less precise

### Sum of Parts
- Value each business segment
- Add together for total value
- Good for diversified companies

## Red Flags in Valuation

### Warning Signs
- P/E much lower than peers (something wrong)
- Huge P/E variance in same industry
- Rising stock price with rising P/E (bubble risk)
- Earnings quality issues
    `,
    keyPoints: [
      "P/E = Stock Price ÷ Earnings Per Share",
      "High P/E: high expectations, high risk",
      "Low P/E: may be cheap or cheap for reasons",
      "Compare P/E with peers and industry",
      "Always use P/E with other metrics",
    ],
    duration: "14 mins",
  },
  "3-3": {
    id: 3,
    title: "Dividend Yield Explained",
    moduleId: 3,
    content: `
Dividend yield shows the income return from holding a stock. It's important for income-focused investors.

## What is Dividend Yield?

Dividend Yield = Annual Dividend Per Share ÷ Current Stock Price × 100

### Example
- Stock price: ₹100
- Annual dividend: ₹5
- Yield = (5 ÷ 100) × 100 = 5%

### Meaning
- 5% yield means ₹5 income per ₹100 invested annually
- Direct return from holding the stock
- Separate from capital appreciation

## Types of Yield

### Trailing Yield
- Uses last 12 months of dividends
- Actual dividends paid
- Current market reality

### Forward Yield
- Uses expected future dividends
- Projected amounts
- Depends on company continuation
- More optimistic

## Analyzing Dividend Yield

### High Yield (>4%)
- Above-average income
- Could indicate:
  - Really attractive investment
  - Market pricing in dividend cut risk
  - Stock falling (price down = yield up)

### Average Yield (2-4%)
- Around market average
- Reasonable income return

### Low Yield (<1%)
- Minimal income
- Growth focused
- Tech and growth stocks

## Dividend Sustainability

### Important Questions
1. Does company earn enough to pay dividend?
2. Is dividend growing or stable?
3. Has company maintained dividend for years?
4. Any history of cuts?
5. What's the payout ratio?

### Payout Ratio
- Dividend ÷ Earnings Per Share
- 30-50% = sustainable
- >70% = risky, may be cut
- <30% = room to grow dividend

## Dividend Growth Stocks

### Characteristics
- Increasing dividend annually
- Growing companies reinvesting profits
- Long history of dividend growth
- "Dividend aristocrats" = 10+ years growth

### Advantages
- Income increases with inflation
- Good for long-term investors
- Signals company confidence
- Historically outperform market

### Examples
- TCS, ITC, HUL, Reliance (India)

## Dividend Trap Alert

### Warning Signs
- Very high yield (>8-10%)
- Recently increased after decline
- Company losing market share
- Deteriorating financials
- Cutting capital expenses

### Real Examples
- Banks pre-2008 crisis (high yields before collapse)
- Oil companies in downturns
- Failing companies before dividend cut

## Yield Comparison

### Vs Other Investments
- Savings account: 3-4%
- Fixed deposits: 5-7%
- Dividend stocks: 2-5%
- Bonds: 5-8%
- Blue chip stocks: 1-3%

### Which is Better?
- Dividend stocks offer capital appreciation too
- Savings safe but low return
- Balance portfolio with multiple sources

## Calculating Total Return

### Capital Appreciation + Dividend
- Bought stock at ₹100
- Sold at ₹110
- Received ₹5 dividend
- Gain = (₹110 + ₹5 - ₹100) ÷ ₹100 = 15%

### Long-term Compounding
- ₹1,00,000 invested at 5% yield + 5% growth
- After 10 years with reinvested dividends
- Value approaches ₹2,60,000+

## Tax Implications

### Dividend Tax
- Company pays 50% DDT before distributing
- You receive after-tax dividend
- Added to your income if salaried

### Long-term Capital Gains
- Stocks held >1 year: lower tax rate
- Combine yield with capital gains for total return

## Dividend Investment Strategy

### Building Dividend Portfolio
1. Screen for high quality companies
2. Check dividend history (10+ years)
3. Payout ratio sustainable
4. Growth potential present
5. Fair valuation
6. Build diversified portfolio

### Example Portfolio
- 5-7 dividend paying stocks
- Different sectors
- ₹50,000-₹100,000 in each
- Total yield around 3-4%
- Reinvest dividends for compounding
    `,
    keyPoints: [
      "Dividend yield = Annual dividend ÷ Stock price",
      "High yield attractive but check sustainability",
      "Payout ratio should be 30-70%",
      "Dividend aristocrats: proven 10+ years growth",
      "Combine yield with capital appreciation potential",
    ],
    duration: "14 mins",
  },
  "3-4": {
    id: 4,
    title: "Company Annual Reports",
    moduleId: 3,
    content: `
Annual reports contain all important information about a company. Learning to read them is crucial for fundamental analysis.

## What's in an Annual Report?

### Key Sections
1. **Cover & Letter from Chairman**: Overview and vision
2. **Management Profiles**: Key executives
3. **Business Description**: What company does
4. **Financial Highlights**: Key metrics summary
5. **MD&A (Management Discussion & Analysis)**: Detailed discussion
6. **Financial Statements**: Standardized reports
7. **Notes**: Detailed footnotes
8. **Auditor's Report**: Independent verification
9. **Corporate Governance**: Board composition
10. **Risk Management**: Identified risks

## Reading the Business Description

### Important Details
- What does the company do?
- Markets they operate in
- Product/service mix
- Key customers
- Suppliers
- Distribution channels

### Strategic Understanding
- Long-term vision
- Growth plans
- Investment areas
- Competitive positioning

## MD&A Section (Most Important for Investors)

### What to Look For
- Revenue drivers
- Profit drivers
- Challenges faced
- Market conditions
- Future outlook
- Strategic initiatives

### Red Flags
- Earnings up but operations challenging
- Vague explanations of decline
- Blaming external factors excessively
- No clear strategy mentioned

## Financial Highlights Table

### Quick Summary
- Revenue trends (3-5 years)
- Profit trends
- Per share metrics
- Key ratios
- Segment performance

### Initial Analysis
- Is company growing?
- At what rate growing?
- Profit consistency
- Per share value changes

## Detailed Financial Analysis

### Income Statement Review
- Revenue growth rate
- Cost management
- Profit margins trend
- One-time gains/losses
- Recurring vs non-recurring items

### Balance Sheet Review
- Asset composition
- Cash position
- Debt levels
- Working capital
- Equity value

### Cash Flow Review
- Operating cash generation
- Capital expenditure trends
- Debt repayment
- Dividend capacity
- Business sustainability

## Notes to Financial Statements

### Critical Information
- Accounting policies used
- Related party transactions
- Contingent liabilities
- Segment information
- Post-balance sheet events

### Red Flags
- Frequent policy changes
- Many related party dealings
- Large contingencies
- Unusual transactions
- Unusual accounting choices

## Auditor's Report

### What to Look For
- Clean/unqualified opinion = good
- Qualified opinion = some issue
- Disclaimer = serious problem
- Emphasis of matter = specific concern

### Good vs Bad
**Good**:
- Clean opinion
- No emphasis sections
- No going concern warnings

**Bad**:
- Qualified opinion
- Multiple emphasis paragraphs
- Going concern warnings
- Auditor changes

## Comparing Annual Reports

### Year-Over-Year Analysis
- Growth rates
- Trend identification
- Performance improvement/decline
- Strategic shifts

### Peer Comparison
- Similar company performance
- Industry benchmarking
- Relative positioning
- Competitive strength

## Key Metrics to Extract

### Growth Metrics
- Revenue CAGR (3-year)
- Profit CAGR
- Per share earnings growth

### Profitability Metrics
- Gross margin
- Operating margin
- Net margin
- ROIC

### Financial Health
- Debt-to-Equity
- Current ratio
- Cash ratio
- Interest coverage

## Red Flag Companies

### Characteristics to Avoid
- Declining revenue
- Declining profits
- Rising debt
- Falling cash
- Changing auditors frequently
- Qualified audit opinions
- Large write-offs

## Investment Quality Checklist

- ☑ Business model understandable
- ☑ Revenue growing consistently
- ☑ Profit growing with/above revenue
- ☑ Debt at reasonable levels
- ☑ Strong cash generation
- ☑ Good management (consistent)
- ☑ Competitive advantage evident
- ☑ Fair valuation
    `,
    keyPoints: [
      "Annual report contains all company information",
      "MD&A section most important for analysis",
      "Compare financial statements year-over-year",
      "Check auditor's report for qualifications",
      "Red flags: declining revenue, rising debt, poor audits",
    ],
    duration: "14 mins",
  },
  "3-5": {
    id: 5,
    title: "Economic Indicators",
    moduleId: 3,
    content: `
Economic indicators show the health of the overall economy. They affect stock market performance and individual stocks differently.

## Macroeconomic Indicators

### GDP (Gross Domestic Product)
- Total economic output
- Growing GDP = healthy economy
- Slowing GDP = concerns
- Stock markets perform better in growth

### Inflation
- Rate of price increase
- Moderate inflation ~2-3% = healthy
- High inflation >6% = problems
- Low inflation = deflation risk risk

**Impact on Stocks**:
- High inflation: reduces real returns
- Companies may struggle with costs
- Interest rates usually rise

### Interest Rates
- Cost of borrowing money
- Set by central bank (RBI in India)
- Rising rates = cooling economy
- Falling rates = stimulating economy

**Impact on Stocks**:
- Higher rates: stock valuations compress (lower P/E)
- Lower rates: stock valuations expand (higher P/E)
- Bond yields compete with stock returns

### Unemployment Rate
- Percentage of people without jobs
- Low unemployment = strong economy
- High unemployment = economic weakness
- Affects consumer spending

**Impact on Stocks**:
- Low unemployment: companies hire, profits grow
- High unemployment: consumer spending falls

## Financial Indicators

### Money Supply (M1, M2)
- Amount of money in economy
- Rising MS: more money for investments
- Falling MS: credit tightening
- Affects liquidity in market

### Currency Exchange Rate
- Rupee vs foreign currencies
- Weak rupee: exports become expensive
- Strong rupee: imports become cheap
- Affects corporate earnings

### Credit Growth
- Growth in bank loans
- Rising credit: investment and consumption
- Falling credit: economic slowdown
- Important for banking stocks

## Business Indicators

### Manufacturing PMI
- Purchasing Managers Index
- >50 = expansion
- <50 = contraction
- Leading indicator of growth

### Services PMI
- Similar to manufacturing
- Important for service-based economy
- India services sector crucial
- India economic health dependent

### Creating a PMI
- >50 = Expansion
- =50 = Stagnation
- <50 = Contraction
- Momentum indicator

## Market-Specific Indicators

### Nifty/Sensex Valuation
- Index P/E ratios
- High P/E = expensive market
- Low P/E = cheap market
- Compare with historical levels

### Market Breadth
- Number of stocks rising vs falling
- More advance than decline = healthy
- More decline = weakness
- Divergence shows market weakness

### Volatility Index (VIX)
- Fear gauge
- High VIX = scared investors
- Low VIX = calm market
- Spikes on negative news

## Sector-Specific Indicators

### Real Estate Sentiment
- Spending (cement, steel usage)
- New projects launched
- Real Estate index performance
- Construction activity

### Auto Sales
- Car and motorcycle sales
- Economic health indicator
- Consumer confidence indicator
- Forward-looking indicator

### Oil and Commodity Prices
- Affect overall inflation
- Input costs for industry
- Rupee depreciation risk
- Profitability impact

## Reading Economic Data

### Where to Find
- RBI (Reserve Bank of India) website
- Government statistics office
- Financial websites (ET, BS, CNBC)
- Company earnings calls

### Frequency
- GDP: Quarterly
- Inflation: Monthly
- Interest rates: Periodic
- PMI: Monthly
- Currency: Daily

## Economic Cycles

### Expansion
- Growing GDP
- Rising employment
- Rising inflation risk
- Rising interest rates eventually
- Stock markets usually perform well

### Peak
- Maximum growth
- Inflation concerns
- Interest rates rising
- Valuations stretched
- Markets cautious

### Contraction
- Falling GDP
- Rising unemployment
- Inflation falls
- Interest rates falling
- Stock markets often bottoming

### Trough
- Minimum growth
- High unemployment
- Low inflation
- Low interest rates
- Investment opportunities

## Using Indicators for Stock Selection

### Strong Economy Best For
- Cyclical stocks (auto, real estate, banking)
- Consumer discretionary stocks
- Growth stocks

### Weak Economy Good For
- Defensive stocks (FMCG, utilities)
- Dividend stocks
- Safe businesses

### Interest Rate Impact
- Rising rates: Buy banks and financial stocks
- Falling rates: Buy capital-intensive stocks
- Peaks: Avoid cyclical stocks
- Troughs: Look for cyclical opportunities

## Key Takeaways

- Monitor GDP growth
- Watch inflation trends
- Track interest rate changes
- Note employment levels
- Follow sectoral indicators
- Use economic context for stock selection
    `,
    keyPoints: [
      "GDP growth drives long-term stock performance",
      "Inflation and interest rates affect valuations",
      "PMI indicators show economic health",
      "Unemployment affects consumer spending",
      "Use economic cycles for tactical allocations",
    ],
    duration: "14 mins",
  },
  "3-6": {
    id: 6,
    title: "Sector Analysis",
    moduleId: 3,
    content: `
Sector analysis involves understanding industry dynamics, competitive positions, and growth prospects. It helps in stock selection and portfolio allocation.

## Top Indian Stock Sectors

### 1. Information Technology (IT)
- Software services, IT consulting
- Export focused (US market dependent)
- High growth potential
- Profitable and strong cash generation

### 2. Financial Services
- Banks, insurance, brokers
- Leverage on deposits
- Interest rate sensitive
- Critical for economic growth

### 3. FMCG (Fast-Moving Consumer Goods)
- Staples, personal care, food
- Consistent demand
- Defensive during downturns
- Domestic focused

### 4. Healthcare/Pharma
- Pharmaceuticals, hospitals, diagnostics
- Growing healthcare spending
- Export potential
- Defensive characteristics

### 5. Auto
- Car manufacturers, components
- Cyclical industry
- Capital intensive
- Dependent on economy

### 6. Real Estate
- Commercial, residential projects
- Capital heavy
- Cyclical
- Interest rate sensitive

### 7. Energy
- Oil, gas, power
- Commodity dependent
- Essential for economy
- Infrastructure critical

### 8. Utilities
- Electricity, water
- Regulated returns
- Essential services
- Defensive

## Sector Dynamics Understanding

### Industry Structure
- Who are major players?
- Market leader advantages
- Competitive intensity
- Barriers to entry

### Growth Drivers
- Demand growth
- Market expansion
- New products
- Geographic expansion

### Challenges
- Competition
- Regulation
- Input costs
- Technological disruption

## Sector vs Stock Selection

### Sector Rotation
- Some sectors perform better in different cycles
- Rotate portfolio based on economic conditions
- Technology: growth phase
- Finance: rate hiking phase
- FMCG: declining/recession phase

### Top-Down Approach
1. Select best sector for cycle
2. Choose best company in sector
3. Higher probability of success
4. Combine sector + company strength

### Stock Within Sector
- Leader vs follower
- Profitability differences
- Cost advantages
- Market share trends

## Competitive Positioning

### Market Leader
- Highest market share
- Brand strength
- Cost advantages
- Barrier to entry created

### Strong #2
- Gaining market share
- Good growth
- Can challenge leader
- Attractive opportunity

### Weak Competitors
- Losing share
- Margin compression
- Potential takeover targets
- Avoid unless turnaround clear

## Sector Valuation

### Comparing Sector P/E
- IT: Higher P/E (growth)
- Banking: Lower P/E (value)
- FMCG: Moderate P/E
- Pharma: Higher P/E (growth)

### Relative Valuation
- Compare stock P/E vs sector average
- Stock cheaper than sector: opportunity
- Stock expensive than sector: wait

## Growth Analysis

### Sector Growth Rate
- What's the industry growth rate?
- Is it accelerating or decelerating?
- Is it faster than economic growth?
- Sustainability of growth?

### TAM (Total Addressable Market)
- How big is the opportunity?
- India's rising middle class expanding TAM
- IT exports: large TAM
- Healthcare: expanding TAM

## Sector Rotation Strategy

### Expansion Phase
- Strong GDP growth
- Rising employment
- Good for cyclicals
- IT, Auto, Real Estate thrive

### Late Expansion
- Growth peaking
- Inflation rising
- Rates likely to rise
- Banks outperform
- Financials benefit most

### Slowdown Phase
- GDP growth slowing
- Employment weakening
- Good for defensives
- FMCG, Utilities
- Healthcare less affected

### Recovery Phase
- Growth bottoming
- Rates likely to fall
- Cyclicals outperform
- Look ahead for expansion

## Sector Risk Assessment

### Regulatory Risk
- Banking regulations
- Pharma pricing controls
- Real estate compliance
- Energy subsidies

### Cyclical Risk
- Auto sector
- Real estate
- Banking
- Commodity-linked

### Structural Change Risk
- Technology disruption
- Business model changes
- Competition from new players
- Obsolescence risk

## Portfolio Allocation by Sector

### Conservative Portfolio
- 20% Each: IT, Banking, FMCG, Healthcare
- 20% Distributed across others

### Aggressive Portfolio
- More IT and pharma (growth)
- Less utilities (defensive)
- Capital allocation for growth

### Sector ETFs
- Alternative to stock picking
- Full sector exposure
- Reduces individual stock risk
- Lower costs than individual stocks
    `,
    keyPoints: [
      "Sector understanding crucial for stock selection",
      "Different sectors thrive in different cycles",
      "Leader vs follower companies very different",
      "Evaluate sector growth prospects",
      "Combine sector analysis with company analysis",
    ],
    duration: "15 mins",
  },
  "3-7": {
    id: 7,
    title: "Due Diligence Guide",
    moduleId: 3,
    content: `
Due diligence is thorough research before investing. It reduces the risk of investing in poor quality companies or frauds.

## Before Buying Any Stock

### Phase 1: Screening
- Overview of company
- Understand business
- Check financial basics
- Preliminary assessment

### Phase 2: Detailed Analysis
- Deep financial analysis
- Competitor comparison
- Industry position
- Growth prospects

### Phase 3: Risk Assessment
- Identify risks
- Evaluate management
- Check governance
- Red flag assessment

### Phase 4: Valuation
- Calculate fair value
- Compare with price
- Risk-reward analysis
- Investment decision

## Business Quality Check

### Understanding the Business
- What does company do?
- How does it make money?
- Who are customers?
- Who are suppliers?
- Is it understandable?

### Competitive Position
- Market share position?
- Competitive advantages?
- Threats from competition?
- Sustainability of position?

### Management Quality
- Promoter background?
- Track record?
- Leadership quality?
- Promoter relationships?
- Any scandals?

## Financial Analysis Checklist

### Revenue Quality
- ☑ Growing consistently?
- ☑ Growth from core business?
- ☑ One-time items separated?
- ☑ Customer concentration?

### Profit Quality
- ☑ Profit growing with/above revenue?
- ☑ Margin trends positive?
- ☑ Operating profit quality?
- ☑ One-time gains identified?

### Cash Flow Health
- ☑ Positive operating cash flow?
- ☑ Growing cash generation?
- ☑ Capital expenditure sustainable?
- ☑ Dividends from operations?

### Balance Sheet Strength
- ☑ Debt levels manageable?
- ☑ Current ratio healthy?
- ☑ Cash reserves adequate?
- ☑ Working capital positive?

## Red Flag Detailed Analysis

### Accounting Red Flags
- Frequent auditor changes
- Qualified audit opinions
- Related party transactions
- Off-balance sheet items
- Unusual accounting choices

### Financial Red Flags
- Revenue model unclear
- Profit exceeding cash flow
- Rising debt with falling profit
- Customer concentration
- Large one-time items

### Operations Red Flags
- Market share declining
- Competitive position weakening
- Customer losses
- Quality product issues
- Regulatory violations

### Management Red Flags
- Frequent director changes
- Conflicts of interest
- Risky behavior
- Poor governance
- Link to promoter fraud

## Competitor Analysis

### Head-to-Head Comparison
- Revenue comparison
- Profitability comparison
- Growth rates
- Debt levels
- Return metrics

### Relative Positioning
- Who's the leader?
- Who's growing fastest?
- Who's most profitable?
- Who's safest?

### Competitive Advantages
- Cost leadership?
- Brand strength?
- Distribution network?
- Technology/patent?
- Customer loyalty?

## Industry and Macro Check

### Industry Health
- Growing or declining?
- Consolidation happening?
- New players entering?
- Regulatory changes?
- Future prospects?

### Economic Sensitivity
- Cyclical or defensive?
- Interest rate sensitive?
- Commodity dependent?
- Currency dependent?

## Valuation Verification

### Fair Value Calculation
- Multiple methods preferred
- DCF analysis (if applicable)
- Comparable P/E
- P/B, P/S analysis
- Asset-based valuation

### Risk-Reward Assessment
- Upside potential?
- Downside risk?
- Risk-reward ratio favorable?
- Margin of safety?

## Making Final Decision

### Investment Checklist
- ☑ Business understandable
- ☑ Quality high
- ☑ Growth prospects good
- ☑ Management quality good
- ☑ Debt manageable
- ☑ Cash strong
- ☑ Competitive position good
- ☑ Valuation acceptable
- ☑ Risk manageable
- ☑ No major red flags

### Pass/Fail Decision
- If any major red flag: PASS (don't invest)
- If checks all boxes: Consider investment
- Never compromise on quality
- Wait for better opportunities

### Position Sizing
- Small if first investment
- Increase if conviction high
- Diversify across positions
- Don't overconcentrate

## Ongoing Monitoring

### After Investment
- Quarterly results review
- Major news monitoring
- Annual report analysis
- Thesis validation
- Exit plan if thesis breaks

### Red Flags After Buying
- Profit declining
- Debt rising
- Cash falling
- Management changes
- Competitive position weakening

## Due Diligence Timeline

- Initial research: 1-2 hours
- Detailed analysis: 3-5 hours
- Final decision: Takes time
- Don't rush analysis
- Multiple readings recommended
- Sleep on decision before buying
    `,
    keyPoints: [
      "Due diligence reduces investment risk",
      "Understand business before investing",
      "Analyze financials thoroughly",
      "Check management quality",
      "Never compromise on quality",
    ],
    duration: "16 mins",
  },
  "4-1": {
    id: 1,
    title: "Stop Loss Orders",
    moduleId: 4,
    content: `
Stop loss orders automatically sell your stock if price falls to a certain level. They protect capital from large losses.

## What is a Stop Loss?

A stop loss is an automatic sell order placed at a specific price below current market price to limit losses.

### Example
- Bought stock at ₹100
- Set stop loss at ₹90
- If stock falls to ₹90, auto-sell
- Maximum loss limited to ₹10

## Why Use Stop Loss?

### Capital Protection
- Limits maximum loss
- Prevents emotional hold
- Enforces discipline
- Protects retirement money

### Psychological Benefit
- Sleep better at night
- Avoid panic selling
- Execute plan mechanically
- Reduces stress

### Mathematical Advantage
- Small losses add up
- Compound over time
- Stop losses prevent big blows
- Long-term wealth protection

## Types of Stop Loss

### Fixed Stop Loss
- Fixed percentage (e.g., 10%)
- Fixed rupee amount (e.g., ₹500)
- Static level
- Simple to set

### Trailing Stop Loss
- Fixed distance from current price
- Moves up as price rises
- Protects profits
- Stops being triggered as price rises

### Technical Stop Loss
- Based on support levels
- Chart patterns
- Moving averages
- Indicator levels

### Volatility-Based Stop Loss
- Accounts for price volatility
- Wider for volatile stocks
- Tighter for stable stocks
- Dynamic adjustment

## Setting Appropriate Stop Loss

### Factors to Consider
1. **Volatility**: More volatile = wider stop loss
2. **Timeframe**: Shorter term = narrower stop loss
3. **Capital Risk**: 1-2% per trade
4. **Technical Levels**: Use support/resistance

### Stop Loss Placement Levels

**Short-term Trading**:
- Just below recent support
- Usually 2-5% away
- Tight stop losses

**Swing Trading**:
- Below major support
- Usually 5-10% away
- Medium stop losses

**Long-term Investing**:
- Well below support
- Usually 15-25% away
- Wider stop losses to avoid noise

## Stop Loss vs Holding

### When Holding Works
- Long-term investment
- Company fundamentals intact
- Temporary market weakness
- No deterioration in business

### When Stop Loss Works
- Technical breakdown
- Fundamental deterioration
- Loss of support
- Business issues emerging

### Decision Framework
- Quality company: Hold/use wider stop loss
- Weak fundamentals: Tighter stop loss
- Short-term trade: Very tight stop loss
- Long-term investment: Wider stop loss

## Trading Discipline

### Golden Rules
1. Always use stop loss
2. Stop loss at decided level before entry
3. Never move stop loss against you
4. Accept losses when stop hit
5. Learn from losses

### Emotional Challenges
- Move stop loss higher hoping recover (Bad!)
- Blame yourself for losses (Normal!)
- Don't repeat mistakes (Essential!)
- Reduce position size after losses (Prudent!)

## Stop Loss Techniques

### Support-Based Stop Loss
- Place below recent support
- Support broken = trend changed
- Technical approach
- Requires chart analysis

### Percentage-Based Stop Loss
- Calculate percentage from entry
- 5% for volatile
- 10% for moderate
- 15% for stable
- Doesn't require chart analysis

### Time-Based Stop Loss
- Exit after fixed time
- If profit target not reached
- Prevents capital stuck
- Frees money for other opportunities

### Volatility-Based Stop Loss
- ATR (Average True Range)
- Widen stop for volatile stocks
- Tighten for stable stocks
- More advanced approach

## Stop Loss Mistakes to Avoid

### Common Errors
1. **No stop loss**: Most dangerous
2. **Stop loss too tight**: Too many losses
3. **Stop loss too wide**: Large losses
4. **Moving stop loss**: Defeats purpose
5. **Emotional decisions**: Let plan decide

### After Stop Hit
- Analyze why stopped out
- Was decision correct?
- Improve approach
- Implement lessons learned
- Move to next opportunity

## Real Example

### Scenario
- Bought Reliance at ₹2,500
- Strong support at ₹2,400
- Stop loss at ₹2,350 (below support)
- Risk: ₹150 per share

### If Stock Falls to ₹2,350
- Stop loss triggered
- Auto-sell at ₹2,350
- Loss: ₹150 × 100 shares = ₹15,000
- Capital protected

### If Stock Rises to ₹2,800
- Stop loss doesn't trigger
- Can move stop higher
- Lock in some profit
- Protect gain

## Psychology of Stop Loss

### Accepting Losses
- Losses are part of trading
- Winners need multiple winners
- Winners must be bigger than losers
- Many small losses acceptable

### Discipline Pays Off
- Best traders use stops
- Biggest losses come from no stops
- Risk management first
- Profit second
    `,
    keyPoints: [
      "Stop loss automatically sells at set price",
      "Protects capital from large losses",
      "Place stop just below support level",
      "Risk only 1-2% per trade",
      "Never move stop loss against you",
    ],
    duration: "14 mins",
  },
  "4-2": {
    id: 2,
    title: "Position Sizing",
    moduleId: 4,
    content: `
Position sizing determines how much to invest in each trade or stock. Proper sizing protects capital and allows consistent profits.

## What is Position Sizing?

The amount of money risked on a single trade or investment, typically calculated as a percentage of total capital.

## The 2% Rule (Most Popular)

### Definition
- Risk only 2% of total capital per trade
- Never risk more than 2% on single trade
- Protects capital from big losses

### Example
- Total capital: ₹1,00,000
- Maximum risk per trade: ₹2,000
- If stop loss is ₹50 away
- Buy 40 shares (40 × ₹50 = ₹2,000 risk)

### Calculation Formula
- Position Size = (2% of Capital) ÷ (Risk Per Share)
- Position Size = (Capital × 0.02) ÷ Stop Loss Distance

### Application
- Even if 10 consecutive losses
- ₹1,00,000 becomes ₹80,000
- Still significant capital left
- Can recover with winners

## The 1% Rule (Conservative)

- Risk only 1% per trade
- ₹1,00,000 capital = ₹1,000 max risk
- Even safer than 2% rule
- Best for beginners

### Advantages
- Minimal damage if gone wrong
- Focus on technique, not money
- Long-term perspective
- Psychological comfort

### Disadvantages
- Slow wealth building
- Missed profit opportunities
- May feel too conservative

## The 3% Rule (Aggressive)

- Risk up to 3% per trade
- Only for experienced traders
- Higher swings in capital
- Faster wealth building

### Advantages
- Faster growth if winning
- Significant profits on winners
- Aggressive approach

### Disadvantages
- Devastating if losing trades
- Capital can halve quickly
- High stress
- Not recommended for most

## Position Sizing Examples

### Conservative (1%)
- Capital: ₹5,00,000
- Max Risk: ₹5,000
- Stop Loss Distance: ₹100
- Position Size: 50 shares

### Moderate (2%)
- Capital: ₹5,00,000
- Max Risk: ₹10,000
- Stop Loss Distance: ₹100
- Position Size: 100 shares

### Aggressive (3%)
- Capital: ₹5,00,000
- Max Risk: ₹15,000
- Stop Loss Distance: ₹100
- Position Size: 150 shares

## Position Sizing Based on Confidence

### High Confidence Trade
- Risk 2-3% of capital
- Strong technical/fundamental case
- Good risk-reward ratio
- Entry clearly defined
- Stop loss tight

### Medium Confidence Trade
- Risk 1-2% of capital
- Mixed signals
- Decent opportunity
- Entry okay but not perfect
- Stop loss moderate

### Low Confidence Trade
- Risk 0.5-1% of capital
- Unsure signals
- Testing an idea
- Entry weak
- Can skip trade

## Alternative Position Sizing Methods

### Fixed Position Size
- Same amount in each trade
- ₹50,000 per trade
- Simple to implement
- Doesn't adjust for volatility

### Volatility-Based Position Sizing
- Volatile stocks: Smaller position
- Stable stocks: Larger position
- Adjusts for price movement
- More sophisticated

### Fractal Position Sizing
- Entry into position gradually
- Multiple buys at different prices
- Reduce risk during entry
- Common in long-term investing

## Portfolio Position Sizing

### Equal Weight
- Same amount in each stock
- ₹1,00,000 / 5 stocks = ₹20,000 each
- Simple approach
- Medium diversification

### Market Cap Weight
- Larger positions in large cap
- Smaller in small cap
- More stable
- Reduces risk

### Risk Parity
- Same risk amount in each position
- Account for volatility differences
- Advanced approach
- Better risk management

## Concentration Guidelines

### Maximum Concentration
- Any single stock: 10-15% max
- Reduces individual stock risk
- Maintains diversification
- Protects portfolio

### Sector Concentration
- Any sector: 30% max
- Prevents sector bet
- Balanced exposure
- Economic cycle protection

### Minimum Diversification
- At minimum 5 stocks
- 10-15 stocks better
- 20+ stocks excellent
- Below 5 = high concentration

## Trade Managing Position

### Scaling In
- Enter 50% of position at first
- Add 50% on confirmation
- Reduces entry risk
- Better entry average

### Scaling Out
- Sell part on first target
- Sell more on second target
- Keep remainder for breakout
- Locks in profits gradually

### Adding to Winners
- Add more to profitable positions
- If setup repeats
- Only if capital allows
- Gradually increase exposure

## Position Sizing Math

### Risk-Reward Calculation
- If risk ₹2,000
- Want reward ₹4,000
- Risk-reward ratio 1:2
- Favorable setup

### Winning Percentage
- 50% winning trades acceptable
- But winners must be bigger
- Win size = Lose size × 3
- Mathematics work out

### Edge Calculation
- Win % × Avg Win - Loss % × Avg Loss
- If 50% × ₹4,000 - 50% × ₹2,000
- Edge = ₹2,000 - ₹1,000 = ₹1,000
- Positive edge formula

## Psychological Aspects

### Optimal Position Size
- Sleep well at night
- Can hold through volatility
- Won't make emotional trades
- Enables long-term success

### Too Large Position
- Causes panic selling
- Emotional decisions
- Losses hurt too much
- Reduces success rate

### Too Small Position
- Not exciting enough
- Tempted to overtrade
- Can't build wealth
- Lacks commitment

## Position Sizing Checklist

- ☑ Decide risk percentage (1-2%)
- ☑ Calculate max risk in rupees
- ☑ Determine stop loss distance
- ☑ Calculate shares to buy
- ☑ Round appropriately
- ☑ Execute trade
- ☑ Maintain discipline
    `,
    keyPoints: [
      "2% rule: risk 2% of capital per trade",
      "Position size = Risk Amount ÷ Stop Loss Distance",
      "Never exceed maximum concentration limits",
      "Scale in and out for better entries/exits",
      "Position size affects psychology and success",
    ],
    duration: "14 mins",
  },
  "4-3": {
    id: 3,
    title: "Diversification Strategy",
    moduleId: 4,
    content: `
Diversification spreads investment across different securities to reduce risk. Proper diversification improves returns without proportional risk increase.

## Core Principle

"Don't put all eggs in one basket" - Classic investment wisdom.

## Types of Diversification

### Stock Diversification
- Hold 5-20 individual stocks
- Different sectors
- Different market caps
- Different risk profiles

### Sector Diversification
- Banking: 20%
- IT: 20%
- FMCG: 20%
- Healthcare: 20%
- Others: 20%

### Asset Class Diversification
- Stocks: 60%
- Bonds: 30%
- Cash: 10%
- Real estate/commodities: Optional

### Geography Diversification
- Domestic: 90%
- International: 10%
- Emerging markets vs developed

### Risk Diversification
- Low risk: 40%
- Medium risk: 40%
- High risk: 20%
- Balanced approach

## Benefits of Diversification

### Risk Reduction
- If one stock drops 20%, portfolio drops 4% (if 5 stocks)
- Individual stock risk diluted
- Systematic risk remains

### Smooth Returns
- Some stocks up, some down
- Average returns more consistent
- Reduces volatility
- Easier to hold

### Opportunity in All Cycles
- Growth stocks in expansion
- Defensive stocks in recession
- Always something working
- Missed trades on some holdings

### Psychological Benefit
- Sleep better at night
- Less emotional
- Easier to hold long-term
- Reduces urge to trade excessively

## Efficient Diversification

### Not All Diversification Equal
- Holding 100 stocks = over-diversification
- Becomes like index fund anyway
- Can't monitor properly
- Alpha generation reduced

### Optimal Number
- 5-10 stocks: Light diversification
- 10-15 stocks: Good diversification
- 15-20 stocks: Solid diversification
- 20+ stocks: Over-diversification

### Quality Over Quantity
- High quality 5 stocks > Low quality 20 stocks
- Better returns usually
- Easier management
- Know holdings deeply

## Sector Allocation

### Conservative Portfolio
- Banking: 20%
- FMCG: 20%
- Healthcare: 20%
- IT: 15%
- Utilities: 15%
- Others: 10%

### Moderate Portfolio
- Banking: 15%
- FMCG: 15%
- Healthcare: 15%
- IT: 20%
- Real Estate: 15%
- Others: 20%

### Aggressive Portfolio
- IT: 25%
- Pharma: 20%
- Banking: 20%
- Small Cap Growth: 20%
- Others: 15%

## Market Cap Diversification

### Portfolio Mix
- Large Cap: 50-60%
- Mid Cap: 30-35%
- Small Cap: 10-20%

### By Size
- Large Cap: Stability, dividends
- Mid Cap: Growth with some stability
- Small Cap: High growth, high risk

## Style Diversification

### Value Stocks
- Low P/E ratios
- Strong fundamentals
- Dividends common
- Steady performers

### Growth Stocks
- Higher P/E ratios
- Rapid growth
- Lower dividends
- Shareholder wealth creation

### Dividend Stocks
- Regular income
- Lower volatility
- Defensive characteristics
- Steady compounding

## Correlation Consideration

### Perfect Correlation
- Stocks move together exactly
- No diversification benefit
- Both from same sector perfect example

### Negative Correlation
- Stocks move opposite
- Best diverts ification
- Real estate vs IT when rates change
- Defensive vs cyclical

### Low Correlation
- Stocks don't move together
- Good for diversification
- Reduces portfolio volatility
- Different sectors help

## Implementation Strategy

### Phase 1: Core Holdings
- 3-5 large cap quality stocks
- Build foundation
- Low risk
- Generate income/growth

### Phase 2: Add Variations
- Mid cap growth stocks
- Small cap opportunities
- Different sectors
- Increase diversification

### Phase 3: Tactical Allocation
- Small cap high risk/reward
- Special situations
- Turnarounds
- Smaller allocation %

### Phase 4: Maintain & Rebalance
- Quarterly review
- Rebalance yearly
- Trim winners
- Add to laggards

## Rebalancing

### Why Rebalance?
- Prevent over-concentration
- Lock in profits from winners
- Buy dips in laggards
- Maintain risk profile

### When to Rebalance
- Annually (most common)
- Quarterly review
- Sector exceeds 30%
- Stock exceeds 15%

### How to Rebalance
- Sell 10% of overweight positions
- Buy underweight positions
- Maintain target allocation
- Tax-efficient way

## Diversification Mistakes

### Under-Diversification
- Too few stocks (< 3)
- Too concentrated
- One bad stock ruins portfolio
- Unnecessary risk

### Over-Diversification
- Too many holdings (> 30)
- Can't monitor all
- Like index fund anyway
- Time consuming

### Poor Quality Diversification
- Diversified but all low quality
- Worse than concentrated quality
- Still risky
- Selection important

### Wrong Diversification
- All growth when recession coming
- All defensive when expansion emerging
- Right diversification, wrong time
- Cycle timing matters

## Building a Diversified Portfolio

### Shopping List Approach
- Banking sector: Top 2 picks
- IT sector: Top 2 picks
- FMCG: Top 2 picks
- Healthcare: Top 2 picks
- Others: Growth picks
- Total: 10-12 stocks

### Portfolio Allocation
- Equal weight: ₹1,00,000 ÷ 10 = ₹10,000 each
- Or risk-based weight
- Start with conservative allocation
- Adjust based on conviction
    `,
    keyPoints: [
      "Diversification reduces risk, not returns",
      "10-15 quality stocks optimal for most",
      "Spread across sectors and market caps",
      "Rebalance yearly to maintain targets",
      "Avoid under and over-diversification",
    ],
    duration: "15 mins",
  },
  "4-4": {
    id: 4,
    title: "Risk-Reward Ratio",
    moduleId: 4,
    content: `
Risk-reward ratio compares potential loss versus potential gain. Favorable ratios ensure long-term profitability even with losing trades.

## Understanding Risk-Reward

### Definition
- Risk: Maximum you can lose
- Reward: Maximum you can earn
- Ratio: Reward ÷ Risk
- Must be favorable for long-term success

### Example
- Entry Price: ₹100
- Stop Loss: ₹90 (Risk: ₹10)
- Target: ₹120 (Reward: ₹20)
- Risk-Reward Ratio: 1:2 (favorable)

## Minimum Ratios

### 1:1 Ratio
- Risk ₹10, Reward ₹10
- Break-even scenario
- Not ideal, only 50% must win
- Acceptable sometimes

### 1:2 Ratio
- Risk ₹10, Reward ₹20
- 50% win rate = profit
- Most common target
- Good for most traders

### 1:3 Ratio
- Risk ₹10, Reward ₹30
- Only need 33% winners
- Excellent ratio
- Find these opportunities

### 1:5 Ratio
- Risk ₹10, Reward ₹50
- Only need 20% winners
- Best case scenario
- Rare in practice

## Calculating Risk-Reward

### Formula
- Risk = Entry - Stop Loss
- Reward = Target - Entry
- Ratio = Reward ÷ Risk

### Example 1
- Entry: ₹200
- Stop Loss: ₹180 (Risk: ₹20)
- Target 1: ₹220 (Reward: ₹20) = 1:1
- Better to skip or find better entry

### Example 2
- Entry: ₹200
- Stop Loss: ₹190 (Risk: ₹10)
- Target: ₹230 (Reward: ₹30) = 1:3
- Excellent ratio

## Profitability Formula

### Success Rate Required
- If 1:1 ratio: Need >50% wins
- If 1:2 ratio: Need >33% wins
- If 1:3 ratio: Need >25% wins
- If 1:5 ratio: Need >16% wins

### Win Rate Calculation
- Win % × Avg Win - Loss % × Avg Loss > 0
- 40% × ₹30 - 60% × ₹10
- ₹12 - ₹6 = ₹6 edge
- Profitable setup

### Calculate for Your Style
- Track actual win rate
- Calculate average winner
- Calculate average loser
- Determine if edge exists

## Setting Realistic Targets

### Support Resistance Targets
- Use technical levels
- Don't pick arbitrary numbers
- Resistance = natural target
- Volume clusters = target

### Trend-Based Targets
- Measure trend length
- Project similar distance
- Fibonacci retracements
- Comparable patterns

### Multiple Targets Strategy
- Target 1: Quick profit (small)
- Target 2: Swing profit (medium)
- Target 3: Major move (large)
- Exit portion at each level

## Stop Loss Placement

### Support-Based
- Below support level
- Natural stop location
- Requires chart analysis
- More subjective

### Fixed Distance
- Fixed % from entry
- 5-10% typical
- Doesn't require analysis
- Objective method

### ATR-Based
- Using volatility measure
- Wider for volatile stocks
- Tighter for stable
- Sophisticated approach

## Risk Per Trade

### Optimal Risk
- 2% of capital per trade
- Rarely more than 3%
- Never more than 5%
- Controls losses

### Position Size from Risk
- If risk ₹2,000 on ₹1,00,000 base
- And stop loss ₹20 away
- Buy (₹2,000 ÷ ₹20) = 100 shares
- Directly from risk calculation

### Multiple Positions
- If taking 5 trades
- Risk ₹1,000 each
- Total risk ₹5,000 (5% base)
- Acceptable combination

## Risk-Reward vs Win Rate

### High R:R Low Win Rate
- Risk ₹10, Reward ₹50
- 20% win rate = break even
- Finding these is hard
- But when found, very profitable

### Medium R:R Medium Win Rate
- Risk ₹10, Reward ₹20
- 50% win rate needed
- Easier to find
- Still very profitable

### Low R:R High Win Rate
- Risk ₹10, Reward ₹10
- 51% win rate needed
- Possible if very high win rate
- Difficulty: Achieving 70%+ win rate

## Drawdown Impact

### Example with 1:2 Ratio

Trade 1: Win ₹200 (Capital: ₹1,02,000)
Trade 2: Lose ₹100 (Capital: ₹1,01,900)
Trade 3: Win ₹200 (Capital: ₹1,02,100)
Trade 4: Lose ₹100 (Capital: ₹1,02,000)
Trade 5: Win ₹200 (Capital: ₹1,02,200)

After 10 trades (50% win): +₹2,000 gain

### Example with 1:1 Ratio

Similar scenario but each win ₹100, loss ₹100
After 10 trades (50% win): Break even
Not profitable!

## Identifying Good Risk-Reward

### Checklist
- ☑ Risk-reward at least 1:2
- ☑ Technical setup clear
- ☑ Support/Resistance defining levels
- ☑ Entry point precise
- ☑ Exit targets predefined
- ☑ Stop loss placement logical

### Skip Trade If
- Risk-reward less than 1:1
- Target unclear
- Arbitrary entry point
- No support/resistance
- Large gap between stop and entry

## Trading with Risk-Reward Edge

### System Building
- Define exact risk-reward
- Track all trades
- Calculate actual win rate
- Verify edge exists
- Only scale if edge proven

### Scaling Up
- After 20 trades proven
- Win rate meets expectation
- Risk-reward consistently good
- Then increase capital

### Discipline Required
- Follow rules always
- Never violate risk-reward
- No emotional trades
- Mechanical execution
    `,
    keyPoints: [
      "Always know risk before entering",
      "Minimum 1:2 risk-reward ratio",
      "Calculate win rate needed for profit",
      "Only take setups meeting ratio",
      "Risk-reward discipline key to success",
    ],
    duration: "14 mins",
  },
  "4-5": {
    id: 5,
    title: "Portfolio Allocation",
    moduleId: 4,
    content: `
Portfolio allocation is distributing investments across asset classes. It's the single biggest factor determining portfolio success and risk.

## Asset Classes

### Stocks
- Company shares
- Highest growth potential
- Highest volatility
- Long-term wealth building

### Bonds
- Fixed income securities
- Lower returns than stocks
- Lower volatility
- Capital preservation

### Cash
- Bank deposits, money market
- Safest option
- Lowest returns
- Liquidity

### Real Estate
- Physical property
- Moderate returns
- Low liquidity
- Tax benefits

### Commodities
- Gold, oil, agriculture
- Inflation hedge
- High volatility
- Diversification

## Allocation Strategies

### Conservative (Age 60+)
- Stocks: 30%
- Bonds: 50%
- Cash: 20%
- Focus: Capital preservation
- Returns: 5-7% annually

### Moderate (Age 40-59)
- Stocks: 60%
- Bonds: 30%
- Cash: 10%
- Focus: Growth with safety
- Returns: 7-10% annually

### Aggressive (Age 25-39)
- Stocks: 80%
- Bonds: 15%
- Cash: 5%
- Focus: Capital growth
- Returns: 10-12%+ annually

### Very Aggressive (Age <25)
- Stocks: 95%
- Bonds: 5%
- Cash: 0%
- Focus: Maximum growth
- Returns: 12-15%+ annually

## Age-Based Allocation

### Rule of Thumb
- 100 - Age = Equity %
- Example: Age 40 = 60% stocks
- Automatically conservative as older
- Shift over time naturally

### Modifications
- If high income stability: More aggressive
- If low income stability: More conservative
- If health concerns: More conservative
- If inheritance coming: Can be aggressive

## Time Horizon Consideration

### Short-term (< 3 years)
- Need access to money
- Conservative allocation
- More bonds/cash
- Avoid stock volatility

### Medium-term (3-10 years)
- Moderate allocation
- Balanced stocks/bonds
- Some growth exposure
- Manageable volatility

### Long-term (>10 years)
- Aggressive stocks allocation
- Ride out volatility
- Maximum growth potential
- Compound wealth

## Risk Tolerance Assessment

### Questionnaire
1. Can I lose 20% of portfolio?
2. Can I not check account for 6 months?
3. Would market drop make me sell?
4. Can I hold through crashes?
5. Do I have stable income?

### Scoring
- Mostly yes: Aggressive possible
- Mixed: Moderate best
- Mostly no: Conservative needed

## Stock Allocation Within Equities

### Large Cap: 50%
- Blue chips, stable
- 5-7 stocks
- ₹50,000-₹100,000 each

### Mid Cap: 30%
- Growth companies
- 3-5 stocks
- ₹30,000-₹50,000 each

### Small Cap: 20%
- High growth
- 2-3 stocks
- ₹20,000-₹30,000 each

## Bond Allocation

### Duration Mix
- Short-term: 30% (1-3 years)
- Medium-term: 40% (3-7 years)
- Long-term: 30% (7+ years)
- Spread duration risk

### Type of Bonds
- Government securities: 60% (safe)
- Corporate bonds: 30% (higher yield)
- Tax-saving bonds: 10% (tax benefit)

## Real Estate in Portfolio

### Allocation
- Primary residence: Personal use
- Rental property: 20-30% if wealthy
- REITs: 10-20% as liquid real estate
- Not essential for most

## Sector Allocation

### Basic Diversification
- Banking/Finance: 20%
- IT: 20%
- FMCG: 20%
- Healthcare: 15%
- Others: 25%

### Tactical Allocation
- Adjust based on cycles
- Overweight expected bullish sectors
- Underweight expected weak sectors
- Rebalance yearly

## Rebalancing Strategy

### Annual Rebalancing
- Review allocation yearly
- One holding exceeding target: Trim
- One below target: Add
- Tax-loss harvesting
- Maintain discipline

### Triggering Events
- Market crash: Rebalance down
- Strong rally: Rebalance up
- Work anniversary: Rebalance
- Quarterly review: If major changes

### Implementation
- Sell overweight 5-10%
- Buy underweight with proceeds
- Tax efficient rebalancing
- Document reasons

## Dollar-Cost Averaging

### Method
- Invest fixed amount regularly
- Monthly is common
- Auto-invest simplifies
- Removes timing risk

### Advantages
- Removes emotion
- Buys more when cheap
- Buys less when expensive
- Consistent approach

### Amounts
- Monthly: Ideal
- Quarterly: Good
- Half-yearly: Acceptable
- Yearly: Too infrequent

## Allocation Mistakes

### Too Conservative Young
- Too much bonds
- Missing growth years
- Insufficient compounding
- Won't reach goals

### Too Aggressive Old
- Too much stocks
- Market crash devastating
- Less time to recover
- Unnecessary risk

### Not Rebalancing
- Allocation drifts over time
- Risk profile changes unaware
- Winners dominate
- Concentration risk

### Frequent Changes
- Trading allocation
- Tax inefficient
- Missing long-term gains
- Emotional decisions

##  Monitoring Allocation

### Quarterly Check
- Review major movements
- Rebalance if >5% drift
- Adjust for life changes
- Stay aligned with plan

### Annual Review
- Formal rebalancing
- Asset location review
- Tax-loss harvesting
- Plan adjustment if needed

### Life Events Trigger
- Marriage/divorce
- Children born
- Job change
- Inheritance
- Health changes
    `,
    keyPoints: [
      "Asset allocation single biggest success factor",
      "60/30/10 stocks/bonds/cash typical moderate",
      "Younger = more aggressive, older = more conservative",
      "Rebalance yearly to maintain targets",
      "Stick with plan despite market emotions",
    ],
    duration: "15 mins",
  },
  "4-6": {
    id: 6,
    title: "Managing Emotions",
    moduleId: 4,
    content: `
Emotional control separates successful investors from failed ones. Fear and greed are the biggest obstacles to investment success.

## Emotions in Investing

### Main Emotions
1. **Fear**: Causes panic selling
2. **Greed**: Causes over-buying
3. **Hope**: Causes holding losers
4. **Regret**: Causes chase buying
5. **Overconfidence**: Causes over-trading

## Fear-Based Decisions

### Market Crash Scenario
- Market down 20%
- News says worst ever
- Fear of further losses
- Panic selling at bottom
- Results in locking losses

### Real Numbers
- Every major crash recovered
- S&P 500 every decline recovered
- Sensex recovered from every crash
- Historically always bounced back

### Fighting Fear
- Remember historical recoveries
- Don't watch daily prices
- Have emergency fund (6 months)
- Know your holdings are good
- Stick to your plan
- Long-term orientation

## Greed-Based Decisions

### FOMO (Fear of Missing Out)
- Friends made money in XYZ stock
- You didn't invest
- Stock rises more
- Regret kicks in
- Buy at top without analysis

### Results of Greed
- Buying at tops
- Holding too long
- Missing diversification
- Overconcentrated portfolio
- Big losses when reversal comes

### Fighting Greed
- Have strict rules
- No FOMOfugee buying
-Wait for good entry
- Follow your plan
- Don't chase performance
- Diversify properly

## Hope Trap

### Scenario
- Bought stock at ₹100
- Stock falls to ₹70
- 30% loss
- "Maybe it will bounce back"
- Hold hoping for recovery
- Falls to ₹50 (50% loss)
- "Maybe it will even recover"
- Falls to ₹25 (75% loss)

### Real Statistics
- Average duration of losses: Long
- Many never recover to cost basis
- Opportunity cost high
- Better to admit mistake and move on

### Fighting Hope
- Use stop losses religiously
- Have exit rules before entry
- Don't rationalize holds
- Accept losses and move on
- Learn from mistake

## Overconfidence

### After Success
- Made money on 3 stocks
- Believe you have special skill
- Start over-trading
- Take unnecessary risks
- Increase position sizes
- Results: Big losses

### Overconfidence Signs
- No stop losses
- Large positions
- Frequent trading
- Not following plan
- Dismissing risks
- Aggressive targets

### Fighting Overconfidence
- Keep audit trail
- Track performance
- Realistic about skills
- Follow risk rules
- Check ego at door
- Bet sizing against overconfidence

## Regret

### After Missed Opportunities
- Stock rises 100%
- You didn't invest
- Feel regret
- Chase into stock
- Buy near top
- Falls back down

### Combating Regret
- Can't catch every winner
- Missing some okay
- Focus on following plan
- One hit wonders common
- Long-term winners recurring
- Better to miss one than catch bottom

## Loss Aversion

### Behavioral Issue
- Losing ₹1,000 feels worse than gaining ₹1,000
- Sell winners too early
- Hold losers too long
- Very common problem
- Real wealth killer

### Impact
- Won't sell winners (fear of losing gains)
- Hold losers (to break even)
- Portfolio underperforms
- Losses greater than wins

### Solution
- Accept winning trades are done
- Exit per your plan
- Don't hold for "more"
- Cut losses quickly
- Let winners run 80%

## Market Volatility and Emotions

### Daily Volatility
- Green day: Feel good
- Red day: Feel bad
- Unnecessary stress
- Check less frequently
- Focus on long-term

### Market Crashes
- -10% (normal correction)
- -20% (bear market)
- -30-40% (crash)
- Check historical recoveries
- Opportunity to buy dips
- Your long-term plan intact

### Media Impact
- Always bearish during crashes
- Always bullish during rallies
- Opposite of reality usually
- Ignore financial media
- Follow your plan

## Maintaining Discipline

### Before Entering Trade/Investment
- Write investment thesis
- Define entry clearly
- Define exit clearly
- Determine stop loss
- Determine target
- Calculate risk-reward

### During Volatile Periods
- Review your thesis
- Has anything changed fundamentally?
- If no: Ignore volatility
- If yes: Review position
- Don't react to noise

### After Closed Positions
- Win: What worked?
- Loss: What went wrong?
- Document lessons
- Avoid repeating mistakes
- Improve process

## Practical Techniques

### Removing Emotion
1. **Pre-decided rules**: Follow, not choices
2. **Automation**: Auto-invest, auto-sell
3. **Less monitoring**: Check less frequently
4. **Support system**: Talk to other investors
5. **Long-term focus**: Hours don't matter
6. **Distractions**: Don't obsess

### Building Emotional Control
- Meditation: Calms mind
- Exercise: Releases stress
- Journal: Track emotions
- Talk: Share experiences
- Study: Build confidence
- Practice: Gain experience

## The Psychology Edge

### Winners vs Losers
- Winners: Accept losses quickly
- Losers: Hope and hold
- Winners: Follow their plan
- Losers: React emotionally
- Winners: Risk management
- Losers: Revenge trading

### Long-term Success
- Boring strategy consistent beats
- Emotional trading loses usually
- Simple plan followed > Complex plan ignored
- Discipline > Intelligence
- Average skill + Great discipline = Success

## Emergency
### When Emotional 
- STOP: Don't trade
- WAIT: Sleep on decision
- REVIEW: Reread thesis
- CONSULT: Talk to advisor
- DECIDE: After cooling off
- Don't trade angry/scared

## Final Thoughts
- Emotions are normal
- Trading/investing toughens you
- Practice improves discipline
- Long-term success possible
- Stick to plan despite emotions
    `,
    keyPoints: [
      "Fear causes panic selling at bottoms",
      "Greed causes buying at tops",
      "Hope causes holding big losers",
      "Overconfidence causes taking excess risk",
      "Discipline and pre-decided rules beat emotions",
    ],
    duration: "15 mins",
  },
};

export const getModuleById = (moduleId: number) => {
  return Object.values(lessonContents).filter(
    (lesson) => lesson.moduleId === moduleId,
  );
};

export const getLessonContent = (moduleId: number, lessonId: number) => {
  const key = `${moduleId}-${lessonId}`;
  return lessonContents[key];
};
