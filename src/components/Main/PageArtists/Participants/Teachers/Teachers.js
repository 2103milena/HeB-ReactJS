import React, { Component } from 'react';
import yeni from '../../../../../assets/images/yenii2022.png';
import diana from '../../../../../assets/images/diana22.png';
import fredi from '../../../../../assets/images/fredi22.png';
import yoandy from '../../../../../assets/images/yoandy22.png';
import yoannis from '../../../../../assets/images/yoannis22.png';
import yuliet from '../../../../../assets/images/yuliet22.png';
import osmani from '../../../../../assets/images/osmani22.png';
import andy from '../../../../../assets/images/andy22.png';
import jenny from '../../../../../assets/images/jenny22.png';
import yoyo from '../../../../../assets/images/yoyo22.png';
import logo from '../../../../../assets/images/logo22tr.png';
import classes from './Teachers.module.css';
import Modal from '../../../../UI/Modal/Modal';
import Teacher1 from './TeacherInfo/TeacherInfo1';
import Teacher2 from './TeacherInfo/TeacherInfo2';
import Teacher3 from './TeacherInfo/TeacherInfo3';
import Teacher4 from './TeacherInfo/TeacherInfo4';
import Teacher5 from './TeacherInfo/TeacherInfo5';
import Teacher6 from './TeacherInfo/TeacherInfo6';
import Teacher7 from './TeacherInfo/TeacherInfo7';
import Teacher8 from './TeacherInfo/TeacherInfo8';


class Teachers extends Component {

    state = {
        purchasing1: false,
        purchasing2: false,
        purchasing3: false,
        purchasing4: false,
        purchasing5: false,
        purchasing6: false,
        purchasing7: false,
        purchasing8: false
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
    purchaseHandler6 = () => {
        this.setState({ purchasing6: true })
    }

    purchaseCancelHandler6 = () => {
        this.setState({ purchasing6: false })
    }
    purchaseHandler7 = () => {
        this.setState({ purchasing7: true })
    }

    purchaseCancelHandler7 = () => {
        this.setState({ purchasing7: false })
    }
    purchaseHandler8 = () => {
        this.setState({ purchasing8: true })
    }

    purchaseCancelHandler8 = () => {
        this.setState({ purchasing8: false })
    }

    render() {
        return (
            <div >
                
                <Modal
                    show={this.state.purchasing1}
                    modalClosed={this.purchaseCancelHandler1}
                >
                    <Teacher1/>
                </Modal>
                <Modal
                    show={this.state.purchasing2}
                    modalClosed={this.purchaseCancelHandler2}
                >
                    <Teacher2/>
                </Modal>
                <Modal
                    show={this.state.purchasing3}
                    modalClosed={this.purchaseCancelHandler3}
                >
                    <Teacher3/>
                </Modal>
                <Modal
                    show={this.state.purchasing4}
                    modalClosed={this.purchaseCancelHandler4}
                >
                    <Teacher4/>
                </Modal>
                <Modal
                    show={this.state.purchasing5}
                    modalClosed={this.purchaseCancelHandler5}
                >
                    <Teacher5/>
                </Modal>
                <Modal
                    show={this.state.purchasing6}
                    modalClosed={this.purchaseCancelHandler6}
                >
                    <Teacher6/>
                </Modal>
                <Modal
                    show={this.state.purchasing7}
                    modalClosed={this.purchaseCancelHandler7}
                >
                    <Teacher7/>
                </Modal>
                <Modal
                    show={this.state.purchasing8}
                    modalClosed={this.purchaseCancelHandler8}
                >
                    <Teacher8/>
                </Modal>
                <div className={classes.Divv} >
                    <img 
                    onClick={this.purchaseHandler1}
                    className={classes.Participant} src={yeni} alt="teachers" />
                </div >
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler2}
                    className={classes.Participant} src={diana} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler3}
                    className={classes.Participant} src={fredi} alt="teachers" /> 
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler4}
                    className={classes.Participant} src={osmani} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler5}
                    className={classes.Participant} src={yuliet} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler6}
                    className={classes.Participant} src={andy} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler7}
                    className={classes.Participant} src={jenny} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler8}
                    className={classes.Participant} src={yoyo} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    // onClick={this.purchaseHandler2}
                    className={classes.Participant} src={logo} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    // onClick={this.purchaseHandler2}
                    className={classes.Participant} src={logo} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    // onClick={this.purchaseHandler2}
                    className={classes.Participant} src={logo} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    // onClick={this.purchaseHandler2}
                    className={classes.Participant} src={logo} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    // onClick={this.purchaseHandler2}
                    className={classes.Participant} src={logo} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img 
                    // onClick={this.purchaseHandler2}
                    className={classes.Participant} src={logo} alt="teachers" />
                </div>
                {/* <div className={classes.Divv}>
                    <img className={classes.Participant} src={yoyo} alt="teachers" />
                  
                </div >
                <div className={classes.Divv} >
                    <img className={classes.Participant} src={yuliet} alt="teachers" />
                
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Participant} src={yusimy} alt="teachers" />
               
                </div> */}
            </div>
        )
    }
}

export default Teachers;