import React from 'react'
import ResetButton from './ResetButton';
import TimeDisplay from './TimeDisplay';

const Timebank = ({ accumulated, handleReset }) => {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <div className='text-xl md:text-4xl text-gray-500 flex flex-col items-center gap-y-2'>
        <span>Bank</span>
        <div className='border border-4 rounded gap-y-4 px-4 pb-4 pt-1'>
          <TimeDisplay time={accumulated}/>
        </div>
      </div>
      <ResetButton className='align-self-start' handleReset={handleReset}/>
    </div>
  )
}

export default Timebank;