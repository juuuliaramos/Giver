const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_LIST":
      return action.data;

    default:
      return state;
  }
};

export default productsReducer;
