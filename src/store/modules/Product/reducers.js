const productItemReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_ITEM":
      return action.data;

      default: 
      return state;
  }
};

export default productItemReducer;
