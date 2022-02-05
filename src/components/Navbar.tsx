import React from 'react';
import {
    Link,
} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStyles from '../styles/global.styles';
// import INavbar from '../interfaces/components/INavbar';

const Navbar: React.FC = () => {
    const classes = useStyles();

    return (
        <Box 
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} 
            className={classes.navbar}>
            <Typography sx={{ minWidth: 100 }}>
                <Link to="/">
                    <HomeIcon /> Home
                </Link>
            </Typography>
            <Typography sx={{ minWidth: 100 }}>
                <Link to="/cart">
                    <span className='count-cart'>1</span>
                    <ShoppingCartIcon />
                </Link>
            </Typography>
        </Box>
    );
};


export default Navbar;