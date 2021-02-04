import { Divider, ListItem, ListItemText, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHomeStyles } from '../pages/Home/theme';
import { selectTagsItems, selectIsTagsLoaded } from '../store/ducks/tags/selectors';
import { Link } from 'react-router-dom';
import { hashTagsWords } from '../languages';

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let hashTagsWordsPreset: Array<string> = hashTagsWords.map((item) => {
    return item[index];
  });

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
            <b>{hashTagsWordsPreset[0]}</b>
        </Paper>
    <List>
       {
           items.map((obj) => {
           <React.Fragment key={obj._id}>
            <Link to={`/home/search?q=${obj.name}`}>
            <ListItem className={classes.rightSideBlockItem}>
            <ListItemText primary={obj.name}
            secondary={
                <Typography component="span" variant="body2" color="textSecondary">
                    {hashTagsWordsPreset[1]}: {obj.count}
                </Typography>
            }
            />
        </ListItem>
        </Link>
        <Divider component="li" />
            </React.Fragment>
        })
       }
    </List>
    </Paper>
    )
}
