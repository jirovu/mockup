import React from 'react';
import interior1 from '../../assets/img/interior1.svg';
import interior2 from '../../assets/img/interior2.svg';
import marco1 from '../../assets/img/marco1.svg';
import marco2 from '../../assets/img/marco2.svg';
import MasterLayout from '../../MasterLayout';
import ListProduct from '../common/list-product/ListProduct';
import RentalShop from '../rental-shop/RentalShop';
import Slideshow from '../slideshow/Slideshow';
import usageType1 from '../../assets/img/usage-type1.svg';
import usageType2 from '../../assets/img/usage-type2.svg';
import usageType3 from '../../assets/img/usage-type3.svg';
import usageType4 from '../../assets/img/usage-type4.svg';
import marcoXu1 from '../../assets/img/marco-xu1.svg';
import marcoXu2 from '../../assets/img/marco-xu2.svg';
import fashion1 from '../../assets/img/fashion1.svg';
import fashion2 from '../../assets/img/fashion2.svg';
import './TopPage.css';
import UsageTypeList from '../usage-type-list/UsageTypeList';

const marcoProducts = [
    {
        id: 0,
        name: 'iRoboto 648',
        price: '3980円 / 14日',
        img: marco1,
        btnLst: [
            {
                btnId: '00',
                btnName: '短期'
            },
            {
                btnId: '01',
                btnName: '購入'
            }
        ]
    },
    {
        id: 1,
        name: 'ホットクック',
        price: '5980円 / 14日',
        img: marco2,
        btnLst: [
            {
                btnId: '10',
                btnName: '短期'
            },
            {
                btnId: '11',
                btnName: '購入'
            }
        ]
    },
    {
        id: 2,
        name: 'ホットクック',
        price: '5980円 / 14日',
        img: marco2,
        btnLst: [
            {
                btnId: '20',
                btnName: '短期'
            },
            {
                btnId: '21',
                btnName: '購入'
            }
        ]
    }
];

const interiorProducts = [
    {
        id: 0,
        name: 'アンティークデスク',
        price: '4780円 / 月額',
        img: interior1,
        btnLst: [
            {
                btnId: '00',
                btnName: '月額'
            }
        ]
    },
    {
        id: 1,
        name: '祈りの灯',
        price: '2980円 / 月額',
        img: interior2,
        btnLst: [
            {
                btnId: '10',
                btnName: '月額'
            }
        ]
    }
];

const usageTypes = [
    {
        id: 0,
        img: usageType1,
        txt: '月額利用',
    },
    {
        id: 1,
        img: usageType2,
        txt: '短期利用',
    },
    {
        id: 2,
        img: usageType3,
        txt: 'レンタル後購入',
    },
    {
        id: 3,
        img: usageType4,
        txt: '借り放題',
    }
];

const marcoXu = [
    {
        id: 0,
        name: 'BESV TRS2 XC',
        price: '9000円 / 当日',
        img: marcoXu1,
        btnLst: [
            {
                btnId: '00',
                btnName: '月額'
            }
        ]
    },
    {
        id: 1,
        name: 'アスガルド',
        price: '20000円 /1日',
        img: marcoXu2,
        btnLst: [
            {
                btnId: '10',
                btnName: '月額'
            }
        ]
    }
];

const fashionStyles = [
    {
        id: 0,
        name: 'HERMES',
        price: '6800円 / 月額',
        img: fashion1,
        btnLst: [
            {
                btnId: '00',
                btnName: '借り放題'
            }
        ]
    },
    {
        id: 1,
        name: 'LOUIS VUITTON',
        price: '6800円 / 月額',
        img: fashion2,
        btnLst: [
            {
                btnId: '10',
                btnName: '借り放題'
            }
        ]
    }
];

const TopPage = () => {
    return <>
        <MasterLayout>
            <Slideshow />
            <div className='line-border'></div>
            <RentalShop />
            <div className='line-border'></div>
            <ListProduct title='家電' products={marcoProducts} />
            <div className='line-border'></div>
            <ListProduct title='インテリア' products={interiorProducts} />
            <div className='line-border'></div>
            <UsageTypeList title='利用タイプから探す' items={usageTypes} />
            <div className='line-border'></div>
            <ListProduct title='アウトドア' products={marcoXu} />
            <div className='line-border'></div>
            <ListProduct title='ファッション' products={fashionStyles} />
            <div className='line-border'></div>
        </MasterLayout>
    </>
}

export default React.memo(TopPage);
