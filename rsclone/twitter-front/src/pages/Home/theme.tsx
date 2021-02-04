import { makeStyles, Theme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export const useHomeStyles = makeStyles((theme: Theme) => ({
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    wrapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 36,
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
        margin: '10px 0'
    },
    searchIcon: {
        opacity: '0.25',
    },
    sideMenuList: {
        maxWidth: 230,
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        'z-index': 100,
        [theme.breakpoints.down('xs')]: {
            width: '5vw',
            margin: '5%',
            '& svg': {
                width: '20px'
            },
            '& li': {
                width: '20px',
                '& div': {
                    padding: '11px'
                },
                '& button': {
                    width: '20px',
                },
            }
        },
        
        
    },
    sideMenuListItem: {
        '& a': {
            textDecoration: 'none',
            color: theme.palette.grey[900],
        },
        '& div': {
            position: 'relative',
            left: -10,
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 25px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',

                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            }
        }    
    },
    sideMenuListItemLabel: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 700
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    changeThemeBtn: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: '#3f51b5',
        '&:hover': {
            backgroundColor: '#303f9f'
        }
    },
    changeLanguageBtn: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: '#3f51b5',
        '&:hover': {
            backgroundColor: '#303f9f'
        }
    },
    optionalBtnsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '20px',
        justifyContent: 'space-between',
        '& div': {
            margin: '5px',
        }
    },
    sideMenuTweetBtn: {
        padding: theme.spacing(2),
        maxWidth: 230,
        marginTop: theme.spacing(3),
        borderRadius: 30,  
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },    
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        'min-height': 'calc(100vh - 75px)',
        borderTop: 0,
        borderBottom: 0,
        [theme.breakpoints.down('xs')]: {
           'min-width': '240px',
           width:'calc(80vw - 5vw)'
        },
        [theme.breakpoints.only('sm')]: {
            width: '75vw',
            marginLeft: '30px'
         },
        
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none'
    },
    tweetsCentered: {
        textAlign: 'center',
        marginTop: 40
    },
    tweetsHeader: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',

        '& h6': {
            fontWeight: 800
        }
    },
    tweetsHeaderButton: {
        marginRight: 30
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center'
    },
    fullTweet: {
        padding: 25
    },
    fullTweetText: {
        fontSize: 28,
        marginTop: 15,
        wordBreak: 'break-word',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    tweetText: {
        wordBreak: 'break-word',
    },
    tweetFooter: {
        display: 'flex',
        maxWidth: 450,
        justifyContent: 'space-between',
        position: 'relative',
        left: -10
    },
    tweetMessagesIcon: {
        color: grey[500],
        '&:hover': {
            color: 'rgb(29,161,242)',
        },
    },
    retweetIcon: {
        color: grey[500],
        '&:hover': {
            color: 'rgb(23, 191, 99)',
        },
    },
    likeIcon: {
        color: grey[500],
        fontSize: '14px',
        '&:hover': {
            color: 'rgb(224, 36, 94)',
        },
    },
    likeIconAction: {
        color: 'rgb(224, 36, 94)',
    },
    settingIcon: {
        color: grey[500],
        '&:hover': {
            color: 'rgb(29,161,242)',
        },
    },
    tweetsUserName: {
        color: grey[500],
    },
    userNameLink: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    tweet: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20,
      '&:hover': {
        backgroundColor: 'rgb(245, 248, 250)',
        cursor: 'pointer'
      } 
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: 15,
        'z-index': 0
    }, 
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tweeetContent: {
        flex: 1,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
            padding: 0
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
            padding: 0
        },
    },
    rightSideBlock: {
        backgroundColor: '#f5f8fa',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '15px 20px',
        '& b': {
            fontSize: 20,
            fontWeight: 700,
        }
    },
    rightSideBlockItem: {
        '& .MuiListItemAvatar-root': {
            minWidth: 40
        },
        '& .MuiListItemText-root': {
            margin: 0
        },
        '& .MuiTypography-body1': {
            fontWeight: 700
        },
        '&:hover': {
            backgroundColor: '#edf3f6'
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        },
        cursor: 'pointer'
    },
    addForm: {
        padding: 20
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '80vw',
         },
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 65
        ,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
            padding: 0, 
            margin: 0
         },
    },
    addFormTextArea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '60%',
            fontSize: 14,
         },
    },
    addFormTextAreaEditor: {
        width: '32rem',
        'min-height': '10vmin',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize: 14,
        },
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#e6ecf0'
    },
    addFormCircleProgress: {
        '& .MuiCircularProgress-root': {
            position: 'absolute'
        },
        width: 20,
        height: 20,
        position: 'relative',      
        margin: '0 10px'       
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '5px'
        },
    },
    sideProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 44,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.1)',
        boxSizing: 'content-box',
        padding: '10px 15px',
        width: 260,
        borderRadius: 50,
        cursor: 'pointer',
        'z-index': 1000,
        '&:hover': {
            backgroundColor: 'rgba(230, 250, 255, 1)',
        },
        
    },
    sideProfileInfo: {
        flex: 1,
        marginLeft: 10,
        '& b': {
            fontSize: 16,
        }

    },
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        height: '40%'
    },
    imagesListItem: {
        width: '100%',
        height: '100%',
        flexShrink: 1,
        marginBottom: 10,
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            'object-fit': 'cover',
            borderRadius: 6,
        },
        '& svg path': {
            fill: 'white'
        },
    },
    profileMenu: {
        bottom: '110px !important',
        left: '17.5% !important',
        top: 'auto !important',
        width: '250px !important',
        boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        },
    },
    imagesListItemRemove: {
        position: 'absolute',
        top: -8,
        right: -6,
        padding: '0 !important',
        backgroundColor: '#ff4d4d !important',
        borderRadius: '50%'
    },
    footer: {
        backgroundColor: '#e6ecf0',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        justifyContent: 'center'
    },
    footer__container: {
        width: '90%',
        padding: '0 10px',
        [theme.breakpoints.down('xs')]: {
            padding: 0
        },
    },
    footer__body: {
		padding: '10px',
		display: 'flex',
		justifyContent: 'space-around',
        alignItems: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
	},
    footer__logo: {
        margin: '15px 222px 0 0',
        [theme.breakpoints.down('xs')]: {
            margin: '15px 0 0 15px'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '15px 0 0 15px'
        },
    },
    footer__logo__img: {
        display: 'block',
        margin: '0px 0px 5px 0px',
        '& img': {
            width: '80px'
        }
    },
    footer__author: {
        paddingBottom: '10px',
		fontSize: '10px',
		color: 'black'
    },
    footer__author__link: {
        color: 'inherit',
        padding: '0 0 0 5px',
        textDecoration: 'underline',
    },
    footer__copyright: {
        color: 'black',
        paddingBottom: '10px',
    },

    
   
}));

export const uploadImagesListStyles = makeStyles((theme: Theme) => ({
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20, 
        flexWrap: 'wrap',
    },
    imagesListItem: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginBottom: 10,
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            'object-fit': 'cover',
            borderRadius: 6,
        },
        '& svg path': {
            fill: 'white'
        },
    },
    imagesListItemRemove: {
        position: 'absolute',
        top: -8,
        right: -6,
        padding: '0 !important',
        backgroundColor: '#ff4d4d !important',
        borderRadius: '50%'
    }
}))

export const tweetImageListStyles = makeStyles((theme: Theme) => ({
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
        height: '40%'
    },
    imagesListItem: {
        width: '100%',
        height: '100%',
        flexShrink: 1,
        marginRight: 10,
        marginBottom: 10,
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            'object-fit': 'cover',
            borderRadius: 6,
        },
        '& svg path': {
            fill: 'white'
        },
    },
}));
