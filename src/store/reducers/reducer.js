import { MODAL_IS_OPEN, MODAL_IS_CLOSED } from "../constans/constants";

const initialState = {
  showModal: false,
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
    default: {
      return state;
    }
  }
};
