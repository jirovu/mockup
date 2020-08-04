import React from 'react';
import './OrderStep.css';
import card from '../../assets/img/card.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { TextField, FormControlLabel, Checkbox, Divider } from '@material-ui/core';

const OrderStep2 = () => {
    return <>
        <div className="os-container">
            <div className="os-header">
                <FontAwesomeIcon icon={faChevronLeft} className='os-back-icon' />
                <span className="os-header-title">決済  /  クーポン</span>
                <span className='os-header-num'>2/3</span>
            </div>

            <div className='os-content'>
                <div className='os-place'>
                    <div className='os-place-header'>
                        <span className='os-place-header-title'>決済方法</span>
                    </div>

                    <div className='os-place-content'>
                        <div className='os-card'>
                            <img src={card} alt="Card img" className='os-card-img' />
                            <span>下4桁 1234</span>
                        </div>
                        <FormControlLabel
                            checked
                            value="end"
                            control={<Checkbox color="default" />}
                            label="別の支払い方法を選ぶ"
                            size="small"
                            labelPlacement="end"
                        />
                    </div>
                </div>

                <div className='os-info'>
                    <div className='os-place-header'>
                        <span className='os-place-header-title'>カード情報を入力</span>
                    </div>

                    <div className='os-desc-content'>
                        <span className='os-desc'>※ 当社では、お客様のカード情報は保存しておらず、株式会社StripeのStripe paymentにより安全利用されているStripeは毎年何兆円もの決済として利用されている世界で最も安全な決済会社の一つです。</span>
                        <div className='os-info-full-field'>
                            <span className='os-info-field-txt'>カード名義</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-full-field'>
                            <span className='os-info-field-txt'>カード番号</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-field'>
                            <span className='os-info-field-txt'>有効期限</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <span className='os-desc'>※ 「月 / 年」で入力してください</span>
                        <div className='os-info-field'>
                            <span className='os-info-field-txt'>セキュリティコード</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                    </div>
                </div>

                <div className='os-place'>
                    <div className='os-place-header'>
                        <span className='os-place-header-title'>クーポンコードの入力</span>
                    </div>

                    <div className='os-coupon-content'>
                        <div className='os-info-field'>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <button className='os-btn'>更新する</button>
                    </div>

                    <Divider />

                    <div className='os-amount'>
                        <span>クーポン利用金額</span>
                        <span>0円</span>
                    </div>
                </div>

                <div className='os-place'>
                    <div className='os-place-header'>
                        <span className='os-place-header-title'>毎月の請求</span>
                    </div>

                    <div className='os-coupon-content'>
                        <span className='os-desc-btm'>今回、選択したカードから毎月引き落とされます</span>
                    </div>
                </div>
            </div>

            <div className='submit-btn-container'>
                <button className='card-info-btn'>最終確認を行う</button>
            </div>
        </div>
    </>
}

export default React.memo(OrderStep2);
