export function Circles({
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="1255.5" cy="1271.5" r="950" stroke={stroke} />
      <circle cx="1013.5" cy="1080.5" r="214" stroke={stroke} />
      <circle cx="1255.5" cy="1252.5" r="271" stroke={stroke} />
      <circle cx="1255.5" cy="1271.5" r="573" stroke={stroke} />
      <mask
        id="mask0_339_152"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="682"
        y="698"
        width="1147"
        height="1147"
      >
        <circle cx="1255.5" cy="1271.5" r="573" stroke={stroke} />
      </mask>
      <g mask="url(#mask0_339_152)">
        <circle cx="1255.5" cy="1271.5" r="950" stroke={stroke} />
      </g>
      <circle cx="1013.5" cy="1080.5" r="153" stroke={stroke} />
      <circle cx="1255.5" cy="1271.5" r="950" stroke={stroke} />
    </svg>
  );
}
