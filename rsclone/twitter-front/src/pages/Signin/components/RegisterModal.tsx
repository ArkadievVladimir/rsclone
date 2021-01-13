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
import { fetchSignUp } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';


interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}
export interface RegisterFormProps {
    email: string;
    fullname: string;
    username: string;
    password: string;
    password2: string;
}

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email("Неверно введена почта").required("Введите почту"),
    username: yup.string().required("Введите логин"),
    fullname: yup.string().required("Введите полное имя"),
    password: yup.string().min(6, "Минимальная длина пароля 6 символов").required("Введите пароль"),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароль не совпадает'),
  });


export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }): React.ReactElement => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectUserStatus);
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
    const classes = useStylesSignIn();
    const { control, handleSubmit, errors } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
      });
    const onSubmit = async (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))

    }

    React.useEffect( () => {
        if (loadingStatus === LoadingStatus.SUCCESS){
            openNotificationRef.current('Регистрация успешно завершена', 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Произошла ошибка при регистрации', 'error')
        }
    }, [loadingStatus])

    return (
        <ModalBlock
                     title="Зарегистрироваться"
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
                                className={classes.registerField}
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
                                name="fullname"
                                control={control}
                                defaultValue=""
                                //render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                                className={classes.registerField}
                                autoFocus
                                error={!!errors.fullname}
                                helperText={errors.fullname?.message}
                                id="fullname"
                                label="Имя"
                                type="fullname"
                                variant="filled"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth 
                            />
                            <Controller
                            as={TextField}
                                name="username"
                                control={control}
                                defaultValue=""
                                //render={({ onChange, value }) => <input onChange={onChange} value={value} />}
                                className={classes.registerField}
                                autoFocus
                                error={!!errors.username}
                                helperText={errors.username?.message}
                                id="username"
                                label="Логин"
                                type="usernamel"
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
                                className={classes.registerField}
                                id="password"
                                label="Пароль"
                                type="password"
                                variant="filled"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth 
                            />
                            <Controller
                                as={TextField}
                                control={control}
                                error={!!errors.password2}
                                helperText={errors.password2?.message}
                                defaultValue=""
                                name="password2"
                                className={classes.registerField}
                                id="password2"
                                label="Подтвердите пароль"
                                type="password"
                                variant="filled"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth 
                            />
                             
                                <Button disabled={loadingStatus === LoadingStatus.LOADING} type="submit" variant="contained" color="primary" fullWidth>
                                    Зарегистрироваться
                                </Button>
                            </FormGroup>
                        </FormControl>
                        </form>
                    </ModalBlock>
    )
}

