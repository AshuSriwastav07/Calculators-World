import React, { useState, useEffect } from "react";
import "../App.css";

function BasicCalc() {
  const handelButtonClick = (value) => {
    if (value == "00" || value == "0") {
      if (
        inputValue.at(-1) != "+" &&
        inputValue.at(-1) != "-" &&
        inputValue.at(-1) != "*" &&
        inputValue.at(-1) != "/" &&
        inputValue.at(-1) != "%" &&
        inputValue != ""
      ) {
        setInputValue((prevValue) => prevValue + value);
      }
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  const handelClearButtonClick = () => {
    setInputValue("");
    setResultValue("");
  };

  const handelShowResult = () => {
    try {
      const result = new Function(`return ${inputValue}`)();
      // setInputValue(result.toString());
      setResultValue(result.toString());
    } catch (e) {
      setInputValue("Error");
      setResultValue("Error");
    }
  };

  const handelMultipleDecimal = (value) => {
    if (inputValue.at(-1) != "" && !inputValue.includes(".")) {
      setInputValue((prevValue) => prevValue + value);
    } else {
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
  const [resultValue, setResultValue] = useState("");

  return (
    <>
      <div className="max-w-min m-3 justify-self-center h-[600px] w-[600px] md:h-[600px] md:w-[600px] sm:h-[600px] sm:w-[600px] bg-slate-300 calc-div">
        <div className=" calc-input-div">
          <input
            className="w-[90%] h-10 text-right px-2 mt-3 mx-[5%] calc-input-field"
            type="text"
            value={inputValue}
            readOnly // Prevent typing
          />
          <input
            className="w-[90%] h-9 text-right px-2 mt-3 mx-[5%] bg-slate-200 calc-input-field"
            type="text"
            readOnly // Prevent typing
            value={resultValue}
          />
        </div>

        <div className="grid gap-0 grid-flow-col buttons md:h-5">
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
              onClick={() => handelMultipleDecimal(".")}
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
