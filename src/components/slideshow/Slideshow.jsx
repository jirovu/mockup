import React from 'react';
import './Slideshow.css';
import Slide from '../common/slide/Slide';
import danielKorpai from '../../assets/img/daniel-korpai-_RYbP9O-vTU-unsplash.svg';

const slides = [
    {
        id: 0,
        img: danielKorpai,
        title: 'ガジェットを楽しむ',
        description: '最先端を感じよう'
    }
]

const Slideshow = (props) => {
    return <>
        <div className='slideshow-container'>
            {
                slides.map(e => (
                    <React.Fragment key={e.id}>
                        <Slide img={e.img} title={e.title} description={e.description} />
                    </React.Fragment>
                ))
            }
        </div>
    </>
}

export default React.memo(Slideshow);
