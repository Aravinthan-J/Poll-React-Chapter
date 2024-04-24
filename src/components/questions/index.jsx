import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { Button, Input } from "@mui/material";
import { TextareaAutosize  } from "@mui/base/TextareaAutosize";


import { createQuestion } from "../../firebase.util";
import { PollContext } from "../../context";


import "./style.css";

function createUnqId(){
const uniqueID = nanoid();
const defaultoption = {
  uid: uniqueID,
  value: "",
};
return defaultoption
}

export function Question() {
  const [questonName, setQuestionName] = useState("");
  const [optionList, setOptionList] = useState([createUnqId()]);
  const [optionValue, setOptionValue] = useState([]);

  const {state} = useContext(PollContext)

  function addOption() {
    setOptionList([...optionList, createUnqId()]);
  }

  return (
    <>
      <div>
        <TextareaAutosize placeholder="Empty"
          onChange={(event) => {
            setQuestionName(event.target.value);
          }}
          value={questonName}
        />
        <br />
        {optionList.map(({ uid,value }, index) => {
          return (
            <div key={uid}>
              <Input
                defaultValue={value}
                onChange={(event) => {
                  const value = event.target.value;
                  setOptionValue((prev) => {
                    prev[index] = value;
                    return [...prev];
                  });
                  setOptionList((prev) => {
                    prev[index].value = value;
                    return [...prev];
                  });
                }}
                value={optionValue[index]}
              />
            </div>
          );
        })}
        <Button variant="outlined" onClick={addOption}>Add option</Button>
      </div>
      <Button type="primary"  variant="contained"  onClick={() => {
    createQuestion({
      title: questonName,
      options: optionList,
      created_by: state.userId
    })
    setOptionList([createUnqId()])
    setQuestionName("")
    setOptionValue([])
      }}>Submit</Button>
    </>
  );
}