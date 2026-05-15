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
        <clipPath id="clip-about-image" clipPathUnits="objectBoundingBox">
          <path d="M0.411,0 C0.46,0,0.5,0.057,0.5,0.128 V0.351 C0.504,0.434,0.552,0.5,0.611,0.5 H0.911 C0.96,0.5,1,0.557,1,0.628 V1 H0.589 C0.54,1,0.5,0.943,0.5,0.872 V0.649 C0.496,0.566,0.448,0.5,0.389,0.5 H0.089 C0.04,0.5,0,0.443,0,0.372 V0"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
