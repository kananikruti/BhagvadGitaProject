import { useRef, useState } from 'react'

function Quotes() {
  const slidesRef = useRef(null)
  const [index, setIndex] = useState(0)
  const total = 3

  function showSlide(i) {
    const next = (i + total) % total
    setIndex(next)
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${next * 100}%)`
    }
  }

  return (
    <main className="pt-20">
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75')", display: 'block', margin: 'auto', width: '80%', height: '50vh' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">Bhagavad Gita Quotes By <br />Lord Krishna</h2>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 relative">
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <div className="carousel flex transition-transform duration-700 ease-in-out" ref={slidesRef} style={{ transform: `translateX(-${index * 100}%)` }}>
            <div className="w-full flex-shrink-0">
              <div className="text-2xl text-orange-500 font-bold text-center mb-3">QUOTE 1</div>
              <p className="text-center max-w-2xl mx-auto text-lg leading-7">
                Whenever dharma declines and the purpose of life is forgotten,<br />
                I manifest myself on earth. I am born in every age to protect the good,<br />
                to destroy evil, and to reestablish dharma.
              </p>
            </div>
            <div className="w-full flex-shrink-0">
              <div className="text-2xl text-orange-500 font-bold text-center mb-3">QUOTE 2</div>
              <p className="text-center max-w-2xl mx-auto text-lg leading-7">
                You have the right to work, but never to the fruit of work.<br />
                You should never engage in action for the sake of reward.
              </p>
            </div>
            <div className="w-full flex-shrink-0">
              <div className="text-2xl text-orange-500 font-bold text-center mb-3">QUOTE 3</div>
              <p className="text-center max-w-2xl mx-auto text-lg leading-7">
                Change is the law of the universe.<br />
                You can be a millionaire, or a pauper in an instant.
              </p>
            </div>
          </div>
          <button onClick={() => showSlide(index - 1)} className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full">
            <i className="material-icons">chevron_left</i>
          </button>
          <button onClick={() => showSlide(index + 1)} className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full">
            <i className="material-icons">chevron_right</i>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Quotes


