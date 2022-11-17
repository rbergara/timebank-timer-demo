import React, { useEffect, useRef, useState } from "react"
import Counter from '../components/Counter';
import Timebank from '../components/Timebank';

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
    if (running) {
      setRunning(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Counter current={current} handleToggleState={handleToggleState} running={running}/>
      <Timebank accumulated={accumulated} handleReset={handleReset}/>
    </div>
  )
}

export default TimebankContainer