import React from "react";
import Table from "../table/Table";
import TableSettingsPannel from "../tableSettingsPannel/TableSettingsPannel";

const TableData = () => {
  return (
    <div className="Table-data">
      <TableSettingsPannel />
      <Table />
    </div>
  );
};

export default TableData;
