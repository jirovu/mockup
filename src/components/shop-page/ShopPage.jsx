import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import React from 'react';
import backIcon from '../../assets/img/back-icon.svg';
import casie from '../../assets/img/casie.svg';
import shopPageBanner from '../../assets/img/shop-page-banner.svg';
import TobNavigation from '../common/tab-navigation/TabNavigation';
import LineBorder from '../common/line-border/LineBorder';
import './ShopPage.css';
import ShopPageOverview from '../shop-page-overview/ShopPageOverview';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    nonPadding: {
        padding: 0
    },
}));

const ShopPage = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <>
        <div className='shop-page-container'>
            <div className='shop-page-banner'>
                <img src={shopPageBanner} alt="Banner img" className='shop-page-img' />
                <img src={backIcon} alt="Back icon" className='shop-page-back-icon' onClick={null} />
                <img src={casie} alt="Casie button" className='shop-page-casie' onClick={null} />
            </div>
            <div className='shop-page-content'>
                <TabContext value={value}>
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="店舗" value="1" />
                        <Tab label="アイテムリスト" value="2" />
                    </Tabs>
                    <LineBorder />
                    <TabPanel className={classes.nonPadding} value="1">
                        Item One
                    </TabPanel>
                    <TabPanel className={classes.nonPadding} value="2">
                        <ShopPageOverview />
                    </TabPanel>
                </TabContext>
            </div>
        </div>
        <TobNavigation />
    </>
}

export default React.memo(ShopPage);
