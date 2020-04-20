const INIT_TABLE = "INIT_TABLE";
const INC_CELL = "INC_CELL";
const SHOW_CLOSEST = "SHOW_CLOSEST";
const CLEAN_CLOSEST = "CLEAN_CLOSEST";
const DELETE_ROW = "DELETE_ROW";
const ADD_ROW = "ADD_ROW";
const SHOW_PERCENTAGE = "SHOW_PERCENTAGE";
const CLEAN_PERCENTAGE = "CLEAN_PERCENTAGE";

const initTable = tableData => {
  const tableDefaults = {
    rowsCount: 5,
    colsCount: 5,
    closestCount: 5,
  };

  return { type: INIT_TABLE, payload: tableData || tableDefaults };
};
const incCell = id => ({ type: INC_CELL, payload: id });
const showClosest = id => ({ type: SHOW_CLOSEST, payload: id });
const cleanClosest = () => ({ type: CLEAN_CLOSEST });
const deleteRow = rowIndex => ({ type: DELETE_ROW, payload: rowIndex });
const addRow = () => ({ type: ADD_ROW });
const showPercentage = rowIndex => ({
  type: SHOW_PERCENTAGE,
  payload: rowIndex,
});
const cleanPercentage = () => ({ type: CLEAN_PERCENTAGE });

export {
  INIT_TABLE,
  INC_CELL,
  SHOW_CLOSEST,
  CLEAN_CLOSEST,
  DELETE_ROW,
  ADD_ROW,
  SHOW_PERCENTAGE,
  CLEAN_PERCENTAGE,
  initTable,
  incCell,
  showClosest,
  cleanClosest,
  deleteRow,
  addRow,
  showPercentage,
  cleanPercentage,
};
