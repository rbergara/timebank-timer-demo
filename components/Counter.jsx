import { React } from "react";
import CounterButton from "./CounterButton";

const Counter = ({ current, handleToggleState, running }) => {
  return (
    <div className='mt-2 flex flex-col items-center gap-y-8'>
      <p className='text-3xl md:text-6xl text-green-500'>{current}</p>
      <CounterButton handleToggleState={handleToggleState} running={running}/>
      {running}
    </div>
  )
}

export default Counter;