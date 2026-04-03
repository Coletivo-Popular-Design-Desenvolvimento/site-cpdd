export default function SvgDefs () {
  return (
    <svg className="h-0 w-0 absolute">
      <defs>
        <clipPath id="clip-wave" clipPathUnits="objectBoundingBox">
          <path d="M0,0 C0.481,0.1,0.519,1,1,1 H0"></path>
        </clipPath>
        <clipPath id="clip-rounded-wedge" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 L0.278,0.88 C0.216,0.955,0.112,1,0,1"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
