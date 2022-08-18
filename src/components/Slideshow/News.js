import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './News.module.css';
// import newsPic from '../../assets/images/postponed.jpg'
import hebIsBackPic from '../../assets/images/10.png';
import earlyPic from '../../assets/images/earlybird2.png';
import offer from '../../assets/images/oferrr.png';
import Button from '../UI/Button/Button';


const Slide = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    let firstSlide, secondSlide;
    // thirdSlide, fourthSlide;

    const [state, setState] = useState(true);
    const [state2, setState2] = useState(true);

    const switchToImageHandler = () => {
        setState(false)
    }
    const switchToImageHandler2 = () => {
        setState2(false)
    }

    const switchToTextHandler = () => {
        setState(true)
    }
    const switchToTextHandler2 = () => {
        setState2(true)
    }

    //prvi slajd

    if (state === true) {

        firstSlide = <div className={classes.ImgSlide}>
            <img className={classes.Pic} src={offer} alt="newss" />
            <div className={classes.DivNews}>
                {/* <div>See the latest and updated news of Havana en Belgrado 10 !</div> */}
                <Button onClick={switchToImageHandler}>More info</Button>
            </div>
        </div>

        // thirdSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={welcomePic} alt="newss" />
        //     <div className={classes.DivNews}>
        //         <div>See the latest and updated news of Havana en Belgrado 10 !</div>
        //         <Button onClick={switchToImageHandler}>Tell me more about this update !</Button>
        //     </div>
        // </div>

        // fourthSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={newsPic} alt="newss" />
        //     <div className={classes.DivNews}>
        //         <div>See the latest and updated news of Havana en Belgrado 10 !</div>
        //         <Button onClick={switchToImageHandler}>Tell me more about this update !</Button>
        //     </div>
        // </div>

    } else if (state === false) {

        firstSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> You have a group for HEB10? <br/><br/>
        Write to us on time and get for your people full pass for a magical event, at a special price! ❤️😊<br/>
        </div><Button className={classes.Btn} onClick={switchToTextHandler}>Back</Button></div>



        //     thirdSlide = <div className={classes.TextSection}> <div className={classes.textCarousel}> Are you ready to start your HEB9?!<br />
        //     We are, and we are waiting for you tonight on our well known WELCOME PARTY 😎<br />
        //     Totaly new location for HEB9, Club half
        //     Everybody is welcome 🎉<br />if you don’t have one of HEB9 passes don’t hesitate to come 😉
        // </div><Button onClick={switchToTextHandler}>Back to image</Button></div>

        //     fourthSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     Why do we use it?It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     Why do we use it?It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        //             </div><Button onClick={switchToTextHandler}>Back to image</Button></div>
    }

    if (state2 === true) {
        secondSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={hebIsBackPic} alt="newss" />
            <div className={classes.DivNews}>
                {/* <div>See the latest and updated news of Havana en Belgrado 10 !</div> */}
                <Button onClick={switchToImageHandler2}>More info</Button>
            </div>
        </div>
    } else if (state2 === false) {
        secondSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> The first moment we heard them we fell in love with their music.
            It was 2007. <br />
            The first time we met them, we felt in love with their energy.
            It was 2010. <br />
            The first time we hosted them we fell in love with their humility.
            It was 2015. <br />
            They are a big part of our journey and we are happy to be their friends. This will be the third time they are playing at HeB and every time was incredible and very special for us. <br />
            <br /><br />With small 2 years delay, again at HeB - ALEXANDER ABREU Y HAVANA D’PRIMERA!!!
        </div ><Button onClick={switchToTextHandler2}>Back</Button></div>
    }


    return (
        <div className={classes.NewsContainer}>
            <div className={classes.Naslov}>NEWS</div>
            <hr className={classes.Hr}></hr>

            <Carousel className={classes.Carousel} responsive={responsive}>

                <div className={classes.Slide}>
                    {secondSlide}
                </div>
                <div className={classes.Slide}>
                    {firstSlide}
                </div>
                {/* <div className={classes.Slide}>
                    {thirdSlide}
                </div>
                <div className={classes.Slide}>
                    {fourthSlide}
                </div> */}
            </Carousel>
        </div>
    )
}


export default Slide;