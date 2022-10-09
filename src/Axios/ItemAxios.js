import axios from "axios";

export const getListItem = "getListItem";

export const getListAllItem = () => {
  return (dispatch) => {
    dispatch({
      type: "getListItem",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "https://todo.api.devcode.gethired.id/todo-items",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: "getListItem",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListItem",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


