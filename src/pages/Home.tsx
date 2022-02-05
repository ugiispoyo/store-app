import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';
import Navbar from '../components/Navbar';

import allActions from '../redux/actions';

// import IHome from '../interfaces/pages/IHome';

// export default function Home(props: IHome) {
export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            allActions.product.getProduct()
        )
    }, []);
    

    return (
        <Layout>
            <Navbar />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                <Grid item xs={6}><MyCard /></Grid>
                <Grid item xs={6}><MyCard /></Grid>
                <Grid item xs={6}><MyCard /></Grid>
            </Grid>
        </Layout>
    );
}
