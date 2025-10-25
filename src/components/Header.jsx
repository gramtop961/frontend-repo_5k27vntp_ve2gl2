import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
          <Rocket className="h-5 w-5" />
        </div>
        <span className="font-semibold text-lg tracking-tight">Hello World</span>
      </div>
      <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
        <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
        <a href="/test" className="hover:text-gray-900 transition-colors">Backend Test</a>
        <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
      </nav>
    </header>
  )
}
