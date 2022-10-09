import { getListItem } from "../../Axios/ItemAxios";
const initialState = {
  getListItemResult: false,
  getListItemLoading: false,
  getListItemError: false,
};

const Item = (state = initialState, action) => {
  switch (action.type) {
    case getListItem:
      return {
        ...state,
        getListItemResult: action.payload.data,
        getListItemLoading: action.payload.loading,
        getListItemError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Item;
