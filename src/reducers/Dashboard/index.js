import {
  getListDashboard,
  getDetailDashboard,
} from "../../Axios/dashboardAxios";
const initialState = {
  getListDashboardResult: false,
  getListDashboardLoading: false,
  getListDashboardError: false,

  getDetailDashboardResult: false,
  getDetailDashboardLoading: false,
  getDetailDashboardError: false,
};

const Dashboard = (state = initialState, action) => {
  switch (action.type) {
    case getListDashboard:
      return {
        ...state,
        getListDashboardResult: action.payload.data,
        getListDashboardLoading: action.payload.loading,
        getListDashboardError: action.payload.errorMessage,
      };

    case getDetailDashboard:
      return {
        ...state,
        getDetailDashboardResult: action.payload.data,
        getDetailDashboardLoading: action.payload.loading,
        getDetailDashboardError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Dashboard;
