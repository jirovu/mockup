import React from 'react';
import './ListProduct.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Product from '../product/Product';
import ProductTitle from '../product-title/ProductTitle';

const ListProduct = ({ title, products }) => {
    return <>
        <div className='product-lst-container'>
            <ProductTitle title={title} icon={faChevronRight} func={null} />
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
