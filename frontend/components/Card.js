// components/Card.js

export default function Card({ children, className = '', hover = false }) {
  const hoverClass = hover ? 'hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200' : '';
  
  return (
    <div className={`card ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 pb-4 border-b ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-xl font-bricolage font-bold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}