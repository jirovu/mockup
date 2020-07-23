import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from './components/top-page/TopPage';


const AppRouter = () => {
    return <>
        <Router>
            <Switch>
                <Route path='/top-page' component={TopPage} />
            </Switch>
        </Router>
    </>
}

export default React.memo(AppRouter);
