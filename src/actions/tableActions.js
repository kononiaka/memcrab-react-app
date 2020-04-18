const INIT_TABLE = "INIT_TABLE";
const INC_CELL = "INC_CELL";
const SHOW_CLOSEST = "SHOW_CLOSEST";
const CLEAN_CLOSEST = "CLEAN_CLOSEST";
const DELETE_ROW = "DELETE_ROW";
const ADD_ROW = "ADD_ROW";

const initTable = () => ({ type: INIT_TABLE });
const incCell = id => ({ type: INC_CELL, payload: id });
const showClosest = id => ({ type: SHOW_CLOSEST, payload: id });
const cleanClosest = () => ({ type: CLEAN_CLOSEST });
const deleteRow = rowIndex => ({ type: DELETE_ROW, payload: rowIndex });
const addRow = () => ({ type: ADD_ROW });
export {
  INIT_TABLE,
  INC_CELL,
  SHOW_CLOSEST,
  CLEAN_CLOSEST,
  DELETE_ROW,
  ADD_ROW,
  initTable,
  incCell,
  showClosest,
  cleanClosest,
  deleteRow,
  addRow,
};
