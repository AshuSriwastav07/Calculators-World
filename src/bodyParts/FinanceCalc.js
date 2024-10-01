import React, { useState } from "react";

function FinanceCalc() {
  function onSubmitCalculateSIP(e) {
    e.preventDefault(); // Prevent form from reloading the page
    let { sipAmount, sipYears, sipReturns } = e.target.elements;
    sipAmount = parseInt(sipAmount.value);
    sipYears = parseInt(sipYears.value);
    sipReturns = parseInt(sipReturns.value);

    // Calculate monthly interest rate
    const monthlyInterestRate = sipReturns / 12 / 100;

    // Calculate total number of months
    const totalMonths = sipYears * 12;
    const totalInvestment = totalMonths * sipAmount;

    // Calculate future value
    const futureValue =
      sipAmount *
      ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) /
        monthlyInterestRate) *
      (1 + monthlyInterestRate);

    setSipCalculatedAmount(futureValue);
    setSipInvestedAmount(totalInvestment);
    setSipIntrestAmount(futureValue - totalInvestment);
    setSIPShowResult(true); // Show the result after calculation
  }

  function onSubmitCalculateIntrest(e) {
    e.preventDefault(); // Prevent form from reloading the page
    let { loanAmount, loanYears, loanIntrestRate } = e.target.elements;
    loanAmount = parseInt(loanAmount.value);
    loanYears = parseInt(loanYears.value);
    loanIntrestRate = parseInt(loanIntrestRate.value);

    const intrestValue = loanAmount * loanIntrestRate * (loanYears / 100);
    intrestSipCalculatedAmount(intrestValue);
    setIntrestShowResult(true);
  }

  const [sipCalculatedAmount, setSipCalculatedAmount] = useState([null]);
  const [sipInvesterAmount, setSipInvestedAmount] = useState([null]);
  const [sipIntrestAmount, setSipIntrestAmount] = useState([null]);

  const [showSIPResult, setSIPShowResult] = useState(false);
  const [showInstrestResult, setIntrestShowResult] = useState(false);

  const [intrestCalculatedAmount, intrestSipCalculatedAmount] = useState([
    null,
  ]);

  // Function to clear the result
  const clearSIPResult = () => {
    setSIPShowResult(false); // Hide the result
  };

    // Function to clear the result
    const clearIntrestResult = () => {
      setIntrestShowResult(false); // Hide the result
    };

  return (
    <>
      <div className="h-full bg-green-200 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1">
        {/* SIP Calculator */}
        <div className="sipCalc h-fit w-[80%] p-8">
          <h1 className="text-[18px]">SIP Calculator</h1>
          <form
            action=""
            className="h-[50%] mt-4"
            onSubmit={onSubmitCalculateSIP}
          >
            <div className="grid grid-cols-2">
              <label className="text-[18px]">Monthly Investment</label>
              <input
                type="text"
                name="sipAmount"
                id="sipAmount"
                className="w-[80%]"
                placeholder="Amount"
              />
            </div>

            <div className="grid grid-cols-2 my-2">
              <label className="text-[18px]">Investment Period</label>
              <input
                type="number"
                id="sipYears"
                name="sipYears"
                className="w-[80%]"
                placeholder="Time (Years)"
              />
            </div>

            <div className="grid grid-cols-2 my-2">
              <label className="text-[18px]">Expected Return Rate (%)</label>
              <input
                type="number"
                id="sipReturns"
                name="sipReturns"
                className="w-[80%]"
                placeholder="Returns"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calculate
            </button>
          </form>

          <div>
            {/* Conditionally render the result */}
            {showSIPResult && (
              <div className="flex flex-col items-start	">
                <h1 className="text-lg mx-3 my-2 pb-2 font-mono text-center">
                  Your Total Invested Amount: {sipInvesterAmount}
                </h1>
                <h1 className="text-lg mx-3 my-2 pb-2 font-mono text-center">
                  Your Total Intrest is: {sipIntrestAmount}
                </h1>
                <h1 className="text-lg mx-3 my-2 pb-2 font-mono text-center">
                  Your Total SIP Amount is: {sipCalculatedAmount}
                </h1>

                <button
                  onClick={clearSIPResult}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                  Clear Result
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Intrest Calculator */}

        <div className="intrestCalc h-fit w-[80%] p-8">
          <h1 className="text-[18px]">Intrest Calculator</h1>
          <form
            action=""
            className="h-[50%] mt-4"
            onSubmit={onSubmitCalculateIntrest}
          >
            <div className="grid grid-cols-2">
              <label className="text-[18px]">Loan Amount</label>
              <input
                type="text"
                name="loanAmount"
                id="loanAmount"
                className="w-[80%]"
                placeholder="Amount"
              />
            </div>

            <div className="grid grid-cols-2 my-2">
              <label className="text-[18px]">Loan Period</label>
              <input
                type="number"
                id="loanYears"
                name="loanYears"
                className="w-[80%]"
                placeholder="Time (Years)"
              />
            </div>

            <div className="grid grid-cols-2 my-2">
              <label className="text-[18px]">Loan Intrest Rate (%)</label>
              <input
                type="number"
                id="loanIntrestRate"
                name="loanIntrestRate"
                className="w-[80%]"
                placeholder="Intrest Rate"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calculate
            </button>
          </form>

          <div>
            {/* Conditionally render the result */}
            {showInstrestResult && (
              <div className="flex flex-col items-start	">
                <h1 className="text-lg mx-3 my-2 pb-2 font-mono text-center">
                  Your Total Intrest Amount:
                  {intrestCalculatedAmount}
                </h1>

                <button
                  onClick={clearIntrestResult}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                  Clear Result
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="intrestCalc h-fit bg-slate-700">3</div>

        <div className="intrestCalc h-fit bg-slate-700">4</div>
      </div>
    </>
  );
}

export default FinanceCalc;
