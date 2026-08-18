function Donate() {
  return (
    <main className="pt-20">
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1920&q=75')", display: 'block', margin: 'auto', width: '80%', height: '50vh' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">Donate</h2>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Support the Digital Revival of Ancient Wisdom</h1>
          <div className="text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              Your generous support enables the Ved Vyas Foundation to offer a suite of spiritual resources entirely free of charge and devoid of distractions. By donating, you help us maintain and expand our offerings, such as the ad-free <a className="text-orange-500 hover:underline font-semibold" href="https://bhagavadgita.io/">Bhagavad Gita website</a>, <a className="text-orange-500 hover:underline font-semibold" href="https://bhagavadgita.io/app">mobile apps</a> and <a className="text-orange-500 hover:underline font-semibold" href="https://bhagavadgita.io/gitagpt">GitaGPT AI chatbot</a>.
            </p>
            <p>
              Our dedication is to the digitization and modern presentation of the Ramayan, Mahabharat, Vedas, Puranas, and other precious Indian scriptures. With your contribution, we continue to create and innovate—providing state-of-the-art applications for state-of-the-art spirituality, accessible to all, anytime and anywhere.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80">
              <img alt="QR code for donation" className="w-full h-full object-contain" src="https://bhagavadgita.io/_next/image?url=%2Fupi_qr_radhakrishna.png&w=640&q=75" />
            </div>
            <p className="mt-4 text-gray-600">Scan the QR code with any UPI app to make your donation.</p>
            <p className="mt-2 text-gray-800 font-semibold">UPI ID: <span className="text-red-600">vedvyasfoundation@icici</span></p>
          </div>
        </div>
      </div>
      <div className="fixed left-4 bottom-4">
        <button className="bg-orange-500 p-3 rounded-full shadow-lg">
          <img alt="Chatbot icon" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeurC37tAM7zwgrqby0prHerp54zwCDyW27JPYhVreW6yYxJdfHRP5Fyt3Uui0zIezZ3ZS4WTbXL1y83wWO7hQIj6nK0i63ERpUZL2fJGyMfwfJnTneetQJAvE0lToYF5oTbUgwiPnbnUK9LkNWc_h3cPeADZcteAyOKZL6mQg-tz3XQs-kQmbGHr4KYh2vp0Z5GspERQatyZEY7q_b6HrtFIhLy_bNwU3uZuL02XGVlq-1FoGJfFk1DCD8MAeJ2d0DfOaC6afl5ZN" />
        </button>
      </div>
    </main>
  )
}

export default Donate


