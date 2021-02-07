import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => {
    let sections = directory.sections;
    console.log(directory);
    let sectionsArray = [];
    Object.keys(sections).forEach((key) => sectionsArray.push(sections[key]));
    return sectionsArray;
  }
);
