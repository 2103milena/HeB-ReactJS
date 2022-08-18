import React, { Component } from 'react';

import timbalero from '../../../../../assets/images/djTimb22.png';
import djLeo from '../../../../../assets/images/djLeo22.png';
import calvo from '../../../../../assets/images/djCalvo22.png';
import gato from '../../../../../assets/images/gato22.png';
import djs from '../../../../../assets/images/djs22.png';
import classes from '../Teachers/Teachers.module.css';
import Modal from '../../../../UI/Modal/Modal';
import DJ1 from './DJInfo/DJInfo1';
import DJ2 from './DJInfo/DJInfo2';
import DJ3 from './DJInfo/DJInfo3';
import DJ4 from './DJInfo/DJInfo4';
import DJ5 from './DJInfo/DJInfo5';


class DJs extends Component {

    state = {
        purchasing1: false,
        purchasing2: false,
        purchasing3: false,
        purchasing4: false,
        purchasing5: false
    }

    purchaseHandler1 = () => {
        this.setState({ purchasing1: true })
    }

    purchaseCancelHandler1 = () => {
        this.setState({ purchasing1: false })
    }

    purchaseHandler2 = () => {
        this.setState({ purchasing2: true })
    }

    purchaseCancelHandler2 = () => {
        this.setState({ purchasing2: false })
    }
    purchaseHandler3 = () => {
        this.setState({ purchasing3: true })
    }

    purchaseCancelHandler3 = () => {
        this.setState({ purchasing3: false })
    }
    purchaseHandler4 = () => {
        this.setState({ purchasing4: true })
    }

    purchaseCancelHandler4 = () => {
        this.setState({ purchasing4: false })
    }

    purchaseHandler5 = () => {
        this.setState({ purchasing5: true })
    }

    purchaseCancelHandler5 = () => {
        this.setState({ purchasing5: false })
    }

    render() {
        return (
            <div>

                {/* modali */}

                <Modal
                    show={this.state.purchasing1}
                    modalClosed={this.purchaseCancelHandler1}
                >
                    <DJ1 />
                </Modal>
                <Modal
                    show={this.state.purchasing2}
                    modalClosed={this.purchaseCancelHandler2}
                >
                    <DJ2 />
                </Modal>
                <Modal
                    show={this.state.purchasing3}
                    modalClosed={this.purchaseCancelHandler3}
                >
                    <DJ3 />
                </Modal>
                <Modal
                    show={this.state.purchasing4}
                    modalClosed={this.purchaseCancelHandler4}
                >
                    <DJ4 />
                </Modal>
                <Modal
                    show={this.state.purchasing5}
                    modalClosed={this.purchaseCancelHandler5}
                >
                    <DJ5 />
                </Modal>
                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler1}
                        className={classes.Participant} src={timbalero} alt="DJs" />
                </div>

                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler2}
                        className={classes.Participant} src={djLeo} alt="DJs" />
                </div>

                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler3}
                        className={classes.Participant} src={calvo} alt="DJs" />
                </div>
                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler4}
                        className={classes.Participant} src={gato} alt="DJs" />
                </div>
                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler5}
                        className={classes.Participant} src={djs} alt="DJs" />
                </div>
            </div>
        )
    }
}

export default DJs;