import axios from "axios";
import { MyEndpoint, MyHeader } from "../../helpers/global";
// import { IProduct } from "../../interfaces/redux/IActions";

// export const getProduct = ({page}: IProduct) => async (dispatch: any) => {
export const getProduct = () => async (dispatch: any) => {
    try {
        const {data} = await axios.get(`${MyEndpoint}getproduct/1`, {headers: MyHeader})
        console.log(data)
    } catch(e: any) {
        console.error(e)
    }
}

export default {
    getProduct
};