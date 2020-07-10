import {
  ADD_ITEM_TO_STORE,
  EDIT_ITEM,
  DELETE_ITEM,
} from "../constans/constants";

const initialState = {
  items: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_STORE: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                name: action.payload.name,
                title: action.payload.title,
                image: action.payload.image,
                description: action.payload.description,
              }
            : item
        ),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
