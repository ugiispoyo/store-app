import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import useStylesCard from '../styles/card.styles';

import { useCtxProduct } from '../context/product';
import IMyCard from '../interfaces/components/IMyCard';
import allActions from '../redux/actions';

const MyCard: React.FC<IMyCard> = ({prdNm, prdNo}) => {
    const classes = useStylesCard();
    const dispatch = useDispatch();

    const {
        openModal
    } = useCtxProduct();
    return (
        <Card className={classes.card}>
            {/* <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {prdNm}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet Lorem ipsum dolor ismet
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
                    startIcon={<InfoOutlinedIcon />} 
                    onClick={() => { 
                        openModal(true);
                        dispatch(allActions.product.getProductDetail(prdNo));
                    }}> 
                        Detail 
                </Button>
            </CardActions>
        </Card>
    );
};

export default React.memo(MyCard);
