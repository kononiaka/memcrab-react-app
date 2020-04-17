import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import { initTable } from "../../actions/tableActions";

class Table extends Component {
  componentDidMount() {
    this.props.initTable();
  }

  render() {
    const { table, rowTotals, colAvgs } = this.props;
    const tableRows = [];
    table.forEach((row, i) => {
      const cells = row.map(({ id, amount }) => {
        return (
          <td key={id} className="Table-cell">
            {amount}
          </td>
        );
      });
      const rowTotal = (
        <td className="Table-cell Table-cell-total">{rowTotals[i]}</td>
      );
      const newRow = (
        <tr>
          {cells}
          {rowTotal}
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
      <table className="Table">
        {tableRows}
        {colAvgsCells}
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    table: state.table.table,
    rowTotals: state.table.rowTotals,
    colAvgs: state.table.colAvgs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initTable: () => dispatch(initTable()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
