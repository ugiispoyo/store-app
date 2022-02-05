import React from 'react';
import useStyles from '../styles/global.styles';
import ILayout from '../interfaces/components/ILayout';

const Layout = ({ children }: ILayout) => {
    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            <div className={classes.layout}>
                {children}
            </div>
        </div>
    );
};


export default Layout;