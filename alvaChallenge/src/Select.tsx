import { SelectFieldType } from "../../alvaChallenge/src/interface";
import { useState } from "react";

type Props = {
  onChange: (value: SelectFieldType | string) => void;
  label: string;
  value: SelectFieldType | string;
  options: SelectFieldType[];
  helpMessage: string;
  resetOption: () => void;
};

const Select = ({
  label,
  helpMessage,
  value,
  onChange,
  resetOption,
  options,
}: Props) => {
  const [toogleDiv, setToogleDiv] = useState(false);
  const handleChange = (value: SelectFieldType) => {
    onChange(value);
  };

  const handleToogle = () => {
    setToogleDiv(!toogleDiv);
  };
  return (
    <>
      <p>{label}</p>
      <div className="divFather">
        <div className="selectDiv" onClick={handleToogle}>
          <div className="divOption placeHolder">
            <p>{typeof value === "string" ? value : value.label}</p>
            <p>{toogleDiv ? "ʌ" : "v"}</p>
          </div>
          {toogleDiv &&
            options.map((option: SelectFieldType, index: number) => (
              <>
                <div
                  onClick={
                    option.disabled ? () => "" : () => handleChange(option)
                  }
                  className={`${
                    option.disabled ? "divDisabled" : "divOption"
                  } ${option.value === value.value ? "divSelected" : ""}`}
                  key={index}
                >
                  {option.label}
                </div>
              </>
            ))}
        </div>
        {value !== "placeHolder" && <p className="divOption" onClick={resetOption}>X</p>}
      </div>
      {helpMessage}
    </>
  );
};

export default Select;
