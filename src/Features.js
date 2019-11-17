import React from 'react';
import Feature from './Feature';
import slugify from "slugify";

export default function Features(props) {
  
  const featureItems = props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    console.log(itemHash);
    return (
      <Feature
        itemHash={itemHash}
        item={item}
        handleUSCurrencyFormat={props.handleUSCurrencyFormat}
        handleUpdateFeature={props.handleUpdateFeature}
        selected={props.selected}
        featureName={props.featureName}
      ></Feature>
    )
  });
  console.log(featureItems);
  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature_name">
        <h3>{props.featureName}</h3>
      </legend>
      {featureItems}
    </fieldset>
  )
}