import { React } from "react";

const TimeBox = ({ time, text }) => {
  return (
    <>
      <span className="px-1 border-2 rounded-md outline outline-4">{time < 10 ? '0' + time : time || '00'}</span>
      <span className="px-2 text-base">{text}</span>
    </>
  )
}

export default TimeBox;