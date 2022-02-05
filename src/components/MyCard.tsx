import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import useStylesCard from '../styles/card.styles';

const MyCard: React.FC = () => {
    const classes = useStylesCard()

    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000..
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" startIcon={<InfoOutlinedIcon />}> Detail </Button>
            </CardActions>
        </Card>
    );
};

export default MyCard;
