import Header from './components/Header'
import HelloMessage from './components/HelloMessage'
import FeatureCard from './components/FeatureCard'
import Footer from './components/Footer'
import { Rocket, Star, Settings } from 'lucide-react'

export default function App() {
  const features = [
    {
      title: 'Fast & Modern',
      description: 'Vite-powered React app with instant hot reloads and optimized builds.',
      icon: Rocket,
    },
    {
      title: 'Beautiful by Default',
      description: 'Tailwind CSS utilities for effortless styling and responsive layouts.',
      icon: Star,
    },
    {
      title: 'Ready to Extend',
      description: 'Clean, component-based structure so you can add features quickly.',
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <Header />
        <HelloMessage />

        <section id="features" className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
