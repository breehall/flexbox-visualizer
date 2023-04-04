import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { FlexContainer, PropInputSelect } from "./components";

import { FlexContainerProperties } from "./data/flex_container_properties";

function App() {
  const [count, setCount] = useState(0);

  const [flexDirection, setFlexDirection] = useState("row");

  const flexDirectionOptions = [
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ];
  const form = (
    <form>
      <label>Flex Direction</label>
      <select
        name="flex-direction"
        id="flex-direction"
        onChange={(e) => setFlexDirection(e.target.value)}
      >
        {flexDirectionOptions.map((item, key) => {
          return (
            <option value={item} key={key} selected={flexDirection == item}>
              {item}
            </option>
          );
        })}
      </select>
    </form>
  );

  // const flexDir = FlexContainerProperties.flexDirection;
  // const test = (
  //   <PropInputSelect propertyName={flexDir.cssName} options={flexDir.options} />
  // );
  return (
    <>
      {form}
      <FlexContainer flexDirection={flexDirection} />
    </>
  );
}

export default App;
