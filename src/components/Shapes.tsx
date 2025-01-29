const Shapes = () => {
  return (
    <div className="hidden md:block overflow-hidden absolute inset-0 pointer-events-none">
      <div 
        className="shape-blob bg-indigo-400 w-96 h-96 -top-48 -left-48 rounded-full"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="shape-blob bg-purple-400 w-96 h-96 top-1/4 -right-48 rounded-full"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="shape-blob bg-pink-400 w-96 h-96 bottom-1/4 -left-48 rounded-full"
        style={{ animationDelay: '4s' }}
      />
    </div>
  )
}

export default Shapes
