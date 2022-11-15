import React from "react"
import Counter from '../components/Counter';
import Timebank from '../components/Timebank';

const TimebankContainer = () => {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <Counter />
      <Timebank />
    </div>
  )
}

export default TimebankContainer