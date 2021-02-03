import React from 'react';
import { useHomeStyles } from '../pages/Home/theme';



export const  Footer = () => {
    const classes = useHomeStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.footer__container}>
                <div className={classes.footer__body}>
                    <div className={classes.footer__author}>Created by   
                        <a className={classes.footer__author__link} href="https://github.com/ArkadievVladimir" target="blank">Arkadiev Vladimir,</a>
                        <a className={classes.footer__author__link} href="https://github.com/Lemunruss" target="blank">Melnikov Igor,</a>
                        <a className={classes.footer__author__link} href="https://github.com/vzabavski" target="blank">Vitaly Zabavski</a>
                    </div>
                    <div className={classes.footer__logo}>
                        <a className={classes.footer__logo__img} href="https://rs.school/js/" target="blank"><img src="https://rs.school/images/rs_school_js.svg" alt=""/></a>
                    </div>
                    <div className={classes.footer__copyright}>© 2021</div>
                </div>
            </div>
		</div>
    )
}