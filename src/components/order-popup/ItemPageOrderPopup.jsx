import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import realApple from '../../assets/img/real-apple.svg';
import ProductBtn from '../common/product-btn/ProductBtn';
import './ItemPageOrderPopup.css';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    dialog: {
        marginTop: '70px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 140
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ItemPageOrderPopup = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState('s');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setSize((event.target).value);
    };

    return <>
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={classes.dialog}>
                <div className='it-p-popup-con'>
                    <div className='it-p-popup-header'>
                        <img src={realApple} alt="Real Apple" className='it-p-popup-header-img' />
                        <div className='it-p-popup-header-content'>
                            <span className='it-p-popup-header-content-name'>Real - Apple</span>
                            <span className='it-p-popup-header-content-txt'>Casie</span>
                        </div>
                        <FontAwesomeIcon icon={faTimes} className='close-icon' onClick={handleClose} />
                    </div>

                    <div className='it-p-popup-content'>
                        <div className='us-period'>
                            <span className='us-title'>利用期間</span>
                            <div className='us-period-content'>
                                <div className='us-period-item'>
                                    <span className='us-period-item-txt'>利用開始日</span>
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

                                <div className='us-period-item'>
                                    <span className='us-period-item-txt'>利用タイプ</span>
                                    <div className='us-period-item-btn-group'>
                                        <ProductBtn name='月額' isActive={false} />
                                        <ProductBtn name='月額' isActive={true} />
                                    </div>
                                </div>

                                <Divider />

                                <div className='us-period-item'>
                                    <span className='us-period-item-txt'>利用期間</span>
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

                                <div className='us-period-item'>
                                    <span className='us-period-item-txt'>利用終了日</span>
                                    <span className='us-period-item-txt'>2019/12/02</span>
                                </div>

                                <Divider />

                                <div className='us-period-item'>
                                    <span className='us-period-item-txt'>利用金額</span>
                                    <span className='us-period-item-txt'>11000円</span>
                                </div>
                            </div>
                        </div>

                        <div className='size'>
                            <div className='size-header'>
                                <span className='size-title'>サイズ</span>
                                <button className='size-header-btn'>必須入力</button>
                            </div>
                            <div className='size-content'>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="gender" name="gender1" value={size} onChange={handleChange}>
                                        <FormControlLabel value="s" control={<Radio color="primary" />} label="S" />
                                        <FormControlLabel value="m" control={<Radio color="primary" />} label="M" />
                                        <FormControlLabel value="l" control={<Radio color="primary" />} label="L" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>

                        <div className='ad-ops'>
                            <div className='ad-ops-header'>
                                <span className='ad-ops-title'>追加オプション</span>
                                <button className='ad-ops-header-btn'>未選択 OK</button>
                            </div>
                            <div className='ad-ops-content'>
                                <button className='ad-ops-content-btn'>説明書</button>
                                <button className='ad-ops-content-btn'>充電器</button>
                            </div>
                        </div>

                        <div className='charged-ops'>
                            <div className='charged-ops-header'>
                                <span className='charged-ops-title'>追加オプション</span>
                                <button className='charged-ops-header-btn'>未選択 OK</button>
                            </div>
                            <div className='charged-ops-content'>
                                <button className='charged-ops-content-btn'>メモリーカード 1 GB  (1000円)</button>
                                <button className='charged-ops-content-btn'>メモリーカード 10GB  (2000円)</button>
                            </div>
                        </div>
                    </div>

                    <div className='submit-btn-container'>
                        <button className='add-to-cart-btn'>カートに入れる</button>
                    </div>
                </div>
            </Dialog>
        </div>
    </>
}

export default React.memo(ItemPageOrderPopup);
