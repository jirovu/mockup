import React from 'react';
import './UsageTypeList.css';
import UsageType from '../common/usage-type/UsageType';
import ProductTitle from '../common/product-title/ProductTitle';

const UsageTypeList = ({ items, title }) => {
    return <>
        <div className='usage-type-list-container'>
            <ProductTitle title={title} />
            <div className='usage-type-lst-item'>
                {
                    items.map(e => (
                        <React.Fragment key={e.id}>
                            <UsageType txt={e.txt} img={e.img} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    </>
}

export default React.memo(UsageTypeList);
