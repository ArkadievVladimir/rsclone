import React from 'react';
import { IconButton } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { ImageObj } from './AddTweetForm';
import ClearIcon from '@material-ui/icons/Clear';


interface ImageListProps {
    images: string[];
    classes: ReturnType<typeof useHomeStyles>;
    removeImage?: (url: string) => void;
}

export const ImageList: React.FC<ImageListProps> = ({ classes, images, removeImage }) => {
    if (!images.length) {
        return null
    }
    return (
        <div className={classes.imagesList}>
        {images.map((url) => (
            <div className={classes.imagesListItem}>
                {removeImage && (
                <IconButton
                 onClick={(): void => removeImage(url)} 
                 className={classes.imagesListItemRemove}>
                <ClearIcon  style={{fontSize: 18}} />
                </IconButton>
                )}
                <img key={url} src={url} />
            </div>
            
        ))}
    </div>
    )
}