import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => {
  let data = shop.collections;
  let collections = {};
  if (data) {
    Object.keys(data).forEach(function (item) {
      collections[item] = data[item];
    });
    return collections;
  } else return collections;
});

export const selectCollectionsArray = createSelector([selectShop], (shop) => {
  let data = shop.collections;
  let collections = [];
  Object.keys(data).forEach((key) => collections.push(data[key]));
  return collections;
});

// must envelop with memoize function
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
