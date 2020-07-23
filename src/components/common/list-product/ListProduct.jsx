import React from 'react';
import './ListProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Product from '../product/Product';

const ListProduct = ({ title, products }) => {
    return <>
        <div className='product-lst-container'>
            <div className='product-lst-header'>
                <span className='product-lst-title'>{title}</span>
                <FontAwesomeIcon icon={faChevronRight} className='product-lst-arrow' />
            </div>
            <div className='product-lst-content'>
                {
                    products.map(e => (
                        <React.Fragment key={e.id}>
                            <Product name={e.name} img={e.img} price={e.price} btnLst={e.btnLst} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    </>
}

export default React.memo(ListProduct);
