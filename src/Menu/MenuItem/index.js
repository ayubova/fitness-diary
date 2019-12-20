import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import '../style.scss';

const MenuItem = ({day, breakfast, lunch, dinner, snack, date}) => {
    const text = (
        <div>
            <Typography variant="h5" gutterBottom>{`${day} ${date}`}</Typography>
            <div><Typography variant="button" className="Menu__mealTitle">Завтрак: </Typography>{breakfast}</div>
            <div><Typography variant="button" className="Menu__mealTitle">Перекус: </Typography>{snack}</div>
            <div><Typography variant="button" className="Menu__mealTitle">Обед: </Typography>{lunch}</div>
            <div><Typography variant="button" className="Menu__mealTitle">Ужин: </Typography>{dinner}</div>
        </div>
    );
    return (
        <List key={day} dense disablePadding>
            <ListItem className="Menu__listItem">
                <ListItemText primary={text} />
            </ListItem>
        </List>
    );
};

export default MenuItem;
