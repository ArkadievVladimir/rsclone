import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent, 
    IconButton
    } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStylesSignIn } from '../pages/Signin';

interface ModalBlockProps {
    title: string;
    onClose: () => void; 
    visible?: boolean;
    classes?: ReturnType<typeof useStylesSignIn>;
    children: React.ReactNode;   
}

export const ModalBlock: React.FC<ModalBlockProps> = ({ 
    title,
    onClose,
    visible = false,
    children }: ModalBlockProps): React.ReactElement | null => {
    if(!visible) {
        return null;
    };
    const preventClose = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
    }
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog">
            <DialogTitle id="form-dialog-title">
                <IconButton
                    onClick={onClose}
                    color="secondary"
                    aria-label="close">
                        <CloseIcon 
                            style={{ fontSize: 26 }}
                            color="secondary"
                        />
                </IconButton>
                { title }
            </DialogTitle>
            <DialogContent onClick={preventClose}>
                { children }
            </DialogContent>
        </Dialog> 
    );
};
