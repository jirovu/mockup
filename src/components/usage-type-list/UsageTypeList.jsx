import React from 'react';
import './UsageTypeList.css';
import UsageType from '../common/usage-type/UsageType';

const UsageTypeList = ({ items, title }) => {
    return <>
        <div className='usage-type-list-container'>
            <div className='usage-type-lst-header'>
                <span className='usage-type-lst-title'>{title}</span>
            </div>
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
