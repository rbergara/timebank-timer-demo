import { React } from "react";
import Button from "./Button";

const Counter = () => {
  return (
    <div className='mt-2 flex flex-col items-center gap-y-8'>
      <p className='text-3xl md:text-6xl text-green-500'>00h 00m 00s</p>
      <Button />
    </div>
  )
}

export default Counter;