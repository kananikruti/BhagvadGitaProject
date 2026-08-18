function Footer() {
  return (
    <footer className="mt-12">
      <div className="footer-links text-center">
        <a className="mx-3 text-gray-600" href="#">About Us</a>
        <a className="mx-3 text-gray-600" href="#">App</a>
        <a className="mx-3 text-gray-600" href="#">Bhagavad Gita AI</a>
        <a className="mx-3 text-gray-600" href="#">Acknowledgements</a>
        <a className="mx-3 text-gray-600" href="#">Privacy</a>
        <a className="mx-3 text-gray-600" href="#">Terms</a>
        <a className="mx-3 text-gray-600" href="#">Blog</a>
        <a className="mx-3 text-gray-600" href="#">Donate</a>
        <a className="mx-3 text-gray-600" href="#">API</a>
        <a className="mx-3 text-gray-600" href="#">Contact Us</a>
      </div>
      <div className="social-icons mt-3 text-center text-gray-500">
        <a className="mx-2" href="#"><i className="fab fa-facebook"></i></a>
        <a className="mx-2" href="#"><i className="fab fa-x-twitter"></i></a>
        <a className="mx-2" href="#"><i className="fab fa-github"></i></a>
      </div>
      <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500 mt-3">
        <p>© 2023 Company Name. All Rights Reserved.</p>
        <div className="flex items-center space-x-2">
          <a className="flex items-center bg-black text-white px-3 py-1.5 rounded-md" href="https://play.google.com/store/apps/details?id=com.gitainitiative.bhagavadgita">
            <img className="w-4 h-4 mr-2" src="https://bhagavadgita.io/play_store.svg" />
            <span>Get it on <br /><strong>Google Play</strong></span>
          </a>
          <a className="flex items-center bg-black text-white px-3 py-1.5 rounded-md" href="https://apps.apple.com/us/app/bhagavad-gita-hindi-english/id1602895635">
            <img className="w-4 h-4 mr-2" src="https://bhagavadgita.io/app_store.svg" />
            <span>Download on the <br /><strong>App Store</strong></span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer


