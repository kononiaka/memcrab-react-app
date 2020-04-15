/*
  Задание Frontend на работу с объектами
  Технические условия
  Использовать react + redux
  Входящие параметры
  Числа M, N, X
  Подготовка
  Создать матрицу M * N(строчки, колонки)
  Значение места пресечения — объект с уникальным идентификатором ID и количеством Amount: int(3 - х значный рандом)
  Найти сумму по каждой строчке M и среднее по каждому столбику N
  Вывод таблицы
  Вывести результирующие данные в таблицу с хорошим UX.В основных ячейках таблицы выводится Amount, ранее автоматически сгенерированный, справа сумма по строкам M, снизу — среднее по столбцам N.
  Динамика ячеек
  При нажатии на ячейку увеличивать значение Amount на 1 и соответственно менять среднее этого столбика и сумму этой строки
  При наведении на ячейку подсветить X ячеек, Amount которых самый близкий к Amount текущей ячейки.
  При наведении на ячейку суммы по строчке необходимо заменять значение ячеек на процент их вклада в общую сумму и добавить фон: столбик, который наглядно покажет величину процента.Фактически закрасить часть ячейки.
  Динамика строк
  Дать возможность удалить строку с таблицы, при этом должны поменяться средние значения по каждому столбику
  Дать возможность добавить строку, фактически M + 1. При этом строка заполняется по всем правилам таблицы.
*/

const table4 = {
  table: [
    [{ id: 1, amount: 543 }, { id: 3, amount: 567 }, { id: 2, amount: 342 }],
    [{ id: 1, amount: 543 }, { id: 3, amount: 567 }, { id: 2, amount: 342 }],
    [{ id: 1, amount: 543 }, { id: 3, amount: 567 }, { id: 2, amount: 342 }],
    [{ id: 1, amount: 543 }, { id: 3, amount: 567 }, { id: 2, amount: 342 }],
  ],
  xSum: [8847, 4432, 5886],
  ySum: [8847, 4432, 5886, 5463],
};

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const genID = (length = 10) => {
  const chars = '123456789qwertyuiopasdfghjklzxcvbnm';
  const max = chars.length - 1;

  let id = '';
  for (let i = 0; i < length; i++) {
    const index = randomInteger(0, max);
    id += chars[index];
  }

  return id;
}

makeCell = () => ({
  id: genID(8),
  amount: randomInteger(100, 999),
})

const makeTable = (colCount, rowCount) => {
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
}

const table = makeTable(5, 5);
const xSum = table.map(row => row.map(cell => cell.amount).reduce((sum, num) => sum + num, 0));
const ySum;


console.log(table);
console.log(xSum);
