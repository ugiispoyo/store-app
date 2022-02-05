import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
// import ICart from '../interfaces/pages/ICart';

// export default function Cart(props: ICart) {
export default function Cart() {
    return (
        <Layout>
            <Navbar />
            <h1>Cart</h1>
        </Layout>
    );
}
