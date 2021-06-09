import * as Type from "../constants/ActionType";

const initialState = {
  loading: false, //tự qđinh false: k loading
};

const commonReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Type.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case Type.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default commonReducers;
