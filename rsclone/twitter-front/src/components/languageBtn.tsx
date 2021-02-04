import React from 'react';
import { useState } from 'react';
import { 
    Button
    } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { languageBtnWord } from '../languages';

interface ChangeLanguageBtn {
    classes: ReturnType<typeof useHomeStyles>;
}

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let languageBtnWordPreset: Array<string> = languageBtnWord.map((item) => {
    return item[index];
  });

export const LanguageBtn: React.FC<ChangeLanguageBtn> = ({
    classes,
}: ChangeLanguageBtn): React.ReactElement => {

    const curentLanguagePreset = localStorage.getItem('lang');
    const [languagePreset, setLanguagePreset] = useState(curentLanguagePreset);

    const changeLanguageHandler = () => {
        if (languagePreset === 'ru') {
            setLanguagePreset('eng');
            localStorage.setItem('lang', 'eng');
            window.location.reload();
        } else if (languagePreset === 'eng') {
            setLanguagePreset('esp');
            localStorage.setItem('lang', 'esp');
            window.location.reload();
        } else if (languagePreset === 'esp') {
            setLanguagePreset('ru');
            localStorage.setItem('lang', 'ru');
            window.location.reload();
        } 
    }

        return (
        <div >
                <Button onClick={changeLanguageHandler} className={classes.changeLanguageBtn}>{languageBtnWordPreset[0]}</Button>
        </div>
        )
}
