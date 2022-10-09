import {
  getListItem,
  AddListItem,
  DeleteListItem,
} from "../../Axios/ItemAxios";
const initialState = {
  getListItemResult: false,
  getListItemLoading: false,
  getListItemError: false,

  AddListItemResult: false,
  AddListItemLoading: false,
  AddListItemError: false,

  DeleteListItemResult: false,
  DeleteListItemLoading: false,
  DeleteListItemError: false,
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

    case AddListItem:
      return {
        ...state,
        AddListItemResult: action.payload.data,
        AddListItemLoading: action.payload.loading,
        AddListItemError: action.payload.errorMessage,
      };
    case DeleteListItem:
      return {
        ...state,
        DeleteListItemResult: action.payload.data,
        DeleteListItemLoading: action.payload.loading,
        DeleteListItemError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Item;
