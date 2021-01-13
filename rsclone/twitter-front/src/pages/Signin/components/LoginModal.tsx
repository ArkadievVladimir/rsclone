import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useStylesSignIn } from '..';
import { ModalBlock } from '../../../components/ModalBlock';
import { AuthApi } from '../../../services/api/authApi';
import { Notification } from '../../../components/Notification'
import { Color } from '@material-ui/lab';
import { fetchSignIn } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';


interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}
export interface LoginFormProps {
    email: string;
    password: string;
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email("Неверно введена почта").required("Введите почту"),
    password: yup.string().min(6, "Минимальная длина пароля 6 символов").required("Введите пароль"),
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
        dispatch(fetchSignIn(data))

    }

    React.useEffect( () => {
        if (loadingStatus === LoadingStatus.SUCCESS){
            openNotificationRef.current('Авторизация успешно завершена', 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error')
        }
    }, [loadingStatus])

      console.log(errors)
    return (
        <Notification>
            {
                callback => {
                    openNotificationRef.current = callback
                    return (
                        <ModalBlock
                     title="Войти в аккаунт"
                     onClose={onClose}
                     visible={open}
                     classes={classes}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                            <Controller
                            as={TextField}
                                name="email"
                                control={control}
                                defaultValue=""
                                //render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                                className={classes.loginSideField}
                                autoFocus
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                id="email"
                                label="E-Mail"
                                type="email"
                                variant="filled"
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
                                defaultValue=""
                                name="password"
                                className={classes.loginSideField}
                                id="password"
                                label="Пароль"
                                type="password"
                                variant="filled"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth 
                            />
                             
                                <Button disabled={loadingStatus === LoadingStatus.LOADING} type="submit" variant="contained" color="primary" fullWidth>
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                        </form>
                    </ModalBlock>
                    )
                }
            }
        </Notification>
    )
}