import React from 'react';
import './ShopPageItemList.css';
import { products } from '../../dump';
import Product from '../common/product/Product';
import searchIcon from '../../assets/img/search-icon.svg';
import filterIcon from '../../assets/img/filter-icon.svg';

const ShopPageItemList = (props) => {
    return <>
        <div className='sp-item-lst-container'>
            {
                products.map(p => (
                    <React.Fragment key={p.id}>
                        <Product name={p.name} img={p.img} price={p.price} btnLst={p.btnLst} />
                    </React.Fragment>
                ))
            }
            <div className='search-filter-bar'>
                <div className='sp-search-item'>
                    <img src={searchIcon} alt="Search icon" />
                    <span className='sp-search-filter-txt'>検索</span>
                </div>
                <div className='vertical-border'></div>
                <div className='sp-filter-item'>
                    <img src={filterIcon} alt="Filter icon" />
                    <span className='sp-search-filter-txt'>フィルター</span>
                </div>
            </div>
        </div>
    </>
}

export default React.memo(ShopPageItemList);
