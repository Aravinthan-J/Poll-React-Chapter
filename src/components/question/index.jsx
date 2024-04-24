import { useState } from "react";

import { Button, Input } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import { EmptyTextarea } from "../textarea";

import "./style.css";

// const questionSample = {
//   id: "A_q1",
// };

const defaultoption = {
  uid: "",
  value: "",
};

export function Question() {
  const [questonName, setQuestionName] = useState("");
  const [optionList, setOptionList] = useState([defaultoption]);
  const [optionValue, setOptionValue] = useState([]);

  function addOption() {
    setOptionList([...optionList, { ...defaultoption }]);
  }

  return (
    <>
      <div>
        <TextareaAutosize
          onChange={(event) => {
            setQuestionName(event.target.value);
          }}
          value={questonName}
        />
        <br />
        {optionList.map(({ value }, index) => {
          return (
            <div key={index}>
              <Input
                defaultValue={value}
                onChange={(event) => {
                  const value = event.target.value;
                  setOptionValue((prev) => {
                    prev[index] = value;
                    return [...prev];
                  });
                }}
                value={optionValue[index]}
              />
            </div>
          );
        })}
        <Button onClick={addOption}>Add option</Button>
      </div>
      <Button type="primary">Submit</Button>
    </>
  );
}
