import React from 'react';
import MasterLayout from '../../MasterLayout';
import ListProduct from '../common/list-product/ListProduct';
import RentalShop from '../rental-shop/RentalShop';
import Slideshow from '../slideshow/Slideshow';
import './TopPage.css';
import UsageTypeList from '../usage-type-list/UsageTypeList';
import SearchByCategory from '../search-by-category/SearchByCategory';
import { marcoProducts, interiorProducts, usageTypes, marcoXu, fashionStyles, categories } from '../../dump';
import TopageFooter from '../top-page-footer/TopageFooter';

const TopPage = () => {
    return <>
        <MasterLayout>
            <div className='top-page-container'>
                <Slideshow />
                <RentalShop />
                <ListProduct title='家電' products={marcoProducts} />
                <ListProduct title='インテリア' products={interiorProducts} />
                <UsageTypeList title='利用タイプから探す' items={usageTypes} />
                <ListProduct title='アウトドア' products={marcoXu} />
                <ListProduct title='ファッション' products={fashionStyles} />
                <SearchByCategory title='カテゴリーから探す' categories={categories} />
                <TopageFooter />
            </div>
        </MasterLayout>
    </>
}

export default React.memo(TopPage);
