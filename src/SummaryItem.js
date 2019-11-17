import React from 'react';

export default function summaryItem(props) {
  const optionPrice = props.handleUSCurrencyFormat.format(props.selectedOption.cost);
  return (
         <div className="summary__option" key={props.featureHash}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {optionPrice}
          </div>
        </div>
)}