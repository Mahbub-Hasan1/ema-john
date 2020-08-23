import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-Details'>
                <h3>{name}</h3><br />
                <p>by: {seller}</p>
                <h4>${price}</h4>
                <p>Only {stock} left in stock - Order soon</p>
                <button onClick={() => props.hendleAddProduct(props.product)} className='main-button'>now Order</button>
            </div>
        </div>
    );
};

export default Product;