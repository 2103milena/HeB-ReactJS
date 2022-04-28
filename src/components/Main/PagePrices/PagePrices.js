import React, { Component } from 'react';
import HeaderPrice from './HeaderPrice/HeaderPrice';
import Table from './Ttable/Ttable';

import classes from './PagePrices.module.css'


class PagePrices extends Component {
    render() {
        return (
            <div>
                <HeaderPrice />
                <div >
                   <Table/>
                   {/* <div className={classes.PartyPass}><a href="https://my.weezevent.com/havana-en-belgrado-10" >Party pass - 65e</a></div> */}
                </div>
            </div>
        )
    }
}

export default PagePrices;

