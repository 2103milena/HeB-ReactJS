import React, { Component } from 'react';
import classes from './Ttable.module.css';
import Button from '../../../UI/Button/Button';

class Table extends Component {

    state = {
        details: [
            { title: 'FULL PASS until May 31st', firstPrice: '120 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: 'Concert' },
            { title: 'FULL PASS until July 31st', firstPrice: '130 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: 'Concert' },
            { title: 'FULL PASS until August 31st', firstPrice: '140 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: 'Concert' },
            { title: 'FULL PARTY PASS', firstPrice: '65 e', secondPrice: '/ ', thirdPrice: 'Parties (4 days)', concerts: 'Concert'  }
            // { title: 'PARTY PASS', firstPrice: '65 e' }
        ]
    }
    render() {
        return (
            <div>
                {this.state.details.map(el => {
                    return (
                        <table key={el.title} className={classes.Table}>
                            <tbody>
                                <tr>
                                    <th style={{color:'#ec1d25', height:'20px'}}>
                                        {el.title}
                                    </th>

                                </tr>
                                <tr>
                                    <td className={classes.Drugi}>
                                        {el.firstPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {el.secondPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.Drugi}>
                                        {el.thirdPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {el.concerts}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.Drugi}>
                                    <a href={"https://my.weezevent.com/havana-en-belgrado-10"} className={classes.BookNow}>BUY PASS</a>
                                    </td>
                                </tr>

                            </tbody>
                            
                        </table>
                    )
                })}

            </div>
        )
    }
}

export default Table;