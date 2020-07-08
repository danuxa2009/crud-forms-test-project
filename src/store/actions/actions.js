import { ADD_ITEM_TO_STORE } from "../constans/constants";

export const addItemToStore = (payload) => ({
  type: ADD_ITEM_TO_STORE,
  payload,
});
