import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import iphoneImg from '../../assets/img/iphone.svg';
import canon from '../../assets/img/canon.svg';
import { Divider } from '@material-ui/core';
import Product from '../common/product/Product';
import { products } from '../../dump';
import goPro from '../../assets/img/gopro.svg';
import imac from '../../assets/img/imac.svg';
import iroboto from '../../assets/img/iroboto.svg';
import marcoXuTo from '../../assets/img/marcoXuTo.svg';

const cartProducts = [
    {
        id: '0',
        name: 'iphone 11 Pro Max 245GB',
        price: '1ヶ月 : 7000円',
        number: 1,
        img: iphoneImg
    },
    {
        id: '1',
        name: 'Canon EOS 41',
        price: '1ヶ月 : 4000円',
        number: 1,
        img: canon
    }
];

const usagePeriodItems = [
    {
        id: '0',
        name: '利用開始日',
        value: '2020/1/21'
    },
    {
        id: '1',
        name: '利用期間',
        value: '1か月'
    },
    {
        id: '2',
        name: '利用終了日',
        value: '2020/2/21'
    },
    {
        id: '3',
        name: '累計利用金額',
        value: '11000円'
    }
];

const otherProducts = [
    {
        id: '0',
        name: 'Go Pro Hero Black 7',
        img: goPro,
        price: '4980円 / 月額',
        btnLst: [
            {
                id: '01',
                btnName: '月額',
                isActive: true
            },
            {
                id: '02',
                btnName: '購入',
                isActive: true
            }
        ]
    },
    {
        id: '1',
        name: 'imac',
        img: imac,
        price: '7980円 / 月額',
        btnLst: [
            {
                id: '11',
                btnName: '月額',
                isActive: true
            }
        ]
    },
    {
        id: '2',
        name: 'iRoboto 648',
        img: iroboto,
        price: 'iRoboto 648',
        btnLst: [
            {
                id: '21',
                btnName: '月額',
                isActive: true
            },
            {
                id: '22',
                btnName: '購入',
                isActive: true
            }
        ]
    }
    , {
        id: '3',
        name: 'ホットクック',
        img: marcoXuTo,
        price: '5980円 / 14日',
        btnLst: [
            {
                id: '31',
                btnName: '月額',
                isActive: true
            },
            {
                id: '32',
                btnName: '購入',
                isActive: true
            }
        ]
    }
]

const CartProduct = ({ img, name, price, number }) => {
    return <>
        <div className='c-product-item'>
            <img src={img} alt="Product image" className='product-img' />
            <div className='c-product-content'>
                <span className='c-product-name'>{name}</span>
                <span className='c-product-price'>{price}</span>
                <div className='c-product-btn-group'>
                    <button className='c-product-btn'>編集</button>
                    <button className='c-product-btn'>削除</button>
                </div>
            </div>
            <span className='c-product-number'>* {number}</span>
        </div>
    </>
}

const Cart = () => {
    return <>
        <div className='cart-container'>
            <div className='cart-header'>
                <FontAwesomeIcon icon={faChevronLeft} className='back-icon' />
                <span className='cart-header-title'>ショッピングカート</span>
            </div>

            <div className='cart-content'>
                <div className='cart-o-item'>
                    <div className='cart-o-item-header'>
                        <span className='cart-o-item-title'>注文アイテム</span>
                        <span className='cart-o-item-title'>注文数 : 2</span>
                    </div>

                    <div className='cart-o-item-content'>
                        <div className='cart-o-product'>
                            {
                                cartProducts.map((p, i) => (
                                    <React.Fragment key={p.id}>
                                        <CartProduct img={p.img} name={p.name} price={p.price} number={p.number} />
                                        {i !== (cartProducts.length - 1) && <Divider />}
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='usage-period'>
                    <span className='usage-period-title'>利用期間</span>

                    <div className='usage-period-items'>
                        {
                            usagePeriodItems.map((it, i) => (
                                <React.Fragment key={i}>
                                    <div className='usage-period-item'>
                                        <span>{it.name}</span>
                                        <span>{it.value}</span>
                                    </div>
                                    {i !== (usagePeriodItems.length - 1) && <Divider />}
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>

                <div className='pickup-place'>
                    <span className='pickup-place-title'>受取場所</span>

                    <div className='p-place-content'>
                        <div className='p-place-receive'>
                            <span className='p-place-receive-title'>受け取り方法</span>
                            <div className='p-place-btn-group'>
                                <button className='p-place-btn'>店舗</button>
                                <button className='p-place-btn p-place-btn-active'>配送</button>
                            </div>
                        </div>
                        <Divider />

                        <div className='p-place-products'>
                            <div className='p-place-products-header'>
                                <span className='p-place-products-title'>レンタルカメラ東京</span>
                                <span className='p-place-products-decs'>他の商品もついでに注文！</span>
                            </div>

                            <div className='p-place-products-content'>
                                {
                                    otherProducts.map(p => (
                                        <React.Fragment key={p.id}>
                                            <Product name={p.name} img={p.img} price={p.price} btnLst={p.btnLst} />
                                        </React.Fragment>
                                    ))
                                }

                                <span className='show-more'>もっと見る &#62;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='add-to-cart-container'>
                <button className='add-to-cart-button'>レジに進む</button>
            </div>
        </div>
    </>
}

export default React.memo(Cart);
