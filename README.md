Задание Frontend на работу с объектами
Технические условия
Использовать react + redux
Входящие параметры
Числа M, N, X
Подготовка
Создать матрицу M \* N(строчки, колонки)
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

//REQUIREMENTS 
Task Frontend to work with objects
Technical specifications
Use react + redux
Incoming parameters
Numbers M, N, X
Training
Create matrix M \ * N (lines, columns)
The value of the place of restraint is an object with a unique identifier ID and the number of Amount: int (3-digit random)
Find the sum for each row M and the average for each column N
Table output
Output the resulting data into a table with good UX. In the main cells of the table, Amount is displayed, previously automatically generated, the sum on the M rows on the right, and the average on the N columns below.
Cell dynamics
When you click on a cell, increase the Amount value by 1 and accordingly change the average of this column and the sum of this row
When hovering over a cell, highlight X cells whose Amount is closest to the Amount of the current cell.
When hovering over a row’s sum of cells, it is necessary to replace the value of the cells with the percentage of their contribution to the total amount and add a background: a column that will clearly show the percentage. Actually paint over part of the cell.
Row dynamics
To enable the removal of a row from the table, while the average values ​​for each column should change
Give the ability to add a row, in fact M + 1. In this case, the row is filled in according to all the rules of the table.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
