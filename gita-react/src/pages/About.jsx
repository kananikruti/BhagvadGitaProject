function About() {
  return (
    <main className="pt-20">
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75')", display: 'block', margin: 'auto', width: '80%', height: '50vh' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">About Bhagavad Gita</h2>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a practical guide to one's life that guides one to re-organise their life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the Mahabharata.
            </p>
            <p>
              The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About


