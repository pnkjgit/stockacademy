import "./CandlestickPatterns.css";

// Single Candle Component
interface CandleProps {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  label: string;
  width?: number;
}

function Candle({ x, open, close, high, low, label, width = 25 }: CandleProps) {
  const scale = 100;
  const isGreen = close > open;
  const bodyTop = (Math.min(open, close) / scale) * 80 + 10;
  const bodyHeight = (Math.abs(close - open) / scale) * 80;
  const wickTop = (high / scale) * 80 + 10;
  const wickBottom = (low / scale) * 80 + 10;

  return (
    <g key={`candle-${x}`}>
      {/* Wick */}
      <line
        x1={x}
        y1={wickTop}
        x2={x}
        y2={wickBottom}
        stroke={isGreen ? "#10b981" : "#ef4444"}
        strokeWidth="1"
      />
      {/* Body */}
      <rect
        x={x - width / 2}
        y={bodyTop}
        width={width}
        height={Math.max(bodyHeight, 2)}
        fill={isGreen ? "#10b981" : "#ef4444"}
        stroke={isGreen ? "#059669" : "#dc2626"}
        strokeWidth="1"
      />
      {/* Label */}
      <text
        x={x}
        y={110}
        textAnchor="middle"
        fontSize="11"
        fill="#9ca3af"
        fontFamily="monospace"
      >
        {label}
      </text>
    </g>
  );
}

// Hammer Pattern
export function HammerPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">Hammer Pattern (Bullish)</h4>
      <svg viewBox="0 0 300 150" className="pattern-svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#374151"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="300" height="150" fill="#1a1a2e" />
        <text
          x="150"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Hammer at Support Level
        </text>

        {/* Candle: Rejection at support */}
        <Candle
          x={80}
          open={50}
          close={55}
          high={60}
          low={20}
          label="Hammer"
          width={20}
        />

        {/* Arrow showing recovery */}
        <g>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <polygon points="0 0, 10 5, 0 10" fill="#10b981" />
            </marker>
          </defs>
          <path
            d="M 120 60 L 180 40"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
            strokeDasharray="5,5"
          />
          <text
            x="150"
            y="50"
            textAnchor="middle"
            fontSize="12"
            fill="#10b981"
            fontWeight="bold"
          >
            Price Recovery
          </text>
        </g>

        {/* Grid lines for reference */}
        <line
          x1="20"
          y1="30"
          x2="200"
          y2="30"
          stroke="#374151"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="210" y="35" fontSize="10" fill="#9ca3af">
          Support
        </text>
      </svg>
      <p className="pattern-description">
        Small body with long lower wick showing sellers trying but buyers
        stepping in at support.
      </p>
    </div>
  );
}

// Bullish Engulfing
export function BullishEngulfingPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">Bullish Engulfing (Reversal Signal)</h4>
      <svg viewBox="0 0 300 150" className="pattern-svg">
        <rect width="300" height="150" fill="#1a1a2e" />
        <text
          x="150"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Bullish Engulfing Pattern
        </text>

        {/* First candle: Bearish (small red) */}
        <Candle
          x={70}
          open={65}
          close={55}
          high={70}
          low={50}
          label="Day 1"
          width={15}
        />

        {/* Second candle: Bullish (larger green engulfing) */}
        <Candle
          x={130}
          open={50}
          close={75}
          high={80}
          low={45}
          label="Day 2"
          width={30}
        />

        {/* Annotation */}
        <g>
          <line
            x1="70"
            y1="75"
            x2="130"
            y2="75"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <text
            x="100"
            y="88"
            textAnchor="middle"
            fontSize="11"
            fill="#60a5fa"
            fontWeight="bold"
          >
            Engulfing
          </text>
        </g>

        {/* Buy signal indicator */}
        <g transform="translate(190, 60)">
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="12"
            fill="#10b981"
            fontWeight="bold"
          >
            BUY
          </text>
        </g>
      </svg>
      <p className="pattern-description">
        Day 2's green candle completely engulfs Day 1's red candle. Shows shift
        from seller to buyer control.
      </p>
    </div>
  );
}

