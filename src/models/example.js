export default {
  namespace: 'example',

  state: {},

  subscriptions: {},

  effects: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
