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
import ringIcon from '../../assets/img/ring-icon.svg';
import stepArrow from '../../assets/img/step-arrow.svg';
import stepArrow2 from '../../assets/img/step-arrow-2.svg';
import ringIcon2 from '../../assets/img/ring-icon-2.svg';

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
                    <span className='ip-title'>サービス概要</span>
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
                    <span className='ip-title'>店舗情報</span>
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

                <div className='ip-overview'>
                    <span className='ip-title'>基本情報</span>
                    <div className='ip-o-item'>
                        <span className='ip-plus'>+</span>
                        <span className='ip-txt'>アクセサリー</span>
                    </div>
                    <div className='ip-o-item'>
                        <span className='ip-plus'>+</span>
                        <span className='ip-txt'>受け取り方法・返却方法</span>
                    </div>
                    <div className='ip-o-item'>
                        <span className='ip-plus'>+</span>
                        <span className='ip-txt'>ルール</span>
                    </div>
                    <div className='ip-o-item'>
                        <span className='ip-plus'>+</span>
                        <span className='ip-txt'>配送</span>
                    </div>
                    <div className='ip-o-item'>
                        <span className='ip-plus'>+</span>
                        <span className='ip-txt'>関連動画</span>
                    </div>
                    <div className='ip-o-item'>
                        <span className='ip-plus'>+</span>
                        <span className='ip-txt'>キャンセル</span>
                    </div>
                </div>

                <div className='ip-duration'>
                    <div className='ip-duration-header'>
                        <span className='ip-duration-title'>USE DURATION</span>
                        <span className='ip-duration-txt'>利用期間</span>
                    </div>

                    <div className='ip-o-content'>
                        <div className='ip-duration-it-container'>
                            <span className='ip-duration-it-title'>日額  :  (例)   3日レンタル</span>
                            <div className='ip-duration-it-content'>
                                <span className='ip-duration-it-4'>①</span>
                                <span className='ip-duration-it-border'></span>
                                <span className='ip-duration-it-4'>②</span>
                                <span className='ip-duration-it-border'></span>
                                <span className='ip-duration-it-4'>③</span>
                                <span className='ip-duration-it-border'></span>
                                <span className='ip-duration-it-4'>④</span>
                            </div>
                            <div className='ip-duration-it-des'>
                                <span className='ip-duration-it-txt'>受取日</span>
                                <span className='ip-duration-it-txt'>返送 - 返送日</span>
                            </div>
                        </div>
                    </div>

                    <div className='ip-o-content'>
                        <div className='ip-duration-it-container'>
                            <span className='ip-duration-it-title'>月額  :  (例)  3か月</span>
                            <div className='ip-duration-it-content'>
                                <span className='ip-duration-it-2'>1月1日</span>
                                <span className='ip-duration-it-2'>4月1日</span>
                            </div>
                            <div className='ip-duration-it-des-2'>
                                <span className='ip-duration-it-txt'>受取日</span>
                                <span className='ip-duration-it-txt'>返送 - 返送日</span>
                            </div>
                        </div>
                    </div>

                    <div className='ip-o-content'>
                        <div className='ip-desc-container'>
                            <img src={ringIcon} alt="Ring icon" className="ip-o-ring-icon" />
                            <div className="ip-desc-content">
                                <span className='ip-desc-title'>店舗営業</span>
                                <span>営業時間内に受取・返却を行ってください。</span>
                                <br />
                                <span className='ip-desc-title'>配送</span>
                                <span>返却日の24時までに返送手続きを行ってください。</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ip-receive">
                    <div className='ip-receive-header'>
                        <span className='ip-receive-title'>HOW TO RECEIVE</span>
                        <span className='ip-receive-txt'>受取方法</span>
                    </div>
                    <LineBorder />

                    <div className='ip-receive-content'>
                        <span className='ip-receive-step-title'><b>店舗営業</b>:  店舗営業の場合には店舗でも受け取れます</span>
                        <img src={stepArrow} alt="Step arrow" className="step-arrow-img" />
                        <div className="ip-receive-step-des">
                            <span>商品を選ぶ</span>
                            <span>予約・決済</span>
                            <span>店舗訪問</span>
                            <span>受取</span>
                        </div>
                    </div>
                    <LineBorder />

                    <div className='ip-receive-content'>
                        <span className='ip-receive-step-title'><b>店舗配送</b>:  店舗がアイテムを直接配送します。</span>
                        <img src={stepArrow} alt="Step arrow" className="step-arrow-img" />
                        <div className="ip-receive-step-des">
                            <span>商品を選ぶ</span>
                            <span>予約・決済</span>
                            <span>店舗訪問</span>
                            <span>店舗が配送</span>
                        </div>
                    </div>
                    <LineBorder />

                    <div className='ip-receive-content'>
                        <span className='ip-receive-step-title'><b>配送</b>:  宅配事業者がアイテムを直接配送します。</span>
                        <img src={stepArrow2} alt="Step arrow" className="step-arrow-img-2" />
                        <div className="ip-receive-step-des">
                            <span>商品を選ぶ</span>
                            <span>予約・決済</span>
                            <span>店舗訪問</span>
                            <span></span>
                        </div>
                    </div>

                    <div className="ip-o-content">
                        <div className='ip-receive-container'>
                            <img src={ringIcon2} alt="Ring icon" className="ip-o-ring-icon" />
                            <div className="ip-desc-content">
                                <span>Funmodeには店舗で営業している事業者、ECのみで運営する事業者、事業所から直接配送する事業者の3タイプがあります。</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ip-faq">
                    <div className='ip-faq-header'>
                        <span className='ip-faq-title'>FAQ</span>
                        <span className='ip-faq-txt'>よくある質問</span>
                    </div>

                    <div className='ip-faq-content'>
                        <span className='ip-faq-item'>運営会社について</span>
                        <span className='ip-faq-item'>利用サービスに関するお問い合わせについて</span>
                        <span className='ip-faq-item'>レンタル中のアイテムの購入について</span>
                        <span className='ip-faq-item'>アイテムの返却方法について</span>
                        <span className='ip-faq-item'>利用中のトラブルについて</span>
                    </div>
                    <button className='ip-faq-see-more-btn'>もっと見る</button>
                </div>
            </div>

            <div className='ip-footer'>
                <button className='ip-add-to-cart'>カートに入れる</button>
            </div>
        </div>
    </>
}

export default ItemPage
