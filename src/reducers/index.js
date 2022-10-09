import { combineReducers } from "redux";
import dashboardReducers from "./Dashboard";
import itemReducers from "./Item";
export default combineReducers({
  dashboardReducers,
  itemReducers,
});
