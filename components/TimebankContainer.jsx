import React, { useEffect, useRef, useState } from "react"
import Counter from '../components/Counter';
import Timebank from '../components/Timebank';

function statusReducer(status, action) {
  switch(action.type) {
    case 'start':
      return {status: 'running'};
    case 'stop':
      return {status: 'idle'};
    default:
      return {status: 'idle'};
  }
}

function displayTime(amount) {
	let hours = Math.floor(amount / (1000 * 60 * 60));
	let minutes = Math.floor((amount % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((amount % (1000 * 60)) / 1000);
	return `${hours}h ${minutes}m ${seconds}s`;
}

const TimebankContainer = () => {

  const [accumulated, setAccumulated] = useState(0);
  const [current, setCurrent] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (running) {
      const started = new Date().getTime();
      const intrvlId = setInterval(function() {
        setCurrent(new Date().getTime() - started);
      }, 1000)
      intervalRef.current = intrvlId;
    } else {
      setAccumulated(a => a += current);
      setCurrent(0);
      clearInterval(intervalRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[running]);

  const handleToggleState = () => {
    setRunning(!running);
  }

  const handleReset = () => {
    setAccumulated(0);
  }

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Counter current={displayTime(current)} handleToggleState={handleToggleState} running={running}/>
      <Timebank accumulated={displayTime(accumulated)} handleReset={handleReset}/>
    </div>
  )
}

export default TimebankContainer