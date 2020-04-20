import { cloneDeep } from "lodash";

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const genID = (length = 10) => {
  const chars = "123456789qwertyuiopasdfghjklzxcvbnm";
  const max = chars.length - 1;

  let id = "";
  for (let i = 0; i < length; i++) {
    const index = randomInteger(0, max);
    id += chars[index];
  }

  return id;
};

const makeCell = () => ({
  id: genID(8),
  amount: randomInteger(100, 999),
});

const calcRowTotals = table =>
  table.map(row => row.reduce((total, { amount }) => total + amount, 0));

const calcColAvgs = table => {
  const colAvgs = [];
  const colCount = table[0].length;
  const rowCount = table.length;

  for (let i = 0; i < colCount; i++) {
    let total = 0;
    for (let row of table) {
      total += row[i].amount;
    }
    const avg = Math.round(total / rowCount);
    colAvgs.push(avg);
  }

  return colAvgs;
};

const makeRow = cellCount => {
  const row = [];

  for (let x = 0; x < cellCount; x++) {
    const cell = makeCell();
    row.push(cell);
  }

  return row;
};

const makeTable = (rowCount, colCount) => {
  const table = [];

  for (let y = 0; y < rowCount; y++) {
    const row = makeRow(colCount);
    table.push(row);
  }

  return table;
};

const increaseTable = table => {
  const cellCount = table[0].length;
  const newRow = makeRow(cellCount);
  const newTable = cloneDeep(table);
  newTable.push(newRow);

  return newTable;
};

export { makeTable, calcColAvgs, calcRowTotals, increaseTable };
