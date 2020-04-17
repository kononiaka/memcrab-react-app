const INIT_TABLE = "INIT_TABLE";
const INC_CELL = "INC_CELL";

const initTable = () => ({ type: INIT_TABLE });
const incCell = id => ({ type: INC_CELL, payload: id });

export { INIT_TABLE, INC_CELL, initTable, incCell };
