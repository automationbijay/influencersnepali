const testimonials = [
  {
    name: "Anika Sharma",
    role: "Artist",
    quote: "I never liked promoting myself, but Startup Influencers Nepal connected me with brands that loved my art. Now, I earn ₹50k/month painting from home—no awkward meetings needed!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Raj Thapa",
    role: "Fitness Coach",
    quote: "I just posted workouts for fun until the platform matched me with sportswear brands. Tripling my income to ₹75k/month? Game-changer!",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80"
  },
  {
    name: "Priya Gurung",
    role: "Educator",
    quote: "My STEM videos went from passion projects to a ₹1 lakh/month career after partnering with ed-tech startups through the platform. Even UNICEF noticed!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  }
]

const SuccessStories = () => {
  return (
    <section id="success-stories" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 blur-md" />
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover relative ring-2 ring-purple-500"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-semibold text-lg gradient-text mt-4">{testimonial.name}</h4>
                <p className="text-gray-500 mb-4">{testimonial.role}</p>
              </div>
              <p className="text-gray-600 italic text-center">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
