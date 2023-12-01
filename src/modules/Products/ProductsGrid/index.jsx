import React from 'react';
import ProductCard from './ProductCard';
import './style.scss';

const ProductsGrid = ({products}) => {
    return (
        <div className="gridProduct">
            {products.map((product) =>
                <ProductCard
                    img={product.img}
                    lager={product.lager}
                    price={product.price}
                    productName={product.name}
                    productType={product.type}
                />
            )}
        </div>
    )
};

export default ProductsGrid;