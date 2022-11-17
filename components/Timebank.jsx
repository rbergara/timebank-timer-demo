import React from 'react'
import ResetButton from './ResetButton';
import TimeDisplay from './TimeDisplay';

const Timebank = ({ accumulated, handleReset }) => {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <div className='text-2xl md:text-4xl text-gray-500 flex items-center'>
        <span>Bank:&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TimeDisplay time={accumulated}/>
      </div>
      <ResetButton className='align-self-start' handleReset={handleReset}/>
    </div>
  )
}

export default Timebank;