// Bearish Engulfing
export function BearishEngulfingPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">Bearish Engulfing (Reversal Signal)</h4>
      <svg viewBox="0 0 300 150" className="pattern-svg">
        <rect width="300" height="150" fill="#1a1a2e" />
        <text
          x="150"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Bearish Engulfing Pattern
        </text>

        {/* First candle: Bullish (small green) */}
        <Candle
          x={70}
          open={45}
          close={75}
          high={80}
          low={40}
          label="Day 1"
          width={15}
        />

        {/* Second candle: Bearish (larger red engulfing) */}
        <Candle
          x={130}
          open={80}
          close={50}
          high={85}
          low={45}
          label="Day 2"
          width={30}
        />

        {/* Annotation */}
        <g>
          <line
            x1="70"
            y1="75"
            x2="130"
            y2="75"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <text
            x="100"
            y="88"
            textAnchor="middle"
            fontSize="11"
            fill="#60a5fa"
            fontWeight="bold"
          >
            Engulfing
          </text>
        </g>

        {/* Sell signal indicator */}
        <g transform="translate(190, 60)">
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="12"
            fill="#ef4444"
            fontWeight="bold"
          >
            SELL
          </text>
        </g>
      </svg>
      <p className="pattern-description">
        Day 2's red candle completely engulfs Day 1's green candle. Shows shift
        from buyer to seller control.
      </p>
    </div>
  );
}

// Morning Star (3-candle reversal)
export function MorningStarPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">
        Morning Star (3-Candle Bullish Reversal)
      </h4>
      <svg viewBox="0 0 350 150" className="pattern-svg">
        <rect width="350" height="150" fill="#1a1a2e" />
        <text
          x="175"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Morning Star - Strong Bullish Signal
        </text>

        {/* First candle: Big bearish */}
        <Candle
          x={60}
          open={70}
          close={40}
          high={75}
          low={35}
          label="Day 1"
          width={20}
        />

        {/* Gap down with small body */}
        <Candle
          x={130}
          open={38}
          close={35}
          high={40}
          low={30}
          label="Day 2"
          width={12}
        />

        {/* Recovery candle covering losses */}
        <Candle
          x={200}
          open={35}
          close={60}
          high={65}
          low={33}
          label="Day 3"
          width={20}
        />

        {/* Star indication */}
        <text
          x="130"
          y="80"
          textAnchor="middle"
          fontSize="20"
          fill="#fbbf24"
          fontWeight="bold"
        >
          ★
        </text>

        {/* Buy signal */}
        <g transform="translate(280, 60)">
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="12"
            fill="#10b981"
            fontWeight="bold"
          >
            BUY
          </text>
        </g>
      </svg>
      <p className="pattern-description">
        Three-candle pattern: Large red, small body, large green recovery.
        "Star" formation indicates reversal from down to up.
      </p>
    </div>
  );
}

// Evening Star (3-candle reversal)
export function EveningStarPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">
        Evening Star (3-Candle Bearish Reversal)
      </h4>
      <svg viewBox="0 0 350 150" className="pattern-svg">
        <rect width="350" height="150" fill="#1a1a2e" />
        <text
          x="175"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Evening Star - Strong Bearish Signal
        </text>

        {/* First candle: Big bullish */}
        <Candle
          x={60}
          open={35}
          close={70}
          high={75}
          low={30}
          label="Day 1"
          width={20}
        />

        {/* Gap up with small body */}
        <Candle
          x={130}
          open={72}
          close={75}
          high={80}
          low={70}
          label="Day 2"
          width={12}
        />

        {/* Reversal candle covering losses */}
        <Candle
          x={200}
          open={75}
          close={40}
          high={78}
          low={35}
          label="Day 3"
          width={20}
        />

        {/* Star indication */}
        <text
          x="130"
          y="80"
          textAnchor="middle"
          fontSize="20"
          fill="#fbbf24"
          fontWeight="bold"
        >
          ★
        </text>

        {/* Sell signal */}
        <g transform="translate(280, 60)">
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="12"
            fill="#ef4444"
            fontWeight="bold"
          >
            SELL
          </text>
        </g>
      </svg>
      <p className="pattern-description">
        Three-candle pattern: Large green, small body, large red reversal.
        "Star" formation indicates reversal from up to down.
      </p>
    </div>
  );
}

