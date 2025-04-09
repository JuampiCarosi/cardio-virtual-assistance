export function CirclesFilled({
  className,
  stroke = "#D9D9D9",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width="2503"
      height="2546"
      viewBox="0 0 2503 2546"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="backgroundGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="15%" stopColor="white" stopOpacity="0.6" />
          <stop offset="17%" stopColor="white" stopOpacity="0.9" />
          <stop offset="20%" stopColor="white" stopOpacity="1" />
        </linearGradient>
      </defs>

      <circle
        cx="1255.5"
        cy="1271.5"
        r="950"
        fill="url(#backgroundGradient)"
        stroke="none"
      />

      <circle
        cx="1255.5"
        cy="1271.5"
        r="950"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle
        cx="1255.5"
        cy="1271.5"
        r="573"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle
        cx="1255.5"
        cy="1252.5"
        r="271"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle
        cx="1013.5"
        cy="1080.5"
        r="214"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle
        cx="1013.5"
        cy="1080.5"
        r="153"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
    </svg>
  );
}
