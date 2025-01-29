import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQCategory = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  const faqData: FAQCategory[] = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is our platform about?",
          answer: "Our platform connects Nepali businesses with social media influencers to create effective marketing collaborations."
        },
        {
          question: "Who can join our platform?",
          answer: "Influencers: Any influencer with active social media accounts (Instagram, TikTok, Facebook) can join to find business collaborations.\n\nBusinesses: Any business looking to promote their products or services through influencer marketing can sign up."
        },
        {
          question: "Are there any fees for joining?",
          answer: "Signing up is free for both businesses and influencers. We may charge a commission or service fee for successful collaborations depending on the specific terms."
        }
      ]
    },
    {
      title: "For Influencers",
      questions: [
        {
          question: "How do I sign up as an influencer?",
          answer: "You can sign up using the 'Sign Up' button on our homepage. Fill out your profile via the embedded Google Form, providing your social media handles, follower count, and niche details."
        },
        {
          question: "How do I authenticate my social media accounts?",
          answer: "Once you've signed up, go to your profile settings and select the 'Link Accounts' option. Follow the instructions to authenticate your Instagram, TikTok, and Facebook accounts."
        },
        {
          question: "How will I be matched with businesses?",
          answer: "Our platform uses a matching algorithm to pair you with businesses that align with your niche and engagement metrics. You'll receive notifications when a match is found."
        },
        {
          question: "How do I communicate with businesses?",
          answer: "You can use our built-in chat feature to communicate directly with businesses. All communications will be stored in your dashboard for easy access."
        }
      ]
    },
    {
      title: "For Businesses",
      questions: [
        {
          question: "How do I sign up as a business?",
          answer: "Use the 'Sign Up' button on our homepage. Complete the profile form via the embedded Google Form, providing details about your business, marketing goals, and budget range for collaborations."
        },
        {
          question: "How will I find the right influencers?",
          answer: "Our matching algorithm will match you with influencers based on your business niche, marketing goals, and campaign objectives. You'll receive a list of potential influencers to choose from."
        },
        {
          question: "What kind of reports will I receive on campaign performance?",
          answer: "We provide detailed reports that include reach, engagement rates, and the overall effectiveness of your campaign, helping you measure your ROI."
        },
        {
          question: "How do I communicate with influencers?",
          answer: "Use our integrated chat feature to communicate directly with influencers. All communication will be stored in your dashboard for future reference."
        }
      ]
    }
  ]

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">{category.title}</h3>
              <div className="space-y-2">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}

export default FAQ
