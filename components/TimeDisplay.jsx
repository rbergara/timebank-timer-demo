import { React } from "react";
import TimeBox from "./TimeBox";

const hoursMS = 1000 * 60 * 60;
const minsMS = 1000 * 60;

const TimeDisplay = ({ time }) => {
  const hours = Math.floor(time / hoursMS);
  const minutes = Math.floor((time % hoursMS) / minsMS);
  const seconds = Math.floor((time % minsMS) / 1000);

  return (
    <div className="flex justify-around gap-x-2 md:gap-x-4">
      <TimeBox time={hours} text='hrs'/>&nbsp;&nbsp;
      <TimeBox time={minutes} text='mins'/>&nbsp;&nbsp;
      <TimeBox time={seconds} text='secs'/>
    </div>
  )
}

export default TimeDisplay;