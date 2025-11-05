// components/CategoryFilter.js
import { Filter } from 'lucide-react';

export default function CategoryFilter({ categories = [], selected, onSelect }) {
  console.log('CategoryFilter - categories:', categories); // Debug log
  
  return (
    <div className="relative">
      <Filter
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <select
        value={selected || ''}
        onChange={(e) => onSelect(e.target.value)}
        className="input pl-10 w-full border border-gray-300 rounded-lg py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="">All Categories</option>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name} {category.product_count ? `(${category.product_count})` : ''}
            </option>
          ))
        ) : (
          <option disabled>Loading categories...</option>
        )}
      </select>
    </div>
  );
}