import React from 'react';
import './UsageType.css';

const UsageType = ({ img, txt }) => {
    return <>
        <div className='usage-type-item'>
            <div className='usage-type-img-container'>
                <img src={img} alt="Usage img" className='usage-type-img' />
            </div>
            <p className='usage-type-txt'>{txt}</p>
        </div>
    </>
}

export default React.memo(UsageType);
