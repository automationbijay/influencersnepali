import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Click on 'Join as Influencer' and fill out your profile",
    icon: CheckCircle2
  },
  {
    number: 2,
    title: "Link Your Accounts",
    description: "Authenticate your social media accounts to ensure seamless data integration",
    icon: CheckCircle2
  },
  {
    number: 3,
    title: "Get Matched",
    description: "Get connected with businesses that align with your niche and goals",
    icon: CheckCircle2
  },
  {
    number: 4,
    title: "Chat & Collaborate",
    description: "Connect with brands using our built-in chat feature to discuss campaign details",
    icon: CheckCircle2
  },
  {
    number: 5,
    title: "Track & Report",
    description: "Access detailed analytics of your campaign's performance through your influencer dashboard",
    icon: CheckCircle2
  }
]

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
          How InfluencersNepal works?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative pl-12 transition-all duration-300 cursor-pointer group`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Vertical line */}
                {index !== steps.length - 1 && (
                  <div 
                    className={`absolute left-[1.3rem] top-12 w-0.5 h-12 
                      ${index < activeStep ? 'bg-purple-500' : 'bg-gray-200'}`}
                  />
                )}
                
                {/* Step number */}
                <div 
                  className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold
                    ${index <= activeStep 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-400'
                    } transition-all duration-300`}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div 
                  className={`p-4 rounded-lg transition-all duration-300
                    ${index === activeStep 
                      ? 'bg-white shadow-lg scale-[1.02]' 
                      : 'hover:bg-white/50'
                    }`}
                >
                  <h3 className={`font-semibold text-lg mb-1
                    ${index === activeStep ? 'gradient-text' : 'text-gray-700'}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="relative h-full flex items-center">
            <div className="relative w-full group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Video container */}
              <div className="relative bg-white rounded-lg p-2">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/eKmPqWZ1Uy8"
                    title="How InfluencersNepal Works"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
