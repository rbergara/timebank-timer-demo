const Footer = () => {
  return (
    <div className='flex'>
      <p className='top-10 right-10 rounded-full text-md md:text-xl px-6 py-2 text-grey-500 bg-slate-200'>
        <span className="text-blue-500">s</span> or <span className="text-blue-500">space</span> <b>=</b> Start/Stop
        <br />
        <span className="text-red-600">ctrl + backspace</span> <b>=</b> Reset
      </p>
    </div>
  );
}

export default Footer;
