import { ADD_DONATION } from "./actionsType";

const donationReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_DONATION:
      return action.donation;
    default:
      return state;
  }
};

export default donationReducer;
