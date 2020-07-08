import {
  MODAL_IS_OPEN,
  MODAL_IS_CLOSED,
  ADD_ITEM_TO_STORE,
} from "../constans/constants";

const initialState = {
  showModal: false,
  items: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_IS_OPEN: {
      return {
        ...state,
        showModal: true,
      };
    }
    case MODAL_IS_CLOSED: {
      return {
        ...state,
        showModal: false,
      };
    }
    case ADD_ITEM_TO_STORE: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
