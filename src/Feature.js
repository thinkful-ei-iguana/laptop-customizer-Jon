import React from 'react';
import slugify from "slugify";


export default function Feature(props) {

  const price = props.handleUSCurrencyFormat.format(props.item.cost);
  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.featureName)}
        checked={props.item.name === props.selected[props.featureName].name}
        onChange={() => props.handleUpdateFeature(props.featureName, props.item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({price})
      </label>
    </div>
  )
}