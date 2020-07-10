import {
  ADD_ITEM_TO_STORE,
  EDIT_ITEM,
  GET_ID,
  DELETE_ITEM,
} from "../constans/constants";

const generateId = () => {
  return Date.now();
};

export const addItemToStore = (payload) => ({
  type: ADD_ITEM_TO_STORE,
  payload: { ...payload, id: generateId() },
});

export const editItem = (payload) => ({
  type: EDIT_ITEM,
  payload,
});

export const getId = (payload) => ({
  type: GET_ID,
  payload,
});

export const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
