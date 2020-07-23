import React from 'react';
import './TabNavigation.css';
import homeNavIcon from '../../../assets/img/home-nav-icon.svg';
import cameraNavIcon from '../../../assets/img/camera-nav-icon.svg';
import categoryNavIcon from '../../../assets/img/category-nav-icon.svg';
import storeNavIcon from '../../../assets/img/store-nav-icon.svg';
import profileNavIcon from '../../../assets/img/profile-nav-icon.svg';

const navItems = [
    {
        id: 0,
        icon: homeNavIcon,
        txt: 'ホーム'
    },
    {
        id: 1,
        icon: cameraNavIcon,
        txt: 'アイテム'
    },
    {
        id: 2,
        icon: categoryNavIcon,
        txt: 'カテゴリー'
    },
    {
        id: 3,
        icon: storeNavIcon,
        txt: 'カート'
    },
    {
        id: 4,
        icon: profileNavIcon,
        txt: 'アカウント'
    }
];

const TabNavigation = () => {
    return <>
        <div className='tab-nav-container'>
            {
                navItems.map(e => (
                    <div className='tab-nav-item' key={e.id}>
                        <img src={e.icon} alt="Tab icon" className='tab-nav-icon' />
                        <span className='tab-nav-txt'>{e.txt}</span>
                    </div>
                ))
            }
        </div>
    </>
}

export default React.memo(TabNavigation);
