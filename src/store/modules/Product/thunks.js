import { productItem } from "./actions";

export const productItemThunk = (data) => {
    return (dispatch, getState) => {
        let productItemDescription = data;
        dispatch(productItem(productItemDescription))
    };
};