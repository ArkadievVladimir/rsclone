import Snackbar from '@material-ui/core/Snackbar'
import Alert, { Color } from '@material-ui/lab/Alert'
import React from 'react'

interface NotificationProps {
    children: (callback: (text: string, type: Color) => void) => React.ReactElement;
}

export const Notification: React.FC<NotificationProps> = ({ children }): React.ReactElement => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [notificationObj, setNotificationObj] = React.useState<{ text:string; type: Color }>()

    const openNotification = (text: string, type: Color) => {
        setNotificationObj({ text,  type });
        setOpen(true);
    }
    return (
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={notificationObj?.type}>
                    {notificationObj?.text}
                </Alert>
            </Snackbar>
        </>
    )
}

/* <ModalBlock
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
                             
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                        </form>
                    </ModalBlock> */