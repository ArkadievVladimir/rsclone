import React from 'react';
import { useState } from 'react';
import { 
    Button,
    IconButton,
    Hidden,
    Typography,
    Link,
    } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';


interface SidebarProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Sidebar: React.FC<SidebarProps> = ({classes}): React.ReactElement => {
    const [tweet, setTweet] = useState<boolean>(false);

    const handlerAddTweet = () => {
        setTweet(false);
    };

    const handlerOnClickOpenSetTweet = () => {
        setTweet(true);
    };
    
    return (
    <ul className={classes.sideMenuList}> 
        <li className={classes.sideMenuListItem}>
            {/* <Link to="/home"> */}
            <IconButton className={classes.logo} aria-label="" color="primary">
                <TwitterIcon  className={classes.logoIcon}/>
            </IconButton>
            {/* </Link> */}
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <SearchIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Поиск
                    </Typography>
                </Hidden>
            </div>        
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <NotificationsNoneIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Уведомления
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <MailOutlineIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Сообщения
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <BookmarkBorderIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Закладки
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <ListAltIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Список
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <PermIdentityOutlinedIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Профиль
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <Button onClick={handlerOnClickOpenSetTweet} className={classes.sideMenuTweetBtn} variant="contained" color="primary" fullWidth>
                <Hidden smDown>Твитнуть</Hidden> 
                <Hidden mdUp>
                    <CreateIcon />
                </Hidden>
            </Button>
            <ModalBlock title='' visible={tweet} onClose={handlerAddTweet}>
                <div style={{width: 500}}>
                    <AddTweetForm classes={classes} rowsMax={5} />
                </div>
            </ModalBlock>
        </li>
    </ul>         
    )
}