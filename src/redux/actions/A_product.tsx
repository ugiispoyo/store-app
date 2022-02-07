import axios from "axios";
import { MyEndpoint, MyHeader } from "../../helpers/global";
import { DETAIL_PRODUCT, LIST_PRODUCT, LOADING } from "./types";

const getProduct = (page: number) => async (dispatch: any) => {
    dispatch({
        type: LOADING,
        payload: { listProduct: true }
    })
    try {
        const { data } = await axios.get(`${MyEndpoint}getproduct/${page}`, { headers: MyHeader })
        dispatch({
            type: LIST_PRODUCT,
            payload: data?.Products?.product
        })
        dispatch({
            type: LOADING,
            payload: { listProduct: false }
        })
    } catch (e: any) {
        console.error(e)
    }
}

const getProductDetail = (idproduct: string) => async (dispatch: any) => {
    dispatch({
        type: LOADING,
        payload: { detailProduct: true }
    })
    try {
        const {data}= await axios.get(`${MyEndpoint}getproduct/detail/${idproduct}`, { headers: MyHeader })
        dispatch({
            type: DETAIL_PRODUCT,
            payload: data?.Product
        })
        dispatch({
            type: LOADING,
            payload: { detailProduct: false }
        })
    } catch (e: any) {
        console.error(e)
    }
}

export default {
    getProduct,
    getProductDetail
};