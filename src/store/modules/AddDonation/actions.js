import { ADD_DONATION } from "./actionsType";

export const addDonation = (donation) => ({
  type: ADD_DONATION,
  donation,
});
