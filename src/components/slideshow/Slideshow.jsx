import React from 'react';
import './Slideshow.css';
import Slide from '../common/slide/Slide';
import danielKorpai from '../../assets/img/daniel-korpai-_RYbP9O-vTU-unsplash.svg';
import sebastian from '../../assets/img/sebastian-staines-mfzdRsWsiRA-unsplash.svg';
import marcoXu from '../../assets/img/marco-xu-ToUPBCO62Lw-unsplash.svg';
import LineBorder from '../common/line-border/LineBorder';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

const slides = [
    {
        id: 0,
        img: sebastian,
        title: 'ガジェットを楽しむ',
        description: '最先端を感じよう'
    },
    {
        id: 1,
        img: danielKorpai,
        title: 'ガジェットを楽しむ',
        description: '最先端を感じよう'
    },
    {
        id: 2,
        img: marcoXu,
        title: 'ガジェットを楽しむ',
        description: '最先端を感じよう'
    }
]

const Slideshow = (props) => {
    return <>
        <div className="carousel"
            data-flickity='{ "initialIndex": 1, "prevNextButtons": false }'>
            {
                slides.map(s => (
                    <React.Fragment>
                        <Slide img={s.img} title={s.title} description={s.description} />
                    </React.Fragment>
                ))
            }
        </div>
        <LineBorder />
    </>
}

export default React.memo(Slideshow);
