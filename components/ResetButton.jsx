import { React } from "react";

const ResetButton = ({ handleReset }) => {

  return (
    <button className="
      mt-12 px-4 py-1 text-xl md:text-3xl text-red-600 font-semibold rounded-full border border-red-200
      hover:text-white hover:bg-red-600 hover:border-transparent
      focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      onClick={handleReset}
    >
      Reset
    </button>
  )
}

export default ResetButton;