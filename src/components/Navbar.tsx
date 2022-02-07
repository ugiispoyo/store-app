import React from 'react';
import {
    Link,
} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStyles from '../styles/global.styles';
// import INavbar from '../interfaces/components/INavbar';

const CustomBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 5,
        top: 0,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Navbar: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.navbar}>
            <Typography>
                <Link to="/">
                    <HomeIcon /> Home
                </Link>
            </Typography>
            <Typography>
                <Link to="/cart">
                    <CustomBadge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </CustomBadge>
                </Link>
            </Typography>
        </Box>
    );
};


export default React.memo(Navbar);