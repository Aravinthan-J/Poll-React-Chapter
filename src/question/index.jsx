// import { Radio } from "@mui/material";

import { useState } from "react";

import "./style.css";

// const questionSample = {
//   id: "A_q1",
// };

const defaultoption = {
  uid: "",
  value: "",
};

export default function Question() {
  const [optionList, setOptionList] = useState([defaultoption]);

  function addOption() {
    setOptionList([...optionList, { ...defaultoption }]);
  }

  return (
    <div>
      <div contentEditable={true} className="questionName" />
      <br />
      {optionList.map(({ value }, index) => {
        return (
          <div key={index}>
            <input type="radio" id={index} name={value} value={value} />
            <input type="text" />
          </div>
        );
      })}
      {/* <Radio /> */}
      <button onClick={addOption}>Add option</button>
    </div>
  );
}
