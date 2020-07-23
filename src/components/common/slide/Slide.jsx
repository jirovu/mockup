import React from 'react';
import './Slide.css';

const Slide = (props) => {
    return <>
        <div className='slide-container'>
            <div className='slide-img-container'>
                <img src={props.img} alt="Img" className='slide-img' />
            </div>
            <div className='slide-btm-container'>
                <p className='slide-btm-title'>{props.title}</p>
                <h3 className='slide-btm-description'>{props.description}</h3>
            </div>
        </div>
    </>
}

export default React.memo(Slide);
