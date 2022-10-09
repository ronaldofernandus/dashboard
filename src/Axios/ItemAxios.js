import axios from "axios";

export const getListItem = "getListItem";
export const AddListItem = "AddListItem";
export const DeleteListItem = "DeleteListItem";

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
export const AddItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: "AddListItem",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "https://todo.api.devcode.gethired.id/todo-items",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: "AddListItem",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "AddListItem",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DeleteListItem",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",

      url: "http://todo.api.devcode.gethired.id/todo-items/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "DeleteListItem",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal", error);
        dispatch({
          type: "DeleteListItem",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
