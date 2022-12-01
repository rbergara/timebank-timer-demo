import { React } from "react";

const TimeBox = ({ time, text }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base">{text}</span>
      <span className="px-1 border-2 rounded-md outline outline-4">{time.toString().padStart(2, '0') || '00'}</span>
    </div>
  )
}

export default TimeBox;