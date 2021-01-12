import { 
    makeStyles, 
    Typography, 
    Button,
    FormGroup,
    FormControl,
    TextField
    } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { ModalBlock } from '../../components/ModalBlock';
import { LoginModal } from './components/LoginModal';

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
        overflow: 'hidden'
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
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20
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
            <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcons}/>
                            Читайте о том, что Вам интересно</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcons}/>
                            Узнайте о чем говорят в мире.</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <ChatBubbleOutlineOutlinedIcon className={classes.blueSideListInfoIcons}/>
                            Присоединяйтесь к общению</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography  gutterBottom className={classes.loginSideTitle} variant="h4">
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br />
                    <Button onClick={ handleClickOpenSignUp } style={{ marginBottom: 20}} variant="contained" color="primary" fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={ handleClickOpenSignIn } variant="outlined" color="primary" fullWidth>
                        Войти
                    </Button>
                    <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal}/>

                    <ModalBlock
                     title="Создайте учетную запись"
                     onClose={handleCloseModal}
                     visible={visibleModal === 'signUp'}
                     classes={classes}
                     >
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="name"
                                    label="Имя"
                                    type="name"
                                    variant="filled"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth 
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    type="email"
                                    variant="filled"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth 
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    type="password"
                                    variant="filled"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    fullWidth 
                                />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    )
}
