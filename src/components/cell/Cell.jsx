import React from "react";
import { connect } from "react-redux";
import { incCell, showClosest, cleanClosest } from "../../actions/tableActions";
import "./Cell.css";

const getGradient = percentage => {
  const bgColor = "white",
    topColor = "skyblue",
    btmColor = "lightskyblue";

  return `linear-gradient(
      to top,
      ${btmColor} 0%,
      ${topColor} ${percentage}%,
      ${bgColor} ${percentage}%,
      ${bgColor} 100%
    )`;
};

const Cell = ({
  isClosest,
  cellData,
  incCell,
  showClosest,
  cleanClosest,
  isPercentVisible,
  percentage,
}) => {
  const { id, amount } = cellData;

  let classes = `Cell`;
  if (isClosest) {
    classes += " Cell-closest";
  }
  if (isPercentVisible) {
    classes += " Cell-percent";
  }

  const cellContent = isPercentVisible ? `${percentage}%` : amount;
  const gradientStyle = isPercentVisible ? getGradient(percentage) : "";

  return (
    <td
      onClick={() => incCell(id)}
      onMouseEnter={() => showClosest(id)}
      onMouseLeave={cleanClosest}
      key={id}
      data-id={id}
      className={classes}
      style={{ background: gradientStyle }}>
      {cellContent}
    </td>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    incCell: id => dispatch(incCell(id)),
    showClosest: id => dispatch(showClosest(id)),
    cleanClosest: () => dispatch(cleanClosest()),
  };
};

export default connect(null, mapDispatchToProps)(Cell);
