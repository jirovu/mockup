import { Badge } from '@material-ui/core';
import React from 'react';
import apple from '../../assets/img/apple.svg';
import backIcon from '../../assets/img/back-black-icon.svg';
import ipImg1 from '../../assets/img/ip-img-1.svg';
import ipImg2 from '../../assets/img/ip-img-2.svg';
import ipImg3 from '../../assets/img/ip-img-3.svg';
import storeIcon from '../../assets/img/store-icon.svg';
import { ipOverviewServices } from '../../dump';
import LineBorder from '../common/line-border/LineBorder';
import ServiceList from '../common/service-list/ServiceList';
import casie2 from '../../assets/img/casie2.svg';
import casieProduct1 from '../../assets/img/casie-product-1.svg';
import casieProduct2 from '../../assets/img/casie-product-2.svg';
import './ItemPage.css';
import Product from '../common/product/Product';

const listBtn = [
    {
        id: '0',
        btnName: '月額',
        isActive: true
    },
    {
        id: '1',
        btnName: '1週間',
        isActive: false
    },
    {
        id: '2',
        btnName: '3日',
        isActive: false
    },
    {
        id: '3',
        btnName: '1日',
        isActive: true
    },
    {
        id: '4',
        btnName: '当日',
        isActive: false
    }
]

const ipImgLst = [
    {
        id: '1',
        img: ipImg1
    },
    {
        id: '2',
        img: ipImg2
    },
    {
        id: '3',
        img: ipImg3
    }
]

const casieProducts = [
    {
        id: 0,
        name: '昼のカフェテラス',
        img: casieProduct1,
        price: '5300円 / 月額',
        btnLst:
            [
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
        name: 'なかよし',
        img: casieProduct2,
        price: '2980円 / 月額',
        btnLst:
            [
                {
                    btnId: '00',
                    btnName: '短期'
                }
            ]
    }

]

const ItemPage = () => {
    return <>
        <div className='ip-container'>
            <div className='ip-header'>
                <div className='ip-header-content'>
                    <div className='ip-header-back'>
                        <img src={backIcon} alt="Back icon" className="ip-back-icon" />
                        <span className="ip-header-title">前のページに戻る</span>
                    </div>
                    <Badge badgeContent={1}>
                        <img src={storeIcon} alt="Store" className="ip-store-icon" />
                    </Badge>
                </div>
            </div>
            <div className="ip-content">
                <img src={apple} alt="Banner" className="ip-banner" />
                <div className="ip-details">
                    <span className="ip-details-title">Real - Apple</span>
                    <span className="ip-details-title-desc">月額 2980  -  日額 300円  -  購入40000円</span>
                    <div className="ip-details-btn-group">
                        {
                            listBtn.map(btn => (
                                <button key={btn.id} className={`ip-details-btn ${btn.isActive ? 'btn-active' : ''}`} onClick={null}>{btn.btnName}</button>
                            ))
                        }
                    </div>
                </div>
                <LineBorder />
                <div className="ip-img-lst">
                    {
                        ipImgLst.map(({ id, img }) => (
                            <img src={img} key={id} className='ip-img' />
                        ))
                    }
                </div>
                <LineBorder />
                <div className="ip-desc">
                    <span className="tp-desc-txt">作者 : 中村百合江、サイズ : H 33.4 cm * W 24.2 cm</span>
                    <span className='tp-desc-more'>もっと見る &#62;</span>
                </div>

                <div className='ip-overview'>
                    <span span className='ip-title'>サービス概要</span>
                    <div className='ip-o-content'>
                        {
                            ipOverviewServices.map(s => (
                                <React.Fragment key={s.id}>
                                    <ServiceList title={s.title} services={s.services} />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>

                <div className='ip-overview'>
                    <span span className='ip-title'>店舗情報</span>
                    <div className='ip-o-content'>
                        <div className='ip-o-casie'>
                            <div className='ip-o-content-img-container'>
                                <img src={casie2} alt="Casie Img" className="ip-o-casie-img" />
                            </div>
                            <div className="ip-o-casie-content">
                                <span className="ip-o-casie-title">Casie</span>
                                <span className="ip-o-casie-txt">3000人以上が利用する原画のサブスク</span>
                            </div>
                        </div>
                        <div className="ip-o-lst-product">
                            {
                                casieProducts.map(p => (
                                    <React.Fragment key={p.id}>
                                        <Product name={p.name} img={p.img} price={p.price} btnLst={p.btnLst} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                        <a href="/" className='ip-o-more-link'>もっと見る &#62;</a>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default ItemPage
