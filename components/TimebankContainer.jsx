import React, { useCallback, useEffect, useRef, useState } from "react"
import Counter from '../components/Counter';
import Timebank from '../components/Timebank';
import { displayTime } from "../lib/utils";

const TimebankContainer = ({ setTitle }) => {
  const [current, setCurrent] = useState(0);
  const [accumulated, setAccumulated] = useState(0);
  const [running, setRunning] = useState(false);
  const [reseted, setReseted] = useState(true);
  const intervalRef = useRef();

  const handleToggleState = () => {
    setRunning(!running);
  }
  const handleReset = () => {
    setReseted(true);
  }
  const handleKeyPressed = useCallback((event) => {
    if (event.key === 's' || event.key === 'S' || event.key === ' ') {
      setRunning(!running);
    }
    else if (event.ctrlKey && event.code  === 'Backspace') {
      setReseted(true);
    }
  }, [running]);

  useEffect(() => {
    if (running) {
      const started = new Date().getTime();
      const intrvlId = setInterval(function() {
        const curr = new Date().getTime() - started
        setCurrent(curr);
        setTitle(`running - ${displayTime(curr)}`);
      }, 1000)
      intervalRef.current = intrvlId;
    } else {
      setAccumulated(a => a += current);
      setTitle(`banked - ${displayTime(accumulated + current)}`);
      setCurrent(0);
      setRunning(false);
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  useEffect(() => {
    if(reseted) {
      setCurrent(0);
      setAccumulated(0);
      setRunning(false);
      setReseted(false);
      setTitle('Timebank Timer');
    }
  },[reseted, setTitle]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressed);
    return () => {
      document.removeEventListener('keydown', handleKeyPressed);
    }
  }, [handleKeyPressed]);

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Counter current={current} handleToggleState={handleToggleState} running={running}/>
      <Timebank accumulated={accumulated} handleReset={handleReset}/>
    </div>
  )
}

export default TimebankContainer