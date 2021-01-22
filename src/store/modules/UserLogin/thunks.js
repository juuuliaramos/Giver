import { dataLogin } from "./actions";
import jwt_decode from "jwt-decode";

export const dataLoginThunk = (data) => {
  return (dispatch, getState) => {
    let token = data.accessToken;
    let decoded = jwt_decode(token);
    console.log(decoded);
    let dataLog = {
      token: token,
      data: decoded,
    };
    dispatch(dataLogin(dataLog));
  };
};
