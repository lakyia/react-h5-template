// import { queryUsers, queryUser } from "../../services/user";

export default {
  state: {
    user: {
      test: "test123",
    },
  },

  effects: {
    *queryUser({ payload }, { call, put }) {
      // const { data } = yield call(queryUser, payload);
      // yield put({ type: "queryUserSuccess", payload: data });
    },
  },

  reducers: {
    queryUserSuccess(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
  },

  test(state) {
    console.log("test");
    return state;
  },
};
