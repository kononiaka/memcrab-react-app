import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  state = {
    table: [
      [
        {
          id: "6aitq5vj",
          amount: 690,
        },
        {
          id: "hatkm9gs",
          amount: 607,
        },
        {
          id: "ugjo9z73",
          amount: 880,
        },
        {
          id: "c8f6iln4",
          amount: 317,
        },
        {
          id: "evqw61qy",
          amount: 312,
        },
      ],
      [
        {
          id: "7civgqkm",
          amount: 310,
        },
        {
          id: "iyg2q52y",
          amount: 195,
        },
        {
          id: "84ore6oa",
          amount: 720,
        },
        {
          id: "aa3pqj3d",
          amount: 748,
        },
        {
          id: "pdgl83ly",
          amount: 834,
        },
      ],
      [
        {
          id: "ecks73mr",
          amount: 748,
        },
        {
          id: "cql3zz78",
          amount: 668,
        },
        {
          id: "csp6c4qg",
          amount: 470,
        },
        {
          id: "tafvqpj5",
          amount: 569,
        },
        {
          id: "yq5ui7ot",
          amount: 835,
        },
      ],
      [
        {
          id: "tb2vqenf",
          amount: 196,
        },
        {
          id: "guugil6z",
          amount: 649,
        },
        {
          id: "fsdcfv1m",
          amount: 122,
        },
        {
          id: "2f5atzp1",
          amount: 905,
        },
        {
          id: "2bush3c7",
          amount: 827,
        },
      ],
      [
        {
          id: "1xn2h3dp",
          amount: 249,
        },
        {
          id: "6aoszjfr",
          amount: 455,
        },
        {
          id: "uk7i74ss",
          amount: 154,
        },
        {
          id: "6mc82ap2",
          amount: 222,
        },
        {
          id: "yxr5jnst",
          amount: 748,
        },
      ],
    ],
    rowTotals: [2806, 2807, 3290, 2699, 1828],
    colTotals: [439, 515, 469, 552, 711],
  };
  render() {
    const tableRows = [];
    this.state.table.forEach((row, i) => {
      const cells = row.map(({ id, amount }) => {
        return (
          <td key={id} className="Table-cell">
            {amount}
          </td>
        );
      });
      const rowTotal = (
        <td className="Table-cell Table-cell-total">
          {this.state.rowTotals[i]}
        </td>
      );
      const newRow = (
        <tr>
          {cells}
          {rowTotal}
        </tr>
      );
      tableRows.push(newRow);
    });

    const rowAvgs = this.state.colTotals.map(avg => (
      <td className="Table-cell Table-cell-avg">{avg}</td>
    ));
    return (
      <table className="Table">
        {tableRows}
        {rowAvgs}
      </table>
    );
  }
}

export default Table;
