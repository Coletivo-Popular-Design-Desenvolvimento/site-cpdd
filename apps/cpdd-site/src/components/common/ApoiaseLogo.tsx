export default function ApoiaseLogo({
  className,
  role,
  'aria-label': ariaLabel,
}: { className?: string; role?: string; 'aria-label'?: string }) {
  return (
    <svg className={className} viewBox="0 0 319 49" role={role} aria-label={ariaLabel}>
      <use href="/apoiase.svg#icon" />
    </svg>
  );
}