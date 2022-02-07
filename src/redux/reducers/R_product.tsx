import { PAGE, LIST_PRODUCT, LOADING, DETAIL_PRODUCT } from '../actions/types';
import { IProduct } from '../../interfaces/redux/IReducer';

const initialState: IProduct = {
    page: 1,
    list_product: [],
    detail_product: {},
    loading: {},
}

export default function (state: IProduct = initialState, action: any = {}) {
    switch (action.type) {
        case PAGE:
            return {
                ...state,
                page: action.payload
            }
        case LIST_PRODUCT:
            return {
                ...state,
                list_product: action.payload
            }
        case DETAIL_PRODUCT:
            return {
                ...state,
                detail_product: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    ...action.payload
                }
            }
        default:
            return state
    }
}