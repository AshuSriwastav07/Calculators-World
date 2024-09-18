import React, { useState } from "react";
import "../App.css";

function BasicCalc() {
  const handelButtonClick = (value) => {
    if (value === ".") {
      const parts = inputValue.split(/[\+\-\*\/]/); // Split by operator
      const lastPart = parts[parts.length - 1];
      if (lastPart.includes(".")) return; // Prevent multiple decimals
    }
    setInputValue((prevValue) => prevValue + value);
  };

  const handelClearButtonClick = () => {
    setInputValue("");
  };

  const handelShowResult = () => {
    try {
      const result = new Function(`return ${inputValue}`)();
      setInputValue(result.toString());
    } catch (e) {
      setInputValue("Error");
    }
  };

  const handelOperationClick = (value) => {
    if (inputValue != "") {
      if (
        inputValue.at(-1) != "+" &&
        inputValue.at(-1) != "-" &&
        inputValue.at(-1) != "*" &&
        inputValue.at(-1) != "/" &&
        inputValue.at(-1) != "%"
      ) {
        setInputValue((prevValue) => prevValue + value);
      }
    }
  };

  const handelDeleteLastChar = () => {
    const newValue = inputValue.substring(0, inputValue.length - 1);
    setInputValue(newValue);
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="max-w-min m-8 bg-slate-300 calc-div">
        <div className=" calc-input-div">
          <input
            className="w-[90%] h-9 text-right px-1 mt-3 mx-[5%] calc-input-field"
            type="text"
            value={inputValue}
            readOnly // Prevent typing
          />
        </div>

        <div className="grid gap-0 grid-flow-col buttons">
          <div className="row1">
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelOperationClick("%")}
            >
              %
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("7")}
            >
              7
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("4")}
            >
              4
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("1")}
            >
              1
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelDeleteLastChar()}
            >
              C
            </button>
          </div>
          <div className="row2">
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelClearButtonClick("")}
            >
              CE
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("8")}
            >
              8
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("5")}
            >
              5
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("2")}
            >
              2
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("0")}
            >
              0
            </button>
          </div>
          <div className="row3">
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("00")}
            >
              00
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("9")}
            >
              9
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("6")}
            >
              6
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick("3")}
            >
              3
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelButtonClick(".")}
            >
              .
            </button>
          </div>
          <div className="row4">
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelOperationClick("/")}
            >
              /
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelOperationClick("*")}
            >
              *
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelOperationClick("-")}
            >
              -
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelOperationClick("+")}
            >
              +
            </button>
            <button
              type="button"
              className="m-3 btn btn-secondary btn-sm"
              onClick={() => handelShowResult()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicCalc;
