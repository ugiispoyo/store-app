import React, { useState, useContext, createContext } from 'react';
import IProduct from '../../interfaces/context/IProduct';

function createCtx<I>() {
    const ProductContext = createContext<I | undefined>(undefined);
    function useCtxProduct() {
        const c = useContext(ProductContext);
        if (!c) throw new Error("useCtxProduct must be inside a Provider with a value");
        return c;
    }
    return [useCtxProduct, ProductContext.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}

export const [useCtxProduct,  ProductContext] = createCtx<IProduct>(); 
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [modal, openModal] =  useState<boolean>(false);
    
    const provider = {
        modal,
        openModal
    }
    
    return (
        <ProductContext value={provider}>
            {children}
        </ProductContext>
    );
}