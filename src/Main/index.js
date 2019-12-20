import React from 'react';
// import Typography from '@material-ui/core/Typography';
import image from '../images/body.jpg';

import './style.scss';

const Main = () => (
    <div className="Main__wrapper">
        <div className="Main__block">
            <div className="Main__photo">
                <img src={image} alt="body" height="100%" />
            </div>
            <div className="Main__phrases" />
        </div>
    </div>
);

export default Main;
