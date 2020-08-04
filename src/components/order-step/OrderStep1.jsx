import React from 'react';
import './OrderStep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';

const OrderStep1 = () => {
    const [checked, setChecked] = React.useState(true);

    return <>
        <div className="os-container">
            <div className="os-header">
                <FontAwesomeIcon icon={faChevronLeft} className='os-back-icon' />
                <span className="os-header-title">ユーザー / 受取方法</span>
                <span className='os-header-num'>1/3</span>
            </div>

            <div className='os-content'>
                <div className='os-info'>
                    <div className='os-info-header'>
                        <span className='os-info-header-title'>注文者情報</span>
                    </div>

                    <div className='os-info-content'>
                        <div className='os-info-haft-field'>
                            <span className='os-info-field-txt'>姓名</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-haft-field'>
                            <span className='os-info-field-txt'>名前</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div><div className='os-info-haft-field'>
                            <span className='os-info-field-txt'>姓名 カナ</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-haft-field'>
                            <span className='os-info-field-txt'>名前　カナ</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-full-field'>
                            <span className='os-info-field-txt'>メールアドレス</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-full-field'>
                            <span className='os-info-field-txt'>電話番号</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='os-info-full-field'>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="default" />}
                                label="次回からの注文にもこの情報で入力する"
                                size="small"
                                labelPlacement="end"
                            />
                        </div>
                    </div>
                </div>

                <div className='os-place'>
                    <div className='os-place-header'>
                        <span className='os-place-header-title'>受け取り場所</span>
                    </div>

                    <div className='os-place-content'>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="店舗"
                            size="small"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            checked
                            value="end"
                            control={<Checkbox color="default" />}
                            label="配送"
                            size="small"
                            labelPlacement="end"
                        />
                    </div>
                </div>

                <div className="os-address">
                    <div className="os-address-header">
                        <span className='os-address-header-title'>配送先住所</span>
                    </div>

                    <div className="os-address-content">
                        <div className="os-address-field">
                            <span className='os-address-code-txt'>郵便番号</span>
                            <div className="os-address-code-field">
                                <TextField id="outlined-basic" variant="outlined" className="os-address-code-from" />
                                <div className="os-address-slash"></div>
                                <TextField id="outlined-basic" variant="outlined" className="os-address-code-to" />
                            </div>
                        </div>

                        <div className="os-address-field">
                            <span className='os-address-code-txt'>都道府県</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>

                        <div className="os-address-field">
                            <span className='os-address-code-txt'>市町村</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>

                        <div className="os-address-field">
                            <span className='os-address-code-txt'>字・番地</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>

                        <div className="os-address-field">
                            <span className='os-address-code-txt'>建物名 / 部屋番号</span>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                    </div>
                </div>

                <div className="os-time">
                    <div className="os-time-header">
                        <span className='os-time-header-title'>配送希望時間</span>
                    </div>

                    <div className="os-time-content">
                        <FormControlLabel
                            checked
                            value="end"
                            control={<Checkbox color="default" />}
                            label="時間指定なし"
                            size="small"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="9:00-12:00"
                            size="small"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="12:00-15:00"
                            size="small"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="15:00-18:00"
                            size="small"
                            labelPlacement="end"
                        />
                    </div>
                </div>

                <div className="os-billing-addr">
                    <div className="os-time-header">
                        <span className='os-time-header-title'>請求先住所 </span>
                    </div>

                    <div className="os-billing-addr-content">
                        <FormControlLabel
                            checked
                            value="end"
                            control={<Checkbox color="default" />}
                            label="配送先住所と同じにする"
                            size="small"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="新しく入力する"
                            size="small"
                            labelPlacement="end"
                        />
                    </div>
                </div>
            </div>

            <div className='submit-btn-container'>
                <button className='card-info-btn'>カード情報の入力</button>
            </div>
        </div>
    </>
}

export default React.memo(OrderStep1);
