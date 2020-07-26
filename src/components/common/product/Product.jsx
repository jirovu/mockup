import React from 'react';
import './Product.css';
import ProductBtn from '../product-btn/ProductBtn';

const Product = ({ name, img, price, btnLst, horizontal }) => {
    return <>
        <div className={`product-container ${horizontal ? 'pd-horizontal' : 'pd-normal'}`}>
            <img src={img} alt="Product img" className={horizontal ? 'product-img-horizontal' : 'product-img-normal'} />
            <div className='product-btnLst'>
                {
                    btnLst.map(e => (
                        <React.Fragment key={e.btnId}>
                            <ProductBtn func={null} name={e.btnName} />
                        </React.Fragment>
                    ))
                }
            </div>
            <div className='product-btm'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>{price}</p>
            </div>
        </div>
    </>
}

export default React.memo(Product);
