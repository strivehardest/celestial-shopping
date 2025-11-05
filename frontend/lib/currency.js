// lib/currency.js

/**
 * Format number as Ghana Cedi currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount)) return '₵0.00';
  
  return `₵${numAmount.toFixed(2)}`;
}

/**
 * Alternative format with GHS prefix
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string with GHS
 */
export function formatCurrencyGHS(amount) {
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount)) return 'GHS 0.00';
  
  return `GHS ${numAmount.toFixed(2)}`;
}

/**
 * Format with thousand separators
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency with separators
 */
export function formatCurrencyWithSeparator(amount) {
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount)) return '₵0.00';
  
  return `₵${numAmount.toLocaleString('en-GH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export default formatCurrency;