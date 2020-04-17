import { makeTable, calcRowTotals, calcColAvgs } from "../tableGenerator";
import { INIT_TABLE, INC_CELL } from "../actions/tableActions";
import { cloneDeepWith } from "lodash";

const initialState = {
  table: [],
  rowTotals: [],
  colAvgs: [],
};

const findCell = (table, cellId) => {
  for (let row of table) {
    for (let cell of row) {
      if (cell.id === cellId) {
        return cell;
      }
    }
  }

  return null;
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TABLE: {
      const table = makeTable(5, 5);
      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);

      return { ...state, table, rowTotals, colAvgs };
    }

    case INC_CELL: {
      const id = action.payload;
      const targetCell = findCell(state.table, id);
      const newCell = { ...targetCell, amount: targetCell.amount + 1 };

      // TODO create newTable

      return { ...state };
    }

    default:
      return state;
  }
};

export default tableReducer;
