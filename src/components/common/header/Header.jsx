import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return <>
        <header className='hd-container'>
            <div className='hd-content'>
                <div className='hd-item hd-location'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='hd-location-icon' />
                    <span>東京</span>
                </div>
                <div className='hd-item hd-title'>
                    <span>Fun mode</span>
                    <span className='hd-red-dot'></span>
                </div>
                <div className='hd-item hd-btn'>
                    <button className="hd-search-btn">店舗検索</button>
                </div>
            </div>
        </header>
    </>
}

export default React.memo(Header);
