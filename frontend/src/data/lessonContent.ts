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
