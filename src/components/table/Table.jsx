import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import {
  initTable,
  incCell,
  showClosest,
  cleanClosest,
  deleteRow,
  addRow,
} from "../../actions/tableActions";

class Table extends Component {
  componentDidMount() {
    this.props.initTable();
  }

  render() {
    const {
      table,
      rowTotals,
      colAvgs,
      incCell,
      showClosest,
      closestIds,
      cleanClosest,
      deleteRow,
      addRow,
    } = this.props;
    const tableRows = [];
    table.forEach((row, rowIndex) => {
      const cells = row.map(({ id, amount }) => {
        const isClosest = closestIds.includes(id);
        const classes = `Table-cell ${isClosest ? "Table-cell-closest" : ""}`;
        return (
          <td
            onClick={() => incCell(id)}
            onMouseEnter={() => showClosest(id)}
            onMouseLeave={cleanClosest}
            key={id}
            data-id={id}
            className={classes}>
            {amount}
          </td>
        );
      });
      const rowTotal = (
        <td className="Table-cell Table-cell-total">{rowTotals[rowIndex]}</td>
      );
      const newRow = (
        <tr>
          {cells}
          {rowTotal}

          <button onClick={() => deleteRow(rowIndex)}>Delete</button>
        </tr>
      );
      tableRows.push(newRow);
    });

    const colAvgsCells = colAvgs.map(avg => (
      <td className="Table-cell Table-cell-avg" a>
        {avg}
      </td>
    ));
    return (
      <React.Fragment>
        <table className="Table">
          {tableRows}
          {colAvgsCells}
        </table>
        <button onClick={addRow}>Add row</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    table: state.table.table,
    rowTotals: state.table.rowTotals,
    colAvgs: state.table.colAvgs,
    closestIds: state.table.closestIds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initTable: () => dispatch(initTable()),
    incCell: id => dispatch(incCell(id)),
    showClosest: id => dispatch(showClosest(id)),
    cleanClosest: () => dispatch(cleanClosest()),
    deleteRow: rowIndex => dispatch(deleteRow(rowIndex)),
    addRow: () => dispatch(addRow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
