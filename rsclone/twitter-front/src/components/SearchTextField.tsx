import { TextField, Theme, withStyles } from '@material-ui/core';

export const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#e6ecf0',
            borderRadius: 30,
            padding: 0,
            paddinfLeft: 15,
            '& .Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            },
        '&:hover': {
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1
            }
        },
        '& .MuiOutlinedInput-input': {
            padding: '10px 15px 15px 5px'
        }
        }
    }
}))(TextField)
