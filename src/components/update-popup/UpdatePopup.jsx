import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { makeStyles, TextField, Divider } from '@material-ui/core';
import './UpdatePopup.css';
import iphone from '../../assets/img/iphone.svg';
import ProductBtn from '../common/product-btn/ProductBtn';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 140
    },
}));

const UpdatePopup = () => {
    const classes = useStyles();

    return <>
        <div className='up-container'>
            <div className='up-header'>
                <span className='up-header-title'>編集</span>
                <FontAwesomeIcon icon={faTimes} className='up-close-btn' />
            </div>

            <div className='up-content'>
                <div className='up-it-product'>
                    <span className='up-it-product-title'>編集するアイテム</span>

                    <div className='up-it-product-container'>
                        <img src={iphone} alt="Product image" className='up-it-img' />
                        <div className='up-it-product-content'>
                            <span className='up-it-product-name'>iphone 11 Pro Max 245GB</span>
                            <span className='up-it-product-price'>1ヶ月 : 7000円</span>
                        </div>
                    </div>
                </div>

                <div className='up-it-count'>
                    <span className='up-it-count-title'>アイテム数</span>
                    <div className='up-it-count-content'>
                        <span className='up-it-count-minus-btn'>-</span>
                        <span className='up-it-count-number'>1</span>
                        <span className='up-it-count-plus-btn'>+</span>
                    </div>
                </div>

                <div className='up-usa-peri'>
                    <span className='up-usa-peri-title'>利用期間</span>
                    <div className='up-usa-peri-content'>
                        <div className='up-usa-peri-item'>
                            <span className='usa-peri-txt'>利用開始日</span>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue='2020-08-02'
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <Divider />

                        <div className='up-usa-peri-item'>
                            <span className='up-usa-peri-item-txt'>利用タイプ</span>
                            <div className='up-usa-peri-item-btn-group'>
                                <ProductBtn name='月額' isActive={false} />
                                <ProductBtn name='月額' isActive={true} />
                            </div>
                        </div>

                        <Divider />

                        <div className='up-usa-peri-item'>
                            <span className='up-usa-peri-item-txt'>利用期間</span>
                            <div className='us-period-btn-group'>
                                <ProductBtn name='月額' isActive={false} />
                                <ProductBtn name='1日' isActive={true} />
                                <ProductBtn name='2日' isActive={false} />
                                <ProductBtn name='3日' isActive={false} />
                                <ProductBtn name='1週間' isActive={false} />
                                <ProductBtn name='2週間' isActive={false} />
                                <ProductBtn name='3週間' isActive={false} />
                                <ProductBtn name='1か月' isActive={false} />
                            </div>
                        </div>

                        <Divider />

                        <div className='up-usa-peri-item'>
                            <span className='up-usa-peri-name'>利用終了日</span>
                            <span className='up-usa-peri-value'>2019/12/02</span>
                        </div>

                        <Divider />

                        <div className='up-usa-peri-item'>
                            <span className='up-usa-peri-desc'>※ 異なる利用期間のアイテムを同時に注文することは出来ません。そのため、アイテムごとに利用期間を編集することは出来ません。</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='update-btn-container'>
                <button className='update-btn'>更新</button>
            </div>
        </div>
    </>
}

export default React.memo(UpdatePopup);
