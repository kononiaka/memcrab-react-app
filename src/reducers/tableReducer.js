import { makeTable, calcRowTotals, calcColAvgs } from "../tableGenerator";
import { INIT_TABLE } from "../actions/tableActions";

const initialState = {
  table: [],
  rowTotals: [],
  colAvgs: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TABLE: {
      const table = makeTable(5, 5);
      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);

      return { ...state, table, rowTotals, colAvgs };
    }
    default:
      return state;
  }
};

export default tableReducer;
