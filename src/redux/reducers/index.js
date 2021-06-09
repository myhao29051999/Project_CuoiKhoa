import { combineReducers } from "redux";
import moviesReducers from "./moviesReducer";
import lichChieuHeThong from "./lichChieuHEThongReducer";
import LichChieuCTP from "./LichChieuPCTReducer";
import RapChieuPhim from "./RapChieuReducer";
import usersReducers from "./usersReducers";
import commonReducers from "./commonReducers";
const rootReducer = combineReducers({
  moviesReducers,
  lichChieuHeThong,
  LichChieuCTP,
  RapChieuPhim,
  usersReducers,
  commonReducers,
});
export default rootReducer;
