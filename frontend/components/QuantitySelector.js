// components/QuantitySelector.js
import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ 
  quantity, 
  onIncrease, 
  onDecrease, 
  max = 999,
  min = 1 
}) {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className={`w-10 h-10 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-all shadow-sm hover:shadow-md ${
          quantity <= min ? 'opacity-50 cursor-not-allowed bg-gray-200 hover:bg-gray-200' : ''
        }`}
        aria-label="Decrease quantity"
      >
        <Minus size={20} className={quantity <= min ? 'text-gray-400' : 'text-green-600'} />
      </button>
      
      <div className="bg-white border-2 border-green-200 rounded-lg px-4 py-2 min-w-[60px]">
        <span className="text-2xl font-bold text-gray-900 text-center block">
          {quantity}
        </span>
      </div>
      
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className={`w-10 h-10 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-all shadow-sm hover:shadow-md ${
          quantity >= max ? 'opacity-50 cursor-not-allowed bg-gray-200 hover:bg-gray-200' : ''
        }`}
        aria-label="Increase quantity"
      >
        <Plus size={20} className={quantity >= max ? 'text-gray-400' : 'text-green-600'} />
      </button>
    </div>
  );
}