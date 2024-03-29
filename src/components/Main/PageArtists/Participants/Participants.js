import React, { Component } from 'react';
import classes from './Participants.module.css';
import Participant from './Participant/Participant';


class Participants extends Component {

    state = {
        slike: [
            {
                name: 'TEACHERS',
                image: require('../../../../assets/images/yoyo99.jpg'),
                alt: 'jedan',
                link: '/artists/teachers'
            },
            {
                name: 'DJs',
                image: require('../../../../assets/images/dj.jpg'),
                alt: 'dva',
                link: '/artists/DJs'
            },
            {
                name: 'BANDS',
                image: require('../../../../assets/images/bands.JPG'),
                alt: 'tri',
                link: '/artists/bands'
            }
        ]
    }

    render() {

        return (
            <div className={classes.Participants}>
                {this.state.slike.map(el => {
                    return (
                        <Participant
                            key={el.name}
                            name={el.name}
                            image={el.image}
                            alt={el.alt}
                            link={el.link}
                        />
                    )
                })}
            </div>
        )
    }
};


export default Participants;