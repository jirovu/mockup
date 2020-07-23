import React from 'react';
import './RentalShop.css';
import cycleTrip from '../../assets/img/cycle-trip.svg';
import campify from '../../assets/img/campify.svg';
import casle from '../../assets/img/casle.svg';
import screenshot from '../../assets/img/screenshot.svg';
import toysub from '../../assets/img/toysub.svg';

const shops = [
    {
        id: 0,
        img: cycleTrip
    },
    {
        id: 1,
        img: campify
    },
    {
        id: 2,
        img: casle
    },
    {
        id: 3,
        img: screenshot
    },
    {
        id: 4,
        img: toysub
    }
]

const RentalShop = (props) => {
    return <>
        <div className='rental-shop-container'>
            <p className='rental-shop-title'>Funmodeで人気なレンタルショップ</p>
            <div className='popular-rental-shop'>
                {
                    shops.map(e => (
                        <React.Fragment key={e.id}>
                            <img src={e.img} alt="Shop img" className='rental-shop-icon' />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    </>
}

export default React.memo(RentalShop);
