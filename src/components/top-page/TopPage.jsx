import React from 'react';
import MasterLayout from '../../MasterLayout';
import ListProduct from '../common/list-product/ListProduct';
import RentalShop from '../rental-shop/RentalShop';
import Slideshow from '../slideshow/Slideshow';
import './TopPage.css';
import UsageTypeList from '../usage-type-list/UsageTypeList';
import SearchByCategory from '../search-by-category/SearchByCategory';
import { marcoProducts, interiorProducts, usageTypes, marcoXu, fashionStyles } from '../../dump';

const TopPage = () => {
    return <>
        <MasterLayout>
            <div className='top-page-container'>
                <Slideshow />
                <div className='line-border'></div>
                <RentalShop />
                <div className='line-border'></div>
                <ListProduct title='家電' products={marcoProducts} />
                <div className='line-border'></div>
                <ListProduct title='インテリア' products={interiorProducts} />
                <div className='line-border'></div>
                <UsageTypeList title='利用タイプから探す' items={usageTypes} />
                <div className='line-border'></div>
                <ListProduct title='アウトドア' products={marcoXu} />
                <div className='line-border'></div>
                <ListProduct title='ファッション' products={fashionStyles} />
                <div className='line-border'></div>
                <SearchByCategory title='カテゴリーから探す' categories={categories} />
            </div>
        </MasterLayout>
    </>
}

export default React.memo(TopPage);
