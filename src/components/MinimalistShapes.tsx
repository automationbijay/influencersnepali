const MinimalistShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circles */}
      <div className="minimalist-shape w-64 h-64 -top-32 -left-32 blur-3xl shape-animation" />
      <div className="minimalist-shape w-96 h-96 -bottom-48 -right-48 blur-3xl shape-animation" 
           style={{ animationDelay: '-10s' }} />
      
      {/* Lines */}
      <div className="absolute top-1/4 right-0 w-32 h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rotate-45" />
      <div className="absolute bottom-1/4 left-0 w-32 h-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 -rotate-45" />
      
      {/* Dots */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-500/30" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-500/30" />
    </div>
  )
}

export default MinimalistShapes
