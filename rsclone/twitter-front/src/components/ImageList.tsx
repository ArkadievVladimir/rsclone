import React from 'react';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

interface ImageListProps {
    images: string[];
    classes: any;
    removeImage?: (url: string) => void;
}

export const ImageList: React.FC<ImageListProps> = ({ classes, images, removeImage }) => {
    if (!images.length) {
        return null;
    }
    return (
        <span className={classes.imagesList}>
        {images.map((url) => (
            <span key={url} className={classes.imagesListItem}>
                {removeImage && (
                <IconButton
                 onClick={(): void => removeImage(url)} 
                 className={classes.imagesListItemRemove}>
                <ClearIcon  style={{fontSize: 15}} />
                </IconButton>
                )}
                <img key={url} src={url} alt=''/>
            </span> 
        ))}
        </span>
    )
};
