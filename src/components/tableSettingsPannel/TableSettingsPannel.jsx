import React, { Component } from "react";
import { connect } from "react-redux";
import { initTable } from "../../actions/tableActions";
import "./TableSettingsPannel.css";

class TableSettingsPannel extends Component {
  state = {
    isSubmitDisabled: true,
    rows: null,
    cols: null,
    closest: null,
  };

  handleCountChange = e => {
    const countName = e.target.name;
    const countValue = +e.target.value;
    this.setState({ [countName]: countValue }, this.enableSubmit);
  };

  enableSubmit = () => {
    const { rows, cols, closest } = this.state;
    if (rows && cols && closest) {
      this.setState({ isSubmitDisabled: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const tableData = {
      rowsCount: e.target[0].value,
      colsCount: e.target[1].value,
      closestCount: e.target[2].value,
    };

    this.props.initTable(tableData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="rows">Rows</label>
        <input
          onChange={this.handleCountChange}
          name="rows"
          min="1"
          max="11"
          type="number"
          value={this.state.rows}
        />
        <label htmlFor="cols">Columns</label>
        <input
          onChange={this.handleCountChange}
          name="cols"
          min="1"
          max="11"
          type="number"
          value={this.state.cols}
        />
        <label htmlFor="closest">Closest Cells</label>
        <input
          onChange={this.handleCountChange}
          name="closest"
          min="1"
          max="11"
          type="number"
          value={this.state.closest}
        />
        <input
          name="submit"
          type="submit"
          value="Draw table"
          disabled={this.state.isSubmitDisabled}
        />
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    initTable: tableData => dispatch(initTable(tableData)),
  };
};

export default connect(null, mapDispatchToProps)(TableSettingsPannel);
