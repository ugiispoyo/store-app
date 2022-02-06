import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useCtxProduct } from '../context/product';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

const ModalProduct: React.FC = () => {

    const {
        modal,
        openModal
    } = useCtxProduct();

    const handleClose = () => {
        openModal(!modal)
    }

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={modal}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Detail Produk
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} startIcon={<ShoppingCartIcon />}>
                    Tambah Ke Keranjang
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
};


export default ModalProduct;