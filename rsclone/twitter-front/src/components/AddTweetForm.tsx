import React from 'react';
import { useState } from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import classNames from 'classnames';
import {
    Avatar,
    Button,
    TextareaAutosize,
    CircularProgress,
    } from '@material-ui/core';  
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet, setAddFormState } from '../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';
import { UploadImages } from './UploadImages';
import { uploadImage } from '../utils/uploadImage';
import { addTweetFormWords } from '../languages';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    rowsMax?: number;
    onClose?: () => void;
}    

export interface ImageObj {
    file: File;
    blobUrl: string;
}

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let addTweetFormWordsPreset: Array<string> = addTweetFormWords.map((item) => {
    return item[index];
  });

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
    classes, 
    rowsMax,
    onClose
}: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const [images, setImages] = React.useState<ImageObj[]>([]);

    const addFormState = useSelector(selectAddFormState);
    const percentOfTextInTweet = Math.round((text.length / 200) * 100);
    const maxTweetSymbols: number = 200;

    const handlerChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget && e.currentTarget.value.length <= maxTweetSymbols) {
            setText(e.currentTarget.value);
        };
    };

    const handlerAddTweetOnClick = async (): Promise<void> => {
        let result = [];
        dispatch(setAddFormState(AddFormState.LOADING))
        for (let i = 0; i < images.length; i++) {
            let file = images[i].file;
            const { url } = await uploadImage(file);
            result.push(url);
        }
        dispatch(fetchAddTweet({text, images: result}));
        setText('');
        setImages([]);
    };

    return (
        <div>
        <div className={classes.addFormBody}>
            <Avatar className={classes.tweetAvatar}
            alt='ava'
            // src='https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
            />
        <TextareaAutosize
            onChange={handlerChangeTextarea}
            rowsMax={rowsMax}
            value={text}
            className={classes.addFormTextArea}
            placeholder={addTweetFormWordsPreset[0]}
        />        
        </div>
        <div className={classes.addFormBottom}>
            <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                <UploadImages images={images} onChangeImages={setImages}/>
            </div>
            <div className={classes.addFormBottomRight}>
                {text && (
                    <>
                    <span>{text.length} /</span>
                    <span>{maxTweetSymbols}</span>
                    <div className={classes.addFormCircleProgress}>
                        <CircularProgress variant='determinate' style={text.length >= maxTweetSymbols ? {color:'rgb(255, 0, 0)'} : {}}
                         size={20} thickness={4} value={text.length >= maxTweetSymbols ? 100 : percentOfTextInTweet} />
                        <CircularProgress variant='determinate' size={20} thickness={4} value={100} 
                        style={{color: 'rgba(0, 0, 0, 0.1'}} />
                    </div>
                    </>
                )}
             
                <Button disabled={!text || text.length > maxTweetSymbols || addFormState === AddFormState.LOADING} color='primary' variant='contained'
                    onClick={() => {
                        handlerAddTweetOnClick() 
                            if(onClose) {
                                onClose()
                            }
                        }} > {addFormState === AddFormState.LOADING ? <CircularProgress size={18} color="inherit" /> : addTweetFormWordsPreset[1] }

                </Button>
            </div>
        </div>
        {addFormState === AddFormState.ERROR && (
            <Alert severity="error">{addTweetFormWordsPreset[2]}</Alert>
        )} 
    </div>
    );
};
