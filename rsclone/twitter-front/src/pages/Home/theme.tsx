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
        height: '100vh'
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
        margin: 0
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
    sideMenuTweetBtn: {
        padding: theme.spacing(2),
        maxWidth: 230,
        marginTop: theme.spacing(3),
        borderRadius: 30
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
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
        marginTop: 15
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
        "&:hover": {
            color: 'rgb(29,161,242)',
        },
    },
    retweetIcon: {
        color: grey[500],
        "&:hover": {
            color: 'rgb(23, 191, 99)',
        },
    },
    likeIcon: {
        color: grey[500],
        fontSize: '14px',
        "&:hover": {
            color: 'rgb(224, 36, 94)',
        },
    },
    likeIconAction: {
        color: 'rgb(224, 36, 94)',
    },
    settingIcon: {
        color: grey[500],
        "&:hover": {
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
        marginRight: 15
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
        top: 0
    },
    rightSideBlock: {
        backgroundColor: '#f5f8fa',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        }
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
        width: '100%'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 65
    },
    addFormTextArea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none'
    },
    addFormTextAreaEditor: {
        width: '32rem',
        'min-height': '10vmin',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none'
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
        '&:hover': {
            backgroundColor: 'rgba(230, 250, 255, 1)',
        }
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
        width: '100vw',
        //height: '10vh',
        backgroundColor: '#3f51b5',
    },
    footer__container: {
        width: '90%',
        padding: '0 10px',
    },
    footer__body: {
		padding: '10px',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
	},
    footer__logo: {
        margin: '15px 170px 0 0'
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
		fontSize: '14px',
		color: '#fff'
    },
    footer__author__link: {
        color: 'inherit',
        padding: '0 0 0 5px',
        textDecoration: 'underline',
    },
    footer__copyright: {
        color: 'white',
        paddingBottom: '10px',
    }
   
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
}))