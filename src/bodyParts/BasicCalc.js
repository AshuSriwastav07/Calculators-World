import React from 'react'
import "../App.css";

function clearInput(){
  

}


function BasicCalc() {
  return (
    <>

    <div className='max-w-min m-8 bg-slate-300 calc-div'>
        <div className=' calc-input-div'>
            <input className='w-[90%] h-9 text-right px-1 mt-3 mx-[5%] calc-input-field' type="text" name="" id="inputField" />
        </div>

        <div className='grid gap-0 grid-flow-col buttons'>
        <div className='row1'>
        <button type="button" className="m-3 btn btn-secondary btn-sm">%</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">7</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">4</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">1</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">C</button>
        </div>
        <div className="row2">
        <button type="button" className="m-3 btn btn-secondary btn-sm" onClick={clearInput}>CE</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">8</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">5</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">2</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">0</button>
        </div>
        <div className="row3">
        <button type="button" className="m-3 btn btn-secondary btn-sm">00</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">9</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">6</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">3</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">.</button>
        </div>
        <div className="row4">
        <button type="button" className="m-3 btn btn-secondary btn-sm">/</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">*</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">-</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">+</button>
        <button type="button" className="m-3 btn btn-secondary btn-sm">=</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default BasicCalc