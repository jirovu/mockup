import React from 'react';
import './SearchByCategory.css';
import ProductTitle from '../common/product-title/ProductTitle';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Category from '../common/category/Category';

const SearchByCategory = ({ title, categories }) => {
    return <>
        <div className='search-by-category-container'>
            <ProductTitle title={title} icon={faChevronRight} />
            <div className='search-by-category-content'>
                {
                    categories.map(c => (
                        <React.Fragment key={c.id}>
                            <Category img={c.img} title={c.title} txt={c.txt} func={c.func} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    </>
}

export default React.memo(SearchByCategory);
