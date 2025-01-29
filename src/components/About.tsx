import { Rocket, Users, Target, TrendingUp, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: Users,
    title: "Smart Matching",
    description: "Connecting the right creators with the perfect brands",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Target,
    title: "Authentic Growth",
    description: "Focus on genuine engagement and real results",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Sustainable Earnings",
    description: "Help creators build lasting income streams",
    color: "from-green-400 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Evolving with the digital marketing landscape",
    color: "from-orange-400 to-pink-500"
  }
]

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">About Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <p className="text-gray-600 leading-relaxed text-lg">
              We built this platform to solve a disconnect: Nepal's creators drown in self-promotion while businesses burn budgets on mismatched influencers. Our answer? A bridge.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Using smart algorithms, we pair hidden creative talent—introverts, niche experts, even clueless rookies—with brands that genuinely align with their audience, cutting out middlemen and guesswork.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
            <p className="text-gray-600 leading-relaxed text-lg">
              For creators, it's earning sustainably; for businesses, it's authentic campaigns that stick. No fluff, just growth.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Let's fix the broken influencer economy—one meaningful collaboration at a time. 🚀
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500`} />
                  <div className="relative p-6 bg-white rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">{feature.description}</p>
                    <ArrowRight 
                      className={`h-5 w-5 mt-4 transform transition-all duration-300 ${
                        hoveredIndex === index ? 'translate-x-2 text-purple-600' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}

export default About
