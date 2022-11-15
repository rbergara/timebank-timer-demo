import React from 'react'
import ResetButton from './ResetButton';

const Timebank = ({ accumulated, handleReset }) => {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <p className='text-2xl md:text-4xl text-gray-500'>
        <span>Bank:&nbsp;&nbsp;&nbsp;&nbsp;</span>
        { accumulated }
      </p>
      <ResetButton handleReset={handleReset}/>
    </div>
  )
}

export default Timebank;