import { parts } from "../../../data/parts/Parts";

export function filterProducts(categories = [], subcategories = [], brands = [], minPrice, maxPrice) {
  const filteredProducts = parts.filter((product) => {
    return (
      (categories.length === 0 || categories.includes(product.category)) &&
      (subcategories.length === 0 || subcategories.includes(product.subcategory)) &&
      (brands.length === 0 || brands.map(b => b.toLowerCase()).includes(product.brand.toLowerCase())) &&
      ((!minPrice && !maxPrice) || // Filter by price range when both min and max are provided
        (minPrice && !maxPrice && product.price >= minPrice) || // Only min price provided
        (!minPrice && maxPrice && product.price <= maxPrice) || // Only max price provided
        (minPrice && maxPrice && product.price >= minPrice && product.price <= maxPrice)) // Both min and max prices provided
    );
  });

  return filteredProducts;
}