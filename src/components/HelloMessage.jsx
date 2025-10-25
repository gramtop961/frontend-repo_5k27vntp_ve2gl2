export default function HelloMessage() {
  return (
    <section className="text-center py-16 sm:py-20">
      <p className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">
        <span>Welcome</span>
      </p>
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
        Hello, World!
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
        You just spun up a modern React + Tailwind app. This page is clean, responsive, and ready for your ideas.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a
          href="#features"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow-md hover:bg-indigo-700 transition-colors"
        >
          Explore features
        </a>
        <a
          href="/test"
          className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 font-medium shadow-md ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
        >
          Check backend
        </a>
      </div>
    </section>
  )
}
