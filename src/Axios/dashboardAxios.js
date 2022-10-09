import axios from "axios";

export const getListDashboard = "getListDashboard";

export const getDetailDashboard = "getDetailDashboard";

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
      url: "https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io",
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
