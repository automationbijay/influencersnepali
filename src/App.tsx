import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'

// Lazy load components
const Hero = lazy(() => import('./components/Hero'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const SuccessStories = lazy(() => import('./components/SuccessStories'))
const About = lazy(() => import('./components/About'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <main>
          <Hero />
          <HowItWorks />
          <SuccessStories />
          <About />
          <FAQ />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
