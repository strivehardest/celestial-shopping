// components/ProductCard.js
import Link from 'next/link';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import useCartStore from '@/store/cartStore';
import Price from '@/components/Price';

export default function ProductCard({ product, showAddToCart = true }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  // Handle category display (object or string)
  const categoryName = typeof product.category === 'object' && product.category?.name 
    ? product.category.name 
    : product.category || 'Uncategorized';

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image || "https://www.celestialwebsolutions.net/images/default-product.jpg",
    "description": product.description || product.name,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Celestial Shopping"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.celestialwebsolutions.net/products/${product.slug}`,
      "priceCurrency": "GHS",
      "price": product.price,
      "availability": product.in_stock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "category": categoryName
  };

  return (
    <article 
      className="product-card block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      itemScope 
      itemType="https://schema.org/Product"
    >
      {/* Hidden Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Link href={`/products/${product.slug}`} className="block">
        {/* Product Image */}
        <div className="relative bg-gray-50">
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.name} - ${categoryName}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              itemProp="image"
            />
          ) : (
            <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <ShoppingBag className="text-green-500" size={64} />
            </div>
          )}
          
          {/* Stock Badge */}
          {product.in_stock ? (
            <span className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              In Stock
            </span>
          ) : (
            <span className="absolute top-4 right-4 bg-red-100 text-red-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              Out of Stock
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 
            className="font-bricolage font-bold text-lg mb-2 line-clamp-2 text-gray-900 hover:text-green-600 transition-colors"
            itemProp="name"
          >
            {product.name}
          </h3>
          
          <p 
            className="text-gray-600 text-sm mb-4 font-medium"
            itemProp="category"
          >
            {categoryName}
          </p>
          
          <div className="flex items-center justify-between">
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content="GHS" />
              <meta itemProp="price" content={product.price} />
              <meta 
                itemProp="availability" 
                content={product.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"} 
              />
              <Price amount={product.price} size="2xl" className="text-green-700 font-bold" />
            </div>
            
            {showAddToCart && (
              <button
                onClick={handleAddToCart}
                disabled={!product.in_stock}
                className={`bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 ${
                  !product.in_stock ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' : ''
                }`}
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart size={16} />
                <span className="font-bold">Add</span>
              </button>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}