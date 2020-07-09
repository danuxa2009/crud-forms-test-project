import { ADD_ITEM_TO_STORE, EDIT_ITEM } from "../constans/constants";

export const addItemToStore = (payload) => ({
  type: ADD_ITEM_TO_STORE,
  payload,
});

export const editItem = (payload) => ({
  type: EDIT_ITEM,
  payload,
});
