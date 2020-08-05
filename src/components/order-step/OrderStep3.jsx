import React from 'react';
import './OrderStep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { TextField, FormControlLabel, Checkbox, Divider } from '@material-ui/core';
import iphone from '../../assets/img/iphone.svg';

const OrderStep3 = () => {
    return <>
        <div className="os-container">
            <div className="os-header">
                <FontAwesomeIcon icon={faChevronLeft} className='os-back-icon' />
                <span className="os-header-title">注文の確定</span>
                <span className='os-header-num'>3/3</span>
            </div>

            <div className='os-content'>
                <div className='os-place'>
                    <div className='os-place-header'>
                        <span className='os-place-header-title'>注文内容の確認</span>
                    </div>

                    <div className='os-confirm-content'>
                        <div className='os-product'>
                            <img src={iphone} alt="Iphone img" className='os-product-img' />
                            <div className='os-product-content'>
                                <span className='os-product-name'>iphone 11 Pro Max 245GB</span>
                                <span className='os-product-price'>1ヶ月 : 6980円</span>
                            </div>

                            <span className='os-product-num'>* 1</span>
                        </div>

                        <Divider />

                        <div className='os-item os-i-blue'>
                            <span>クーポン</span>
                            <span>-500円</span>
                        </div>

                        <Divider />

                        <div className='os-item os-i-blue'>
                            <span>初回請求額</span>
                            <span>-6480円</span>
                        </div>

                        <div className='os-place'>
                            <div className='os-place-header'>
                                <span className='os-place-header-title'>毎月の請求</span>
                                <span className='os-place-header-title'>( 月額レンタル )</span>
                            </div>

                            <div className='os-up-content'>
                                <div className='os-item'>
                                    <span>利用開始日</span>
                                    <span>2019/11/02</span>
                                </div>

                                <Divider />

                                <div className='os-item'>
                                    <span>利用期間</span>
                                    <span>1ヶ月</span>
                                </div>

                                <Divider />

                                <div className='os-item'>
                                    <span>利用終了日</span>
                                    <span>2019/12/02</span>
                                </div>

                                <Divider />

                                <div className='os-btn-item-group'>
                                    <button className='os-btn-item'>請求先住所</button>
                                    <button className='os-btn-item'>配送先住所</button>
                                </div>
                            </div>
                        </div>

                        <div className='os-place'>
                            <div className='os-place-header'>
                                <span className='os-place-header-title'>注文者名</span>
                            </div>

                            <div className='os-up-content'>
                                <div className='os-item'>
                                    <span>注文者</span>
                                    <span>注文者</span>
                                </div>

                                <Divider />

                                <div className='os-item'>
                                    <span>メールアドレス</span>
                                    <span>yamada@gmail.com</span>
                                </div>

                                <Divider />

                                <div className='os-item'>
                                    <span>電話番号</span>
                                    <span>012-1234-1234</span>
                                </div>

                                <Divider />

                                <div className='os-item'>
                                    <span>電話番号</span>
                                    <span>012-1234-1234</span>
                                </div>

                                <Divider />

                                <div className='os-item'>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="default" />}
                                        label="利用規約、プライバシーポリシー、店舗規約に同意する"
                                        size="small"
                                        labelPlacement="end"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='submit-btn-container'>
                    <button className='card-info-btn'>最終確認を行う</button>
                </div>
            </div>
        </div>
    </>
}

export default React.memo(OrderStep3);
