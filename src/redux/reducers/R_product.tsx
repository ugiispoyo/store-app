import { PAGE, LIST_PRODUCT } from '../actions/types';
import { IProduct } from '../../interfaces/redux/IReducer';

const initialState: IProduct = {
    page: 1,
    list_product: []
}

export default function(state: IProduct = initialState, action: any = {}){
    switch(action.type){
        case PAGE:
            return{
                ...state,
                page: action.payload
            }
        case LIST_PRODUCT:
            return{
                ...state,
                list_product: action.payload
            }
        default:
            return state
    }
 }