import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';
import Navbar from '../components/Navbar';

import allActions from '../redux/actions';
import { ProductProvider } from '../context/product';
import ModalProduct from '../components/ModalProduct';
import { IStateProduct } from '../interfaces/redux/IReducer';
import IMyCard from '../interfaces/components/IMyCard';

// import IHome from '../interfaces/pages/IHome';

// export default function Home(props: IHome) {
export default function Home() {
    const dispatch = useDispatch();
    const loading = useSelector((state: IStateProduct) => state.product.loading)
    const listProduct = useSelector((state: IStateProduct) => state.product.list_product)

    useEffect(() => {
        dispatch(
            allActions.product.getProduct(1)
        )
    }, []);
    
    return (
        <Layout>
            <Navbar />
            <ProductProvider>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                {
                    loading?.listProduct ?
                        <span>Loading...</span>
                    :
                    listProduct?.map((val: IMyCard) => {
                        return <Grid key={val?.prdNo} item xs={6}><MyCard {...val} /></Grid>
                    })
                }
                </Grid>
                {/* Modal Product Detail */}
                <ModalProduct />
            </ProductProvider>
        </Layout>
    );
}
