import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import {
  initTable,
  deleteRow,
  addRow,
  showPercentage,
  cleanPercentage,
} from "../../actions/tableActions";
import Cell from "../cell/Cell";

class Table extends Component {
  componentDidMount() {
    this.props.initTable();
  }

  render() {
    const {
      table,
      rowTotals,
      colAvgs,
      closestIds,
      deleteRow,
      addRow,
      showPercentageRowIndex,
      showPercentage,
      cleanPercentage,
    } = this.props;

    const tableRows = [];
    table.forEach((row, rowIndex) => {
      const cells = row.map(cell => {
        const isPercentVisible = rowIndex === showPercentageRowIndex;
        const percentage = Math.round(
          (cell.amount / rowTotals[rowIndex]) * 100
        );
        return (
          <Cell
            key={cell.id}
            percentage={percentage}
            isPercentVisible={isPercentVisible}
            isClosest={closestIds.includes(cell.id)}
            cellData={cell}
          />
        );
      });
      const rowTotal = (
        <td
          onMouseEnter={() => showPercentage(rowIndex)}
          onMouseLeave={cleanPercentage}
          className="Table-total">
          {rowTotals[rowIndex]}
        </td>
      );
      const newRow = (
        <tr key={rowIndex}>
          {cells}
          {rowTotal}
          <td>
            <button
              className="Table-btn Table-btn-remove"
              onClick={() => deleteRow(rowIndex)}>
              -
            </button>
          </td>
        </tr>
      );
      tableRows.push(newRow);
    });

    const colAvgsCells = colAvgs.map((avg, index) => (
      <td key={index} className="Table-avg">
        {avg}
      </td>
    ));

    const avgRow = (
      <tr>
        {colAvgsCells}
        <td></td>
        <td>
          <button className="Table-btn Table-btn-add" onClick={addRow}>
            +
          </button>
        </td>
      </tr>
    );

    return (
      <table className="Table">
        <tbody>
          {tableRows}
          {avgRow}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    table: state.table.table,
    rowTotals: state.table.rowTotals,
    colAvgs: state.table.colAvgs,
    closestIds: state.table.closestIds,
    showPercentageRowIndex: state.table.showPercentageRowIndex,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initTable: () => dispatch(initTable()),
    deleteRow: rowIndex => dispatch(deleteRow(rowIndex)),
    addRow: () => dispatch(addRow()),
    showPercentage: rowIndex => dispatch(showPercentage(rowIndex)),
    cleanPercentage: () => dispatch(cleanPercentage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
