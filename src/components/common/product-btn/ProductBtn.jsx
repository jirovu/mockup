import React from 'react';
import './ProductBtn.css';

const ProductBtn = ({ name, func }) => {
    return <>
        <button className='product-btn' onClick={func}>{name}</button>
    </>
}

export default React.memo(ProductBtn);
