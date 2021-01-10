import { Divider, Link, ListItem, ListItemText, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHomeStyles } from '../pages/Home/theme';
import { TagsState } from '../store/ducks/tags/contracts/state';
import { selectTagsItems, selectIsTagsLoaded } from '../store/ducks/tags/selectors';


interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({
    classes
}: TagsProps): React.ReactElement | null => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader} variant="outlined">
            <b>Актуальные темы</b>
        </Paper>
    <List>
       {
           items.map((obj) => {
           <React.Fragment key={obj._id}>
            {/* <Link to={`/home/search?q=${obj.name}`}> */}
            <ListItem className={classes.rightSideBlockItem}>
            <ListItemText primary={obj.name}
            secondary={
                <Typography component="span" variant="body2" color="textSecondary">
                    Твитов: {obj.count}
                </Typography>
            }
            />
        </ListItem>
        {/* </Link> */}
        <Divider component="li" />
            </React.Fragment>
        })
       }
    </List>
    </Paper>
    )
}
