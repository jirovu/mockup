import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from './components/top-page/TopPage';
import ShopPage from './components/shop-page/ShopPage';


const AppRouter = () => {
    return <>
        <Router>
            <Switch>
                <Route path='/top-page' component={TopPage} />
                <Route path='/shop-page' component={ShopPage} />
            </Switch>
        </Router>
    </>
}

export default React.memo(AppRouter);
