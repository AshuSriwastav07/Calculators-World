import React from "react";

function DowryCalc() {
  return (
    <div>
      <div className="mainBg bg-purple-400 mx-2 my-2 rounded">
        <div className="headings flex flex-col text-center">
          <h1 className="text-lg mx-3 my-2 font-serif">Dowry Calculator</h1>
          <h1 className="text-lg mx-3 my-2 font-serif">
            How much dowry are you worth?
          </h1>
        </div>
        <div className="dowryForm mx-3">
          <form action="">
            <div className="sec1 flex gap-10 justify-center">
              <div className="sec1-left">
                <h1 className="text-[18px]">Age</h1>
                <select
                  name="age"
                  id=""
                  className="px-2 w-32 my-3 border-2 border-solid border-indigo-500"
                >
                  <option value="0">select</option>
                  <option value="100000">18-25</option>
                  <option value="80000">26-30</option>
                  <option value="50000">30-35</option>
                  <option value="30000">35-40</option>
                  <option value="20000">40-45</option>
                </select>
              </div>

              <div className="sec1-right">
                <h1 className="text-[18px]">Profession</h1>
                <select
                  name="profession"
                  id=""
                  className="px-2 w-32 my-3 border-2	border-solid border-indigo-500"
                >
                  <option value="0">Select</option>
                  <option value="200000">Doctor</option>
                  <option value="150000">Engineer</option>
                  <option value="125000">Software Developer</option>
                  <option value="150000">Police officer</option>
                  <option value="120000">Accountant</option>
                  <option value="130000">Banker</option>
                  <option value="150000">Businessperson</option>
                  <option value="30000">Private Worker</option>
                </select>
              </div>
            </div>

            <div className="sec2 flex gap-10 justify-center">
              <dev className="sec2-left">
                <h1 className="text-[18px]">Monthly Salary</h1>
                <select
                  name="salary"
                  id=""
                  className="px-2 w-32 my-3 border-2	border-solid border-indigo-500"
                >
                  <option value="0">Select</option>
                  <option value="60000">Less Than 50000</option>
                  <option value="750000">50000-1Lakh</option>
                  <option value="100000">1-2 Lakh</option>
                  <option value="125000">2-5 Lakh</option>
                  <option value="150000">More than 5 Lakh</option>
                </select>
              </dev>

              <div className="sec2-right">
                <h1 className="text-[18px]">Education</h1>
                <select
                  name="education"
                  id=""
                  className="px-2 w-32 my-3 border-2	border-solid border-indigo-500"
                >
                  <option value="0">Select</option>
                  <option value="25000">High School</option>
                  <option value="50000">Graduation</option>
                  <option value="60000">Post Graduation</option>
                  <option value="80000">PhD</option>
                  <option value="20000">Drop Out</option>
                </select>
              </div>
            </div>

            <div className="sec3 flex gap-10 justify-center">
              <dev className="sec3-left">
                <h1 className="text-[18px]">Residence</h1>
                <select
                  name="house"
                  id=""
                  className="px-2 w-32 my-3 border-2	border-solid border-indigo-500"
                >
                  <option value="0">Select</option>
                  <option value="50000">Self Owned</option>
                  <option value="30000">Rented</option>
                  <option value="10000">Parent's House</option>
                </select>
              </dev>

              <div className="sec3-right ">
                <h1 className="text-[18px]">Country</h1>
                <select
                  name="country"
                  id=""
                  className="px-2 w-32 my-3 border-2	border-solid border-indigo-500"
                >
                  <option value="0">Select</option>
                  <option value="50000">India</option>
                  <option value="75000">USA</option>
                  <option value="60000">Abroad</option>
                </select>
              </div>
            </div>
            <div className="submitButton flex justify-center">
              <button type="submit" className="w-2/6 bg-red-600 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DowryCalc;
