import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartItem from './components/cart/Cart';
import ItemPage from './components/item-page/ItemPage';
import ItemPageOrderPopup from './components/order-popup/ItemPageOrderPopup';
import OrderStep1 from './components/order-step/OrderStep1';
import OrderStep2 from './components/order-step/OrderStep2';
import OrderStep3 from './components/order-step/OrderStep3';
import ShopPage from './components/shop-page/ShopPage';
import TopPage from './components/top-page/TopPage';
import UpdatePopup from './components/update-popup/UpdatePopup';


const AppRouter = () => {
    return <>
        <Router>
            <Switch>
                <Route path='/top-page' component={TopPage} />
                <Route path='/shop-page' component={ShopPage} />
                <Route path='/item-page' component={ItemPage} />
                <Route path='/item-page-order-popup' component={ItemPageOrderPopup} />
                <Route path='/cart' component={CartItem} />
                <Route path='/update-popup' component={UpdatePopup} />
                <Route path='/order-step1' component={OrderStep1} />
                <Route path='/order-step2' component={OrderStep2} />
                <Route path='/order-step3' component={OrderStep3} />
            </Switch>
        </Router>
    </>
}

export default React.memo(AppRouter);
