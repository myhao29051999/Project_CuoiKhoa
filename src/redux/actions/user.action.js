import axios from "axios";
import * as Type from "../constants/ActionType";
import { startLoading, stopLoading } from "./common.action";
import * as urlQLND from "../../API/QuanLiNguoiDung";
// action call api
export const getUserList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    //call api
    axios({
      method: "GET",
      url: urlQLND.LayDanhSachNguoiDung,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        //gửi lên store
        dispatch(getUserListSuccess(res.data));
        console.log("data" + res.data);
      })
      .catch((err) => {
        dispatch(stopLoading());
        //gửi lên store
        dispatch(getUserListFailed(err));
      });
  };
};
const getUserListSuccess = (userList) => {
  return {
    type: Type.GET_USER_LIST_SUCCESS,
    payload: userList,
  };
};
const getUserListFailed = (err) => {
  return {
    type: Type.GET_USER_LIST_FAILED,
    payload: err,
  };
};
