import { useState } from "react";

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Checkbox,
} from "@mui/material";

const OPTION_TYPE = {
  single: "single",
  multi: "multi",
};

// eslint-disable-next-line react/prop-types
function MultipleChoiceQuestion({ options }) {
  return (
    <FormControl component="form">
      <FormLabel component="question">What is the capital of France?</FormLabel>
      {OPTION_TYPE.single !== "single" ? (
        <RadioComponent options={options} />
      ) : (
        <CheckBoxComponent />
      )}
    </FormControl>
  );
}

export default MultipleChoiceQuestion;

function RadioComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <RadioGroup
      aria-label="quiz"
      name="quiz"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      <FormControlLabel value="paris" control={<Radio />} label="Paris" />
    </RadioGroup>
  );
}

function CheckBoxComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={selectedOptions.includes("paris")}
          onChange={handleOptionChange}
          value="paris"
        />
      }
      label="Paris"
    />
  );
}
