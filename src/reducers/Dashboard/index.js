import {
  getListDashboard,
  getDetailDashboard,
  AddListDashboard,
  DeleteListDashboard,
} from "../../Axios/dashboardAxios";
const initialState = {
  getListDashboardResult: false,
  getListDashboardLoading: false,
  getListDashboardError: false,

  getDetailDashboardResult: false,
  getDetailDashboardLoading: false,
  getDetailDashboardError: false,

  AddListDashboardResult: false,
  AddListDashboardLoading: false,
  AddListDashboardError: false,

  DeleteListDashboardResult: false,
  DeleteListDashboardLoading: false,
  DeleteListDashboardError: false,
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

    case AddListDashboard:
      return {
        ...state,
        AddListDashboardResult: action.payload.data,
        AddListDashboardLoading: action.payload.loading,
        AddListDashboardError: action.payload.errorMessage,
      };

    case DeleteListDashboard:
      return {
        ...state,
        DeleteListDashboardResult: action.payload.data,
        DeleteListDashboardLoading: action.payload.loading,
        DeleteListDashboardError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Dashboard;
