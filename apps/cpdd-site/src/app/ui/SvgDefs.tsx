export default function SvgDefs () {
  return (
    <svg className="h-0 w-0 absolute">
      <defs>
        <clipPath id="clip-wave" clipPathUnits="objectBoundingBox">
          <path d="M0,0 C0.481,0.1,0.519,1,1,1 H0"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
