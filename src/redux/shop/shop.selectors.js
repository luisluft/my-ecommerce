import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => {
  let data = shop.collections;
  let collections = {};
  Object.keys(data).forEach(function (item) {
    collections[item] = data[item];
  });
  return collections;
});

// must envelop with memoize function
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
