import React, { Component } from 'react';

import hdp from '../../../../../assets/images/hdp22.png';
import oki from '../../../../../assets/images/oki22.png';
import classes from '../Teachers/Teachers.module.css';
import Modal from '../../../../UI/Modal/Modal';
import Band1 from './BandsInfo/BandInfo1';
// import Band2 from './BandsInfo/BandInfo2';


class Bands extends Component {

    state = {
        purchasing1: false,
        purchasing2: false
    }

    purchaseHandler1 = () => {
        this.setState({ purchasing1: true })
    }

    purchaseCancelHandler1 = () => {
        this.setState({ purchasing1: false })
    }

    // purchaseHandler2 = () => {
    //     this.setState({ purchasing2: true })
    // }

    // purchaseCancelHandler2 = () => {
    //     this.setState({ purchasing2: false })
    // }

    render() {
        return (
            <div >
                {/* <Modal
                    show={this.state.purchasing1}
                    modalClosed={this.purchaseCancelHandler1}>
                    <Band1 />
                </Modal> */}
                {/* <Modal show={this.state.purchasing2} modalClosed={this.purchaseCancelHandler2}>
                    <Band2/>
                </Modal> */}
                <div className={classes.hdpContainer}>
                    <div className={classes.Divv} >
                        <img
                            // onClick={this.purchaseHandler1}
                            // className={classes.Participant}
                            className={classes.hdpslika}
                            src={hdp} alt="DJs" />
                    </div>
                    <div className={classes.hdpText}>
                        <h3>Havana de Primera</h3>
                        <p>The first moment we heard them we fell in love with their music. It was 2007.<br />
                            The first time we met them, we felt in love with their energy. It was 2010.<br />
                            The first time we hosted them we fell in love with their humility. It was 2015.<br />
                            They are a big part of our journey and we are happy to be their friends. <br />This will be the third time they are playing at HeB and every time was incredible and very special for us.<br />
                            <br /><br />

                            With small 2 years delay, again at HeB - ALEXANDER ABREU Y HAVANA D’PRIMERA!!!</p>
                    </div>
                </div>
                <div className={classes.hdpContainer}>
                    <div className={classes.Divv} >
                        <img
                            // onClick={this.purchaseHandler1}
                            // className={classes.Participant}
                            className={classes.hdpslika}
                            src={oki} alt="DJs" />
                    </div>
                    <div className={classes.hdpText}>
                        <h3>Martha Galarraga & Okilakua</h3>
                        <p>They bring special EMOTION and ENERGY to classes! <br/>Their knowledge, talent and passion made us feel like HEB can't happen without them!!<br/>
                            Ladies and gentleman, be prepared to shiver, because to HEB10 are coming Martha Galarraga <br/>and great percussionist from band Okilakua!! ❤️❤️❤️</p>
                    </div>
                </div>
                {/* <div className={classes.Divv}>
                    <img onClick={this.purchaseHandler2} className={classes.Participant} src={yusimy} alt="DJs" />
                </div> */}
            </div>
        )
    }
}

export default Bands;