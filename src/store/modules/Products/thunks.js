import { dataProducts } from "./actions";

export const dataProductsThunk = (data) => {
  return (dispatch, getState) => {
    let products = data;
    console.log("produtos", products); // remover depois
    dispatch(dataProducts(products));
  };
};