// Shooting Star
export function ShootingStarPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">Shooting Star Pattern (Bearish)</h4>
      <svg viewBox="0 0 300 150" className="pattern-svg">
        <rect width="300" height="150" fill="#1a1a2e" />
        <text
          x="150"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Shooting Star at Resistance
        </text>

        {/* Candle with long upper wick */}
        <Candle
          x={80}
          open={50}
          close={45}
          high={85}
          low={40}
          label="Shooting Star"
          width={20}
        />

        {/* Arrow showing rejection */}
        <g>
          <defs>
            <marker
              id="arrowhead-red"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <polygon points="0 0, 10 5, 0 10" fill="#ef4444" />
            </marker>
          </defs>
          <path
            d="M 120 40 L 180 60"
            stroke="#ef4444"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead-red)"
            strokeDasharray="5,5"
          />
          <text
            x="150"
            y="45"
            textAnchor="middle"
            fontSize="12"
            fill="#ef4444"
            fontWeight="bold"
          >
            Price Rejection
          </text>
        </g>

        {/* Resistance line */}
        <line
          x1="20"
          y1="30"
          x2="200"
          y2="30"
          stroke="#374151"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="210" y="35" fontSize="10" fill="#9ca3af">
          Resistance
        </text>

        {/* Sell signal */}
        <g transform="translate(240, 80)">
          <circle
            cx="0"
            cy="0"
            r="12"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="11"
            fill="#ef4444"
            fontWeight="bold"
          >
            SELL
          </text>
        </g>
      </svg>
      <p className="pattern-description">
        Small body with long upper wick showing buyers tried but sellers took
        control near resistance.
      </p>
    </div>
  );
}

// Doji Pattern
export function DojiPattern() {
  return (
    <div className="pattern-container">
      <h4 className="pattern-title">Doji Pattern (Indecision)</h4>
      <svg viewBox="0 0 250 150" className="pattern-svg">
        <rect width="250" height="150" fill="#1a1a2e" />
        <text
          x="125"
          y="20"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#60a5fa"
        >
          Doji Candle
        </text>

        {/* Doji candle - open equals close */}
        <g>
          {/* Wick */}
          <line
            x1="80"
            y1="20"
            x2="80"
            y2="95"
            stroke="#fbbf24"
            strokeWidth="2"
          />
          {/* Body (almost invisible, since open = close) */}
          <line
            x1="75"
            y1="55"
            x2="85"
            y2="55"
            stroke="#fbbf24"
            strokeWidth="2"
          />

          {/* Label */}
          <text
            x="80"
            y="110"
            textAnchor="middle"
            fontSize="11"
            fill="#9ca3af"
            fontFamily="monospace"
          >
            Doji
          </text>
        </g>

        {/* Text explanation */}
        <g>
          <text x="130" y="50" fontSize="12" fill="#a3e635" fontWeight="bold">
            Open = Close
          </text>
          <text x="130" y="70" fontSize="11" fill="#9ca3af">
            Market Indecision
          </text>
          <text x="130" y="85" fontSize="11" fill="#9ca3af">
            Can Signal Reversal
          </text>
        </g>
      </svg>
      <p className="pattern-description">
        Doji has no body - open price equals close price. Shows complete market
        indecision and often precedes reversals.
      </p>
    </div>
  );
}

// Pattern Collection Component
export function CandlestickPatternsCollection() {
  return (
    <div className="patterns-collection">
      <HammerPattern />
      <BullishEngulfingPattern />
      <BearishEngulfingPattern />
      <MorningStarPattern />
      <EveningStarPattern />
      <ShootingStarPattern />
      <DojiPattern />
    </div>
  );
}

// Educational wrapper with all patterns explained
export function CandlestickEducation() {
  return (
    <div className="candlestick-education">
      <h3 className="section-title">Candlestick Pattern Visualizations</h3>
      <CandlestickPatternsCollection />
    </div>
  );
}
