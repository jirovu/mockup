import React from 'react';
import Header from './components/common/header/Header';
import TabNavigation from './components/common/tab-navigation/TabNavigation';

const MasterLayout = (props) => {
    return <>
        <Header />
        { props.children }
        <TabNavigation />
    </>
}

export default React.memo(MasterLayout);
