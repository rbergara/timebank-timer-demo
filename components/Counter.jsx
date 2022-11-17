import { React } from "react";
import CounterButton from "./CounterButton";
import TimeDisplay from "./TimeDisplay";

const Counter = ({ current, handleToggleState, running }) => {
  return (
    <div className='mt-2 flex flex-col items-center gap-y-8'>
      <div className='text-3xl md:text-6xl text-green-500'><TimeDisplay time={current}/></div>
      <CounterButton handleToggleState={handleToggleState} running={running}/>
      {running}
    </div>
  )
}

export default Counter;