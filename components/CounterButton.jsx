import { React } from "react";

const CounterButton = ({ handleToggleState, running }) => {

  const buttonLabel = running === true ? 'Stop' : 'Start';

  return (
    <button className="
      mt-8 px-8 py-2 text-xl md:text-2xl text-purple-600 font-semibold rounded-full border border-purple-200
      hover:text-white hover:bg-purple-600 hover:border-transparent
      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      onClick={handleToggleState}
    >
      { buttonLabel }
    </button>
  )
}

export default CounterButton;