import React from 'react';
import { useState } from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import classNames from 'classnames';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { 
    IconButton,
    Avatar,
    Button,
    TextareaAutosize,
    CircularProgress
    } from '@material-ui/core';   

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    rowsMax?: number;
}    

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, rowsMax}: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const percentOfTextInTweet: number = Math.round((text.length / 200) * 100);
    const maxTweetSymbols: number = 200;

    const handlerChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget && e.currentTarget.value.length <= maxTweetSymbols) {
            setText(e.currentTarget.value);
        };
    };

    const handlerAddTweetOnClick = (): void => {
        setText('');
    };
    
    return (
        <div className={classes.addForm}>
        <div className={classes.addFormBody}>
            <Avatar className={classes.tweetAvatar}
            alt='ava'
            src="https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            />
        <TextareaAutosize
            onChange={handlerChangeTextarea}
            rowsMax={rowsMax}
            value={text}
            className={classes.addFormTextArea}
            placeholder="Оставить твит"
        />        
        </div>
        <div className={classes.addFormBottom}>
            <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                <IconButton color="primary">
                    <ImageOutlinedIcon style={{ fontSize: 24 }} />
                </IconButton>
                <IconButton color="primary">
                    <EmojiIcon style={{ fontSize: 24 }} />
                </IconButton>
            </div>
            <div className={classes.addFormBottomRight}>
                {text && (
                    <>
                    <span>{text.length} /</span>
                    <span>{maxTweetSymbols}</span>
                    <div className={classes.addFormCircleProgress}>
                        <CircularProgress variant="static" style={text.length >= maxTweetSymbols ? {color:'rgb(255, 0, 0)'} : {}}
                         size={20} thickness={4} value={text.length >= maxTweetSymbols ? 100 : percentOfTextInTweet} />
                        <CircularProgress variant="static" size={20} thickness={4} value={100} 
                        style={{color: 'rgba(0, 0, 0, 0.1'}} />
                    </div>
                    </>
                )}
             
                <Button disabled={text.length > maxTweetSymbols} color="primary" variant="contained"
                    onClick={handlerAddTweetOnClick} >
                    Твитнуть
                </Button>
            </div>
        </div>
    </div>
    )
}
