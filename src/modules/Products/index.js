import React, { useEffect, useState } from "react";
import ProductsGrid from './ProductsGrid';
import ProductManipulation from "./ProductManipulation";
import { mockedProductData } from "./mockedProductData";
import './style.scss';

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // place for backend call
    // mocked backend response
    const mockedCategories = ['Phone', 'Computer', 'Photo', 'Accessories'];

    const resturucterCategories = (activeCategory = 'All Products') => {
      mockedCategories.unshift('All Products');
      const structuredCategories = mockedCategories.map(
        category => {
          return { isActive: false, label: category }
        }
      );
      return setActvieCategories(structuredCategories, activeCategory);
    }
    setProducts(mockedProductData);
    setCategories(resturucterCategories());
  }, []);

  const setActvieCategories = (categories, activeCategory) => {
    return categories.map(category =>
      category.label === activeCategory ?
        { ...category, isActive: true } : { ...category, isActive: false }
    );
  }

  return (
    <div className="ws-product-content-container">
      <h1>Products</h1>
      <ProductManipulation
        categories={categories}
        setCategories={setCategories}
        products={products}
        setProducts={setProducts}
      />
      <ProductsGrid products={products} setProducts={setProducts} cart={cart} setCart={setCart} />
    </div>
  );
}

export default Products;