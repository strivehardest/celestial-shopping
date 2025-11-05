// components/EmptyState.js
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function EmptyState({ 
  icon: Icon = ShoppingBag, 
  title = 'Nothing here yet', 
  message = 'Get started by adding some items',
  actionText,
  actionLink 
}) {
  return (
    <div className="text-center py-12">
      <Icon className="mx-auto text-gray-300 mb-4" size={64} />
      <h2 className="text-2xl font-bricolage font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-6">{message}</p>
      {actionText && actionLink && (
        <Link href={actionLink} className="btn-primary">
          {actionText}
        </Link>
      )}
    </div>
  );
}