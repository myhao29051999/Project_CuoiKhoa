import * as Type from "../constants/ActionType";

const initialState = {
  userList: [],
  errors: {},
};

const usersReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Type.GET_USER_LIST_SUCCESS: {
      state.userList = payload; //set lại state
      return { ...state };
    }
    case Type.GET_USER_LIST_FAILED: {
      state.errors = payload; //set lại state
      return { ...state };
    }

    default:
      return state;
  }
};

export default usersReducers;
