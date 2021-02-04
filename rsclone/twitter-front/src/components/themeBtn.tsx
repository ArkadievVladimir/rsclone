import React from 'react';
import { useState } from 'react';
import { 
    Button,
    } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { themeBtnWord } from '../languages';

interface ChangeThemeBtn {
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

let themeBtnWordPreset: Array<string> = themeBtnWord.map((item) => {
    return item[index];
  });

export const ThemeBtn: React.FC<ChangeThemeBtn> = ({
    classes,
}: ChangeThemeBtn): React.ReactElement => {
        const curentBackGround = localStorage.getItem('backGround');
        const [backGround, setBackGround] = useState(curentBackGround);

        const changeThemeHandler = () => {
            if (backGround === '#fafafa') {
                setBackGround('#b3b3c8');
                document.body.style.backgroundColor = '#b3b3c8';
                localStorage.setItem('backGround', '#b3b3c8');
            } else if (backGround === '#b3b3c8') {
                setBackGround('#86eba1');
                document.body.style.backgroundColor = '#86eba1';
                localStorage.setItem('backGround', '#86eba1');
            } else if (backGround === '#86eba1') {
                setBackGround('#96def2');
                document.body.style.backgroundColor = '#96def2';
                localStorage.setItem('backGround', '#96def2');
            } else if (backGround === '#96def2') {
                setBackGround('#dcfadc');
                document.body.style.backgroundColor = '#dcfadc';
                localStorage.setItem('backGround', '#dcfadc');
            } else if (backGround === '#dcfadc') {
                setBackGround('#fafafa');
                document.body.style.backgroundColor = '#fafafa';
                localStorage.setItem('backGround', '#fafafa');
            }
        }

        return (
        <div>
            <Button onClick={changeThemeHandler} className={classes.changeThemeBtn}>{themeBtnWordPreset[0]}</Button>
        </div>
        )
}
