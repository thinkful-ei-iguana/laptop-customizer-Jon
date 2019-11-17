import React from "react";
import SummaryItem from "./SummaryItem";
import Total from "./Total";

export default function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <SummaryItem
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
        handleUSCurrencyFormat={props.handleUSCurrencyFormat}
      ></SummaryItem>
    );
  });

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total
        handleUSCurrencyFormat={props.handleUSCurrencyFormat}
        selected={props.selected}
      ></Total>
    </section>
  );
};