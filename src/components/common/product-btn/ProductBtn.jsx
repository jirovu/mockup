import React from 'react';
import './ProductBtn.css';

const ProductBtn = ({ name, func, isActive }) => {
    const isActiveClass = isActive ? 'btn-active' : '';
    return <>
        <button className={`${isActiveClass} product-btn`} onClick={func}>{name}</button>
    </>
}

export default React.memo(ProductBtn);
