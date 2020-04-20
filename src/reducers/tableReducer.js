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
  SHOW_PERCENTAGE,
  CLEAN_PERCENTAGE,
} from "../actions/tableActions";
import { cloneDeepWith, has } from "lodash";

const getClosestIds = (table, count, id) => {
  const cells = table.flat(Infinity);
  const { amount } = cells.find(cell => cell.id === id);

  const closest = cells
    .filter(cell => cell.id !== id)
    .sort((c1, c2) => {
      const diff1 = Math.abs(amount - c1.amount);
      const diff2 = Math.abs(amount - c2.amount);
      return diff1 - diff2;
    })
    .slice(0, count)
    .map(cell => cell.id);

  return closest;
};

const initialState = {
  showPercentageRowIndex: -1,
  closestCount: 5,
  closestIds: [],
  table: [],
  rowTotals: [],
  colAvgs: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TABLE: {
      const { rowsCount, colsCount, closestCount } = action.payload;

      const table = makeTable(rowsCount, colsCount);
      const rowTotals = calcRowTotals(table);
      const colAvgs = calcColAvgs(table);

      return { ...state, table, rowTotals, colAvgs, closestCount };
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
      const { table, closestCount } = state;
      const id = action.payload;

      const closestIds = getClosestIds(table, closestCount, id);

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

    case SHOW_PERCENTAGE: {
      const showPercentageRowIndex = action.payload;
      return { ...state, showPercentageRowIndex };
    }
    case CLEAN_PERCENTAGE: {
      return { ...state, showPercentageRowIndex: -1 };
    }

    default:
      return state;
  }
};

export default tableReducer;
