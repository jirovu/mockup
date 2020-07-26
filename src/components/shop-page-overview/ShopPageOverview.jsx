import React from 'react';
import './ShopPageOverview.css';
import Product from '../common/product/Product';
import { products } from '../../dump';

const ShopPageOverview = (props) => {
    return <>
        <div className='sp-overview-container'>
            {
                products.map(p => (
                    <React.Fragment key={p.id}>
                        <Product name={p.name} img={p.img} price={p.price} btnLst={p.btnLst} />
                    </React.Fragment>
                ))
            }
        </div>
    </>
}

export default React.memo(ShopPageOverview);
