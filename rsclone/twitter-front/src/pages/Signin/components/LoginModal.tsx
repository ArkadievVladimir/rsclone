import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useStylesSignIn } from '..';
import { ModalBlock } from '../../../components/ModalBlock';
import { Color } from '@material-ui/lab';
import { fetchSignIn } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';
import { loginModalWords } from '../../../languages';

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let loginModalWordsPreset: Array<string> = loginModalWords.map((item) => {
    return item[index];
});

export interface LoginFormProps {
    email: string;
    password: string;
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email(loginModalWordsPreset[0]).required(loginModalWordsPreset[1]),
    password: yup.string().min(6, loginModalWordsPreset[2]).required(loginModalWordsPreset[3]),
  });

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectUserStatus);
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
    const classes = useStylesSignIn();
    const { control, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
      });
    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchSignIn(data));
    }

    React.useEffect( () => {
        if (loadingStatus === LoadingStatus.SUCCESS){
            openNotificationRef.current(loginModalWordsPreset[4], 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current(loginModalWordsPreset[5], 'error')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingStatus]);

    return (
        <ModalBlock
                     title={loginModalWordsPreset[6]}
                     onClose={onClose}
                     visible={open}
                     classes={classes}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
                            <FormGroup aria-label='position' row>
                            <Controller
                            as={TextField}
                                name='email'
                                control={control}
                                defaultValue=''
                                // render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                                className={classes.loginSideField}
                                autoFocus
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                id='email'
                                label='E-Mail'
                                type='email'
                                variant='filled'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth 
                            />
                            <Controller
                                as={TextField}
                                control={control}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                defaultValue=''
                                name='password'
                                className={classes.loginSideField}
                                id="password"
                                label={loginModalWordsPreset[7]}
                                type="password"
                                variant="filled"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth 
                            />
                                <Button disabled={loadingStatus === LoadingStatus.LOADING} type="submit" variant="contained" color="primary" fullWidth>
                                    {loginModalWordsPreset[8]}
                                </Button>
                            </FormGroup>
                        </FormControl>
                        </form>
                    </ModalBlock>
    )
};
