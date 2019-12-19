import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import '../style.scss';

const WorkoutItem = ({name, repeat, weight, comment}) => (
    <List key={name} dense disablePadding>
        <ListItem divider className="WorkoutPlan__listItem" />
        <ListItemText primary={`${name} ${repeat} ${weight}`} secondary={comment} />
    </List>
);

export default WorkoutItem;
