const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOGIN":
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default loginReducer;
