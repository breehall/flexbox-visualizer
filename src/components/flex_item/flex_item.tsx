import React, { FunctionComponent } from "react";

import "./flex_item.scss";

const validHeightAndWidth = [1, 2, 3, 4, 5] as const;
type HeightAndWidth = typeof validHeightAndWidth[number];

const colorVariations = ["one", "two", "three", "four", "five"] as const;
type Colors = typeof colorVariations[number];

export type FlexItemProps = {
  height: HeightAndWidth;
  width: HeightAndWidth;
  color: Colors;
  id?: number;
};

export interface FlexItemPropsInterface {
  height: HeightAndWidth;
  width: HeightAndWidth;
  color: Colors;
}

export const FlexItem: FunctionComponent<FlexItemProps> = ({
  height,
  width,
  color,
  id,
}) => {
  // build class names
  const heightClass = `height-${height}`;
  const widthClass = `width-${width}`;
  const colorClass = `primary-${color}`;

  const classes = ["flex-item", heightClass, widthClass, colorClass].join(" ");

  return (
    <div id={`flex-item-${id}`} className={classes}>
      {id++}
    </div>
  );
};
