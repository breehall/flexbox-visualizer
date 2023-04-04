import React, { FunctionComponent } from "react";

import "./prop_input.scss";

export type PropInputSelectProps = {
  propertyName: String;
  options: Array<string>;
};
export const PropInputSelect: FunctionComponent<PropInputSelectProps> = ({
  propertyName,
  options,
}) => {
  const officialName = propertyName.replace("-", " ");

  return (
    <div className="propInputSelect">
      <label>{officialName}</label>
      <select id={`${propertyName}-select`}>
        {options.map((option, key) => {
          return (
            <option value={option} key={key}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
