import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";
import Loading from './components/Loading';

const Home = lazy(() =>
    import('./pages/Home')
);
const Cart = lazy(() =>
    import('./pages/Cart')
);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    } />
                <Route
                    path="/cart"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Cart />
                        </Suspense>
                    } />
            </Routes>

        </BrowserRouter>
    );
}

export default App;