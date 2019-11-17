import React from "react";

export default function Total(props) {
  let total = Object.keys(props.selected).reduce(
    (acc, curr) =>{ return acc + props.selected[curr].cost} ,
    0
  );
   total = props.handleUSCurrencyFormat.format(total);
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {total}
      </div>
    </div>
  );
}