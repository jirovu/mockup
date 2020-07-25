import React from 'react';
import './ProductTitle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductTitle = ({ title, icon, func }) => {
    return <>
        <div className='product-lst-header' onClick={func}>
            <span className='product-lst-title'>{title}</span>
            {icon && <FontAwesomeIcon icon={icon} className='product-lst-arrow' />}
        </div>
    </>
}

export default React.memo(ProductTitle);
