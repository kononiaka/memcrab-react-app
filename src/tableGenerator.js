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

const calcColAvgs = table =>
  table
    .map((_, index) =>
      table.reduce((total, row) => total + row[index].amount, 0)
    )
    .map(num => num / table[0].length)
    .map(Math.round);

const makeTable = (rowCount, colCount) => {
  const table = [];

  for (let y = 0; y < rowCount; y++) {
    const row = [];
    for (let x = 0; x < colCount; x++) {
      const cell = makeCell();
      row.push(cell);
    }
    table.push(row);
  }

  return table;
};

export { makeTable, calcColAvgs, calcRowTotals };
