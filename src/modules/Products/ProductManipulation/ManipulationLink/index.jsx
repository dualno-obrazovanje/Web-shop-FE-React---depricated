import React from "react";
import './style.scss';

const ManipulationLink = ({ setActiveLable, setDispalyProducts, isActive, label, categories, setCategories, products, setProducts }) => {

  const getActiveCategory = () => {
    const activeCategory = categories.find(category => category.isActive === true)
    return activeCategory.label;
  }

  const handleFilterByCategory = () => {

    setCategories(categories.map(category => {
      if (label === category.label) {
        return ({
          ...category,
          isActive: true,
        })
      }
      return ({
        ...category,
        isActive: false,
      })
    }));

    console.log(getActiveCategory());

    setProducts(products.filter(product => {
      console.log(product.type);
      console.log(getActiveCategory());
      return product.type === getActiveCategory()
    }));
  }

  return (
    <p
      className={`manipulation-link ${isActive ? 'active-link' : ''}`}
      onClick={handleFilterByCategory}
    >
      {label}
    </p>
  );
}

export default ManipulationLink;