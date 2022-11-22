import React, { useEffect, useRef, useState } from "react"
import Counter from '../components/Counter';
import Timebank from '../components/Timebank';

const TimebankContainer = () => {
  const [current, setCurrent] = useState(0);
  const [accumulated, setAccumulated] = useState(0);
  const [reseted, setReseted] = useState(true);
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
      setReseted(false);
      clearInterval(intervalRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[running]);

  useEffect(() => {
    if(reseted) {
      setCurrent(0);
      setAccumulated(0);
      setRunning(false);
    }
  },[reseted]);

  const handleToggleState = () => {
    setRunning(!running);
  }
  const handleReset = () => {
    setReseted(true);
  }

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Counter current={current} handleToggleState={handleToggleState} running={running}/>
      <Timebank accumulated={accumulated} handleReset={handleReset}/>
    </div>
  )
}

export default TimebankContainer