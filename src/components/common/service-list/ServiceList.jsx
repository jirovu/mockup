import React from 'react';
import './ServiceList.css';
import Badge from '@material-ui/core/Badge';

const ServiceList = ({ title, services }) => {
    return <>
        <div className='s-o-container'>
            <div className='s-o-title-con'>
                <Badge overlap="circle" badgeContent="?" className='s-o-title'>{title}</Badge>
            </div>
            <div className='s-o-content'>
                {
                    services.map(s => (
                        <div key={s.id} className='s-o-item'>
                            <img src={s.img} alt="Service icon" className='s-o-icon' />
                            <span className='s-o-txt'>{s.txt}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

export default React.memo(ServiceList);
