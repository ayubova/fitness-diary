import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import WorkoutItem from './WorkoutItem';
import workoutPlan from '../constants/workoutPlan';

import './style.scss';


const WorkoutPlan = () => (
    <div className="WorkoutPlan__wrapper">
        {workoutPlan.map(({day, title, exercises}) => (
            <Grid container className="WorkoutPlan__column">
                <Typography variant="h5" gutterBottom>{day}</Typography>
                <div>
                    <Typography variant="button" gutterBottom>{title}</Typography>
                </div>
                {exercises.map((item) => (<Grid key={item.name} item><WorkoutItem {...item} /> </Grid>))}
            </Grid>
        ))}
    </div>
);

export default WorkoutPlan;
