import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ConactPage'; // typo warning below
import GeoServicesPage from './components/GeoServicesPage';
import GoogleLocalServicesPage from './components/GoogleService'; // filename is GoogleService.jsx
import HomePage from './components/Homepage';
import SEOPage from './components/SEOPage'; // Create this file if it doesn’t exist

import { useState } from 'react';

// Define the color palette based on the provided image
const colors = {
  white: '#FFFFFF',
  lightGray: '#F5F5F5', // A lighter gray for backgrounds
  black: '#000000',
  green: '#00B000', // A vibrant green
  lightGreen: '#E0FFE0', // A light green for accents/backgrounds
  mediumGray: '#CCCCCC', // A medium gray for text/borders
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSeoDropdownOpen, setIsSeoDropdownOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsSeoDropdownOpen(false); // Close dropdown on navigation
  };

  const toggleSeoDropdown = () => {
    setIsSeoDropdownOpen(!isSeoDropdownOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage colors={colors} />;
      case 'about':
        return <AboutUsPage colors={colors} />;
      case 'contact':
        return <ContactPage colors={colors} />;
      case 'seo': // New SEO landing page
        return <SEOPage colors={colors} navigateTo={navigateTo} />; // Pass navigateTo prop
      case 'geo-services':
        return <GeoServicesPage colors={colors} />;
      case 'google-local-services':
        return <GoogleLocalServicesPage colors={colors} />;
      default:
        return <HomePage colors={colors} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: colors.lightGray }}>
      <header className="shadow-md" style={{ backgroundColor: colors.white }}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: colors.black }}>
            Knaptix
          </div>
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => navigateTo('home')}
                className={`text-lg font-medium hover:text-green-600 transition-colors duration-300 ${currentPage === 'home' ? 'text-green-600' : ''}`}
                style={{ color: currentPage === 'home' ? colors.green : colors.black }}
              >
                Homepage
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('about')}
                className={`text-lg font-medium hover:text-green-600 transition-colors duration-300 ${currentPage === 'about' ? 'text-green-600' : ''}`}
                style={{ color: currentPage === 'about' ? colors.green : colors.black }}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('contact')}
                className={`text-lg font-medium hover:text-green-600 transition-colors duration-300 ${currentPage === 'contact' ? 'text-green-600' : ''}`}
                style={{ color: currentPage === 'contact' ? colors.green : colors.black }}
              >
                Contact
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => {
                  navigateTo('seo'); // Navigate to SEO page
                  toggleSeoDropdown(); // Also toggle dropdown
                }}
                className={`text-lg font-medium hover:text-green-600 transition-colors duration-300 flex items-center ${currentPage.includes('seo') ? 'text-green-600' : ''}`}
                style={{ color: currentPage.includes('seo') ? colors.green : colors.black }}
              >
                SEO
                <svg
                  className={`ml-2 w-4 h-4 transform ${isSeoDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isSeoDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 py-2 w-48 rounded-md shadow-lg z-10"
                  style={{ backgroundColor: colors.white }}
                >
                  <button
                    onClick={() => navigateTo('geo-services')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{ color: colors.black }}
                  >
                    GEO Services
                  </button>
                  <button
                    onClick={() => navigateTo('google-local-services')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                    style={{ color: colors.black }}
                  >
                    Google Local Services
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <footer className="py-8 text-center text-sm" style={{ backgroundColor: colors.black, color: colors.white }}>
        <p>&copy; {new Date().getFullYear()} Knaptix. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;