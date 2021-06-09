import * as Type from "../constants/ActionType";

export const startLoading = () => {
  return {
    type: Type.START_LOADING,
  };
};
export const stopLoading = () => {
  return {
    type: Type.STOP_LOADING,
  };
};
