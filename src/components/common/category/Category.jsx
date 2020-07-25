import React from 'react';
import './Category.css';

const Category = ({ img, title, txt, func }) => {
    return <>
        <div className='category-container' onClick={func}>
            <img src={img} alt="Category Img" className='category-img' />
            <div className='category-content'>
                <span className='category-title'>{title}</span>
                <span className='category-txt'>{txt}</span>
            </div>
        </div>
    </>
}

export default React.memo(Category);
