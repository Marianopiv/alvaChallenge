import { useState } from "react";
import Select from "./Select.js";
import { SelectFieldType } from "./interface.tsx";

const AlvaChallenge = () => {
  const [option, setOption] = useState<SelectFieldType|string>("PlaceHolder");

  const options:SelectFieldType[] = [
    { label: "qWe", value: "value1", disabled: false },
    { label: "Option 2", value: "value2" },
    { label: "Option 3", value: "value3", disabled: true },
    { label: "we", value: "value4" },
    { label: "zxc", value: "value5" },
    { label: "qwe zxc", value: "value6" },
    { label: "Option 7", value: "value7", disabled: true },
  ];

  const handleChange = (value:SelectFieldType|string) => {
    setOption(value)
  }

  const resetOption = () => {
    setOption("PlaceHolder")
  }
  return (
    <Select
      label="Label"
      helpMessage="help message"
      value={option}
      onChange={handleChange}
      options={options}
      resetOption={resetOption}
    />
  );
};

export default AlvaChallenge;