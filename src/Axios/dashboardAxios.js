import axios from "axios";

export const getListDashboard = "getListDashboard";

export const getDetailDashboard = "getDetailDashboard";
export const AddListDashboard = "AddListDashboard";

export const DeleteListDashboard = "DeleteListDashboard";

export const getListAllDashboard = () => {
  return (dispatch) => {
    dispatch({
      type: "getListDashboard",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "https://todo.api.devcode.gethired.id/activity-groups",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: "getListDashboard",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListDashboard",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const AddDashboard = (data) => {
  return (dispatch) => {
    dispatch({
      type: "AddListDashboard",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "https://todo.api.devcode.gethired.id/activity-groups",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: "AddListDashboard",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "AddListDashboard",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const deleteDashboard = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DeleteListDashboard",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",

      url: "https://todo.api.devcode.gethired.id/activity-groups/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "DeleteListDashboard",
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
          type: "DeleteListDashboard",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailDashboardById = (id) => {
  return (dispatch) => {
    dispatch({
      type: "getDetailDashboard",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: "getDetailDashboard",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getDetailDashboard",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
