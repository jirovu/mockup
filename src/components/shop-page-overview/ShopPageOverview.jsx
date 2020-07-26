import Badge from '@material-ui/core/Badge';
import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import { services, shopPageOverviewImgs, storeItems } from '../../dump';
import LineBorder from '../common/line-border/LineBorder';
import './ShopPageOverview.css';
import busIcon from '../../assets/img/bus-icon.svg';
import mapImg from '../../assets/img/map.svg';
import Product from '../common/product/Product';

const ServiceOverview = ({ title, services }) => {
    return <>
        <div className='s-o-container'>
            <div className='s-o-title-con'>
                <Badge overlap="circle" badgeContent="?" className='s-o-title'>{title}</Badge>
            </div>
            <div className='s-o-content'>
                {
                    services.map(s => (
                        <div key={s.id} className='s-o-item'>
                            <img src={s.img} alt="Service icon" className='s-o-icon' />
                            <span className='s-o-txt'>{s.txt}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

const ShopPageOverview = (props) => {
    return <>
        <div className='sp-overview-container'>
            <div className='sp-overview-desc'>
                <ReadMoreAndLess
                    className='read-more-content'
                    charLimit={40}
                    readMoreText="さらに表示"
                    readLessText="少なく表示"
                >
                    Casieは本物の絵画をお手頃な価格で利用できるサービスです。簡単な要望を伝えるだけでプロがあなたに合う絵画を選んでお届けしてくれます。
                </ReadMoreAndLess>
            </div>
            <LineBorder />
            <div className='sp-overview-lst-img'>
                {
                    shopPageOverviewImgs.map(img => (
                        <img src={img.img} key={img.id} alt='Shop page img' className='sp-overview-img' />
                    ))
                }
            </div>

            <div className='sp-overview'>
                <span span className='sp-title'>サービス概要</span>
                <div className='sp-content'>
                    {
                        services.map(s => (
                            <React.Fragment key={s.id}>
                                <ServiceOverview title={s.title} services={s.services} />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>

            <div className='sp-overview'>
                <span span className='sp-title'>3つのグッドポイント</span>
                <div className='sp-content'>
                    <div className='sp-point'>
                        <span className='sp-point-numb'>1</span>
                        <span className='sp-point-txt'>購入前のお試しレンタルで相性確認</span>
                    </div>
                    <div className='sp-point'>
                        <span className='sp-point-numb'>2</span>
                        <span className='sp-point-txt'>利用者のレビュ4.1と高評価</span>
                    </div>
                    <div className='sp-point'>
                        <span className='sp-point-numb'>3</span>
                        <span className='sp-point-txt'>累計利用者数 10万人</span>
                    </div>
                </div>
            </div>

            <div className='sp-overview'>
                <span span className='sp-title'>アクセス</span>
                <div className='sp-content'>
                    <div className='sp-content-title'>
                        <div className='sp-icon-con'>
                            <img src={busIcon} alt="Bus img" className='sp-icon' />
                        </div>
                        <span className='sp-content-title-txt'>最寄駅  :  千葉駅</span>
                    </div>
                    <div className='sp-access'>
                        <ReadMoreAndLess
                            className='read-more-content'
                            charLimit={40}
                            readMoreText="さらに表示"
                            readLessText="少なく表示"
                        >
                            JRの千葉駅の南口から徒歩5分です。ビックカメラの
                            向かい側の道路沿いに店舗はあります。
                        </ReadMoreAndLess>
                    </div>
                </div>
                <img src={mapImg} alt="Map Img" className='map-img' />
            </div>

            <div className='sp-overview'>
                <span span className='sp-title'>基本情報</span>
                <div className='sp-content'>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>店舗による配送 (未対応)</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>宅配事業者による配送</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>ルール</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>連絡先</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>キャンセル</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>受取り・返却方法</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>関連動画</span>
                    </div>
                </div>
            </div>

            <div className='sp-overview'>
                <span span className='sp-title'>店舗のアイテム</span>
                <div className='sp-product-content'>
                    {
                        storeItems.map(item => (
                            <React.Fragment key={item.id}>
                                <Product name={item.name} img={item.img} price={item.price} btnLst={item.btnLst} />
                            </React.Fragment>
                        ))
                    }
                    <a href="#" className='more-link'>もっと見る &#62;</a>
                </div>
            </div>

            <div className='sp-overview'>
                <span span className='sp-title'>規約 / 表記</span>
                <div className='sp-content'>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>店舗の利用規約</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>特定商取引法に基づく表記</span>
                    </div>
                    <div className='sp-content-item'>
                        <span className='sp-plus'>+</span>
                        <span className='sp-txt'>古物営業法に基づく表記</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default React.memo(ShopPageOverview);
