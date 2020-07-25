import React from 'react';
import './TopageFooter.css';

const TopageFooter = () => {
    return <>
        <div className='footer-container'>
            <span className='footer-title'>Funmodeについて</span>
            <div className='footer-content-container'>
                <div className='footer-content'>
                    <p className='footer-item'>ユーザー向け</p>
                    <div className='footer-line-border'></div>

                    <p className='footer-item'>初めてご利用の方へ</p>
                    <p className='footer-desc-item'>Funmodeとは？</p>
                    <div className='footer-line-border'></div>

                    <p className='footer-item'>利用方法</p>
                    <p className='footer-desc-item'>Funmodeの使い方</p>
                    <div className='footer-line-border'></div>

                    <p className='footer-item'>ヘルプセンター</p>
                    <p className='footer-desc-item'>サポートを得る</p>
                    <div className='footer-line-border'></div>
                </div>

                <div className='footer-content'>
                    <p className='footer-item'>事業者向け</p>
                    <div className='footer-line-border'></div>

                    <p className='footer-item'>Funmodeに店舗を掲載しよう</p>
                    <p className='footer-desc-item'>店舗の掲載</p>
                    <div className='footer-line-border'></div>

                    <p className='footer-item'>店舗モードを始める</p>
                    <p className='footer-desc-item'>登録済みの方はこちらから</p>
                    <div className='footer-line-border'></div>

                    <p className='footer-item'>よくある質問</p>
                    <p className='footer-desc-item'>FAQ</p>
                    <div className='footer-line-border'></div>
                </div>
            </div>
        </div>
    </>
}

export default React.memo(TopageFooter);
