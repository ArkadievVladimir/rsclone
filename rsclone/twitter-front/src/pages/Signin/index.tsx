import { 
    makeStyles, 
    Typography, 
    Button,
    } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { signInPageWords } from '../../languages';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
       display: 'flex',
       height: '100vh'
    },
    blueSide: {
        position: 'relative',
        backgroundColor: '#71c9f8',
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '250%',
        height: '250%'
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
            [theme.breakpoints.down('sm')]: {
                padding: '0 12px 0',
                fontSize: 18,
            },
        }
    },
    blueSideListInfoIcons: {
        fontSize: 32,
        marginRight: 15
    },
    blueSideListInfoItem: {
        marginBottom: 40
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            flex: '0 0 100%',
        },
    },
    loginSideTwitterIcon: {
        fontSize: 35
    },
    loginSideWrapper: {
        width: 380,
        '& svg': {
            margin: '10px'
        },
        '& h4': {
            margin: '10px'
        },
        '& p': {
            margin: '10px'
        },
        '& button': {
            width: '90%',
            margin: '10px'
        }
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 26,
        margin: '20px 10px 60px 10px',
        [theme.breakpoints.only('sm')]: {
            fontSize: 20,
            margin: '20px 20px 60px 20px',
        },
    },
    loginSideField: {
        marginBottom: 18
    },
    registerField: {
        marginBottom: theme.spacing(5)
    },
    loginFormControl: {
        marginBottom: theme.spacing(3)
    }
}));

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let signInPageWordsPreset: Array<string> = signInPageWords.map((item) => {
    return item[index];
});

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signOut' | 'signUp'>();
    
    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
            <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.blueSideListInfoIcons}/>
                            {signInPageWordsPreset[0]}</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcons}/>
                            {signInPageWordsPreset[1]}</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant='h6'>
                            <ChatBubbleOutlineOutlinedIcon className={classes.blueSideListInfoIcons}/>
                            {signInPageWordsPreset[2]}</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography  gutterBottom className={classes.loginSideTitle} variant="h4">
                        {signInPageWordsPreset[3]}
                    </Typography>
                    <Typography>
                        <b>{signInPageWordsPreset[4]}</b>
                    </Typography>
                    <br />
                    <Button onClick={ handleClickOpenSignUp } style={{ marginBottom: 20}} variant="contained" color="primary" fullWidth>
                        {signInPageWordsPreset[5]}
                    </Button>
                    <Button onClick={ handleClickOpenSignIn } variant="outlined" color="primary" fullWidth>
                        {signInPageWordsPreset[6]}
                    </Button>
                    <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal}/>
                    <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal}/>
                </div>
            </section>
        </div>
    )
};
