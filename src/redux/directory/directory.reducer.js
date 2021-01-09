import SHOP_DATA from "../shop.data";

const INITIAL_STATE = {
  sections: SHOP_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
