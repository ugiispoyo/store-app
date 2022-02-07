import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useCtxProduct } from '../context/product';
import { DialogTitleProps } from '../interfaces/components/IModalProduct';
import { IStateProduct } from '../interfaces/redux/IReducer';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


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

const useStyles = makeStyles({
    button: {
        marginLeft: '15px !important'
    }
});

const ModalProduct: React.FC = () => {
    const detailProduct = useSelector((state: IStateProduct) => state.product.detail_product)
    const loading = useSelector((state: IStateProduct) => state.product.loading)

    const classes = useStyles();

    const {
        modal,
        openModal
    } = useCtxProduct();

    const handleClose = () => {
        openModal(!modal)
    }

    console.log(detailProduct)

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={modal}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Detail Produk
            </BootstrapDialogTitle>
            {
                loading?.detailProduct ?
                    <span>Loading...</span>
                    :
                    <>
                        <DialogContent dividers>
                            {
                                detailProduct?.prdImage01 &&
                                <CardMedia
                                    component="img"
                                    alt={detailProduct?.prdNm}
                                    height="140"
                                    image={detailProduct?.prdImage01}
                                />
                                // <img src={detailProduct?.prdImage01} alt={detailProduct?.prdN} />
                            }
                            <Typography gutterBottom variant="h4">
                                {detailProduct?.prdNm}
                            </Typography>
                            <Typography gutterBottom>
                                <div dangerouslySetInnerHTML={{__html: detailProduct?.htmlDetail}} />
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Typography gutterBottom>
                                Rp. {detailProduct?.selPrc}
                            </Typography>
                            <Button autoFocus onClick={handleClose} startIcon={<ShoppingCartIcon />} className={classes.button}>
                                Tambah Ke Keranjang
                            </Button>
                        </DialogActions>
                    </>
            }
        </BootstrapDialog >
    );
};


export default React.memo(ModalProduct);