export default function DiyarLogo({ variant = "navbar" }) {
  const isFooter = variant === "footer";
  const mainColor = isFooter ? "#ffffff" : "var(--green)";
  const accentColor = "#C8A96E"; // الذهبي ثابت في الحالتين

  return (
    <div className="diyar-logo" style={{ display: "inline-flex", alignItems: "center", direction: "ltr" }}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 17L16 8L28 17"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16V31H15V13L8 16Z"
          fill={accentColor}
          fillOpacity="0.2"
          stroke={accentColor}
          strokeWidth="2"
        />
        <path
          d="M16 12L17 14.5L19.5 15.5L17 16.5L16 19L15 16.5L12.5 15.5L15 14.5L16 12Z"
          fill={accentColor}
        />
        <path
          d="M15 11C23 11 28 16 28 22.5C28 29 22 32 14 32H8"
          stroke={mainColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="10.5" y="19" width="2" height="2" fill={mainColor} />
        <rect x="10.5" y="23" width="2" height="2" fill={mainColor} />
      </svg>
      <span
        className="diyar-logo__text"
        style={{
          color: mainColor,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          marginLeft: "-8px",
        }}
      >
        iyar
      </span>
    </div>
  );
}