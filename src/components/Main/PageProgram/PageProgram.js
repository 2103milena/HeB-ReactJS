import React, { Component } from 'react';
import HeaderPr from './HeaderPr/HeaderPr';
import classes1 from '../Main.module.css';
import classes from './PageProgram.module.css'


class PageProgram extends Component {
    render() {
        return (
            <div>
                <HeaderPr />
                <div className={classes.Venues}>
                    <h2>HEB VENUES</h2>
                    <div>Workshops: <br /><a href='https://www.google.com/maps/place/%D0%94%D0%9A%D0%A6+%D0%BC%D0%B0%D1%98%D0%B4%D0%B0%D0%BD/@44.7940676,20.3066477,12z/data=!4m9!1m2!2m1!1sdkc+majdan+adresa!3m5!1s0x475a701b8cf43e71:0x641078f140286736!8m2!3d44.7940732!4d20.4467218!15sChFka2MgbWFqZGFuIGFkcmVzYZIBD2N1bHR1cmFsX2NlbnRlcg?hl=sr' target='_blank'>DKC Majdan - Kozjačka 3-5</a></div><br /><br />
                    <div>Friday and Saturday party and Concert:<br /><a href='https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%B5%D0%BA%D1%81%D0%BF%D0%BE%D1%86%D0%B5%D0%BD%D1%82%D0%B0%D1%80/@44.8103225,20.4120154,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6f896b81f25f:0x3603e729b88aa3df!8m2!3d44.8103154!4d20.4141981?hl=sr' target='_blank'>BelExpo Centar - Španskih boraca 74A</a></div>
                </div>
                <div className={classes.List}>
                    <div>
                        <h3 className={classes1.DecadeWord}>THURSDAY</h3>
                        <ul className={classes.ThursdaySection}>
                            <li>9 PM - registration + Warm up party (location tbc)</li>
                            <li className={classes1.Bela}>.</li>
                            <li className={classes1.Bela}>.</li>
                            
                          
                        </ul>
                    </div>
                    <div>
                        <h3 className={classes1.EnX}>FRIDAY</h3>
                        <ul>
                            <li>1:30 PM Walking tour (meeting point tbc)</li>
                            <li>4 PM - 7 PM timba matine party (location tbc)</li>
                            <li>9 PM - Registration + Welcome party (<a href='https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%B5%D0%BA%D1%81%D0%BF%D0%BE%D1%86%D0%B5%D0%BD%D1%82%D0%B0%D1%80/@44.8103225,20.4120154,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6f896b81f25f:0x3603e729b88aa3df!8m2!3d44.8103154!4d20.4141981?hl=sr' target='_blank'>BelExpo Centar</a>)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={classes1.DecadeWord}>SATURDAY</h3>
                        <ul>
                            <li>11 AM - 6:30 PM - Workshops (<a href='https://www.google.com/maps/place/%D0%94%D0%9A%D0%A6+%D0%BC%D0%B0%D1%98%D0%B4%D0%B0%D0%BD/@44.7940676,20.3066477,12z/data=!4m9!1m2!2m1!1sdkc+majdan+adresa!3m5!1s0x475a701b8cf43e71:0x641078f140286736!8m2!3d44.7940732!4d20.4467218!15sChFka2MgbWFqZGFuIGFkcmVzYZIBD2N1bHR1cmFsX2NlbnRlcg?hl=sr' target='_blank'>DKC Majdan </a>)</li>
                            <li>9 PM - Gala party (<a href='https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%B5%D0%BA%D1%81%D0%BF%D0%BE%D1%86%D0%B5%D0%BD%D1%82%D0%B0%D1%80/@44.8103225,20.4120154,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6f896b81f25f:0x3603e729b88aa3df!8m2!3d44.8103154!4d20.4141981?hl=sr' target='_blank'>BelExpo Centar</a>)</li>
                            <li>10:30 PM - concert, Havana de Primera (<a href='https://www.google.com/maps/place/%D0%91%D0%B5%D0%BB%D0%B5%D0%BA%D1%81%D0%BF%D0%BE%D1%86%D0%B5%D0%BD%D1%82%D0%B0%D1%80/@44.8103225,20.4120154,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6f896b81f25f:0x3603e729b88aa3df!8m2!3d44.8103154!4d20.4141981?hl=sr' target='_blank'>BelExpo Centar</a>)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={classes1.EnX}>SUNDAY</h3>
                        <ul>
                            <li>11 AM - 6:30 PM - Workshops (<a href='https://www.google.com/maps/place/%D0%94%D0%9A%D0%A6+%D0%BC%D0%B0%D1%98%D0%B4%D0%B0%D0%BD/@44.7940676,20.3066477,12z/data=!4m9!1m2!2m1!1sdkc+majdan+adresa!3m5!1s0x475a701b8cf43e71:0x641078f140286736!8m2!3d44.7940732!4d20.4467218!15sChFka2MgbWFqZGFuIGFkcmVzYZIBD2N1bHR1cmFsX2NlbnRlcg?hl=sr' target='_blank'>DKC Majdan</a>)</li>
                            <li>9 PM - Rumba concert with Martha Galarraga and Okilakua + Farewell party (location tbc)</li>
                            <li className={classes1.Bela}>.</li>

                           
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageProgram;

