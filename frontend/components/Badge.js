// components/Badge.js

export default function Badge({ children, variant = 'success' }) {
  const variants = {
    success: 'badge badge-success',
    warning: 'badge badge-warning',
    danger: 'badge badge-danger',
  };

  return (
    <span className={variants[variant] || variants.success}>
      {children}
    </span>
  );
}