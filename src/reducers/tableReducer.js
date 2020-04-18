import {
  makeTable,
  calcRowTotals,
  calcColAvgs,
  increaseTable,
} from "../tableGenerator";
import {
  INIT_TABLE,
  INC_CELL,
  SHOW_CLOSEST,
  CLEAN_CLOSEST,
  DELETE_ROW,
  ADD_ROW,
} from "../actions/tableActions";
import { cloneDeepWith, has } from "lodash";

const initialState = {
  rowsCount: 6,
  colCount: 5,
  closestCount: 5,
  closestIds: [],
  table: [],
  rowTotals: [],
  colAvgs: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TABLE: {
      const table = makeTable(state.rowsCount, state.colCount);
      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);

      return { ...state, table, rowTotals, colAvgs };
    }

    case INC_CELL: {
      const id = action.payload;

      const table = cloneDeepWith(state.table, value => {
        const isCell = has(value, "id") && has(value, "amount");
        if (isCell && id === value.id) {
          const incrementedCell = { ...value, amount: value.amount + 1 };
          return incrementedCell;
        }
      });

      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);

      return { ...state, table, rowTotals, colAvgs };
    }

    case SHOW_CLOSEST: {
      const targetId = action.payload;

      const allCellsSorted = state.table
        .flat(Infinity)
        .sort((cell1, cell2) => cell1.amount - cell2.amount);

      const targetCellIndex = allCellsSorted.findIndex(
        ({ id }) => id === targetId
      );
      const startIndex = targetCellIndex + 1;
      const endIndex = startIndex + state.closestCount;
      const closestIds = allCellsSorted // TODO fix getting closest cells
        .slice(startIndex, endIndex)
        .map(({ id }) => id);

      return { ...state, closestIds };
    }

    case CLEAN_CLOSEST: {
      return { ...state, closestIds: [] };
    }

    case DELETE_ROW: {
      const rowIndex = action.payload;
      const table = state.table.filter((row, index) => index !== rowIndex);
      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);
      return { ...state, table, colAvgs, rowTotals };
    }
    case ADD_ROW: {
      const table = increaseTable(state.table);
      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);
      return { ...state, table, colAvgs, rowTotals };
    }

    default:
      return state;
  }
};

export default tableReducer;
