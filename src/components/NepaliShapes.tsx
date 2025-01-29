const NepaliShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimalist Nepali Flag */}
      <div className="absolute top-0 right-0 opacity-5">
        <div className="w-96 h-96 relative">
          <div className="absolute top-0 right-0 w-80 h-80 border-[30px] border-indigo-600 transform -rotate-45"></div>
          <div className="absolute top-10 right-10 w-60 h-60 border-[30px] border-purple-600 transform -rotate-45"></div>
        </div>
      </div>
      
      {/* Background Mountains */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-32 fill-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 L200 40 L400 90 L600 20 L800 70 L1000 30 L1200 80 V120 H0 Z"
          className="fill-purple-100/30"
        />
        <path
          d="M0 90 L200 60 L400 100 L600 40 L800 90 L1000 50 L1200 90 V120 H0 Z"
          className="fill-indigo-100/30"
        />
      </svg>
    </div>
  )
}

export default NepaliShapes
