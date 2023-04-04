import React, { FunctionComponent } from "react";

import {
  FlexItem,
  FlexItemProps,
  FlexItemPropsInterface,
} from "../flex_item/flex_item";

import "./flex_container.scss";

/**
 *
 * props -
 * list of flex items
 */

export type FlexContainerProps = {
  flexDirection: String;
};

export const FlexContainer: FunctionComponent<FlexContainerProps> = ({
  flexDirection,
}) => {
  const default_flex_items: Array<FlexItemPropsInterface> = [
    { height: 1, width: 1, color: "one" },
    { height: 1, width: 1, color: "two" },
    { height: 1, width: 1, color: "three" },
    { height: 1, width: 1, color: "four" },
    { height: 1, width: 1, color: "five" },
  ];

  // build class names
  const flexDirectionClass = `flex-direction__${flexDirection}`;

  const classes = [flexDirectionClass].join(" ");

  return (
    <section id="flex-container" className={classes}>
      {default_flex_items.map((item, key) => {
        return (
          <FlexItem
            height={item.height}
            width={item.width}
            color={item.color}
            id={key}
          />
        );
      })}
    </section>
  );
};
