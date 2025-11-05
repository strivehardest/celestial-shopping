// components/Price.js
import { formatCurrency } from '@/lib/currency';

export default function Price({ amount, className = '', size = 'base' }) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
  };

  return (
    <span 
      className={`font-bold text-green-700 ${sizeClasses[size]} ${className}`}
      itemProp="price"
    >
      {formatCurrency(amount)}
    </span>
  );
}