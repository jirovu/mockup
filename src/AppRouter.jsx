import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from './components/top-page/TopPage';
import ShopPage from './components/shop-page/ShopPage';
import ItemPage from './components/item-page/ItemPage';
import ItemPageOrderPopup from './components/order-popup/ItemPageOrderPopup';
import CartItem from './components/cart/Cart';
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
            </Switch>
        </Router>
    </>
}

export default React.memo(AppRouter);
