const MountainDivider = () => {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      <svg 
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Himalayas silhouette */}
        <path
          d="M0 80 L150 40 L300 90 L450 20 L600 70 L750 30 L900 80 L1050 40 L1200 80 V120 H0 Z"
          className="fill-current text-purple-100"
        />
        <path
          d="M0 90 L150 60 L300 100 L450 40 L600 90 L750 50 L900 90 L1050 60 L1200 90 V120 H0 Z"
          className="fill-current text-indigo-100"
        />
      </svg>
    </div>
  )
}

export default MountainDivider
