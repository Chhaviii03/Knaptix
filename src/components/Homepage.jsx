
// Define the color palette (duplicated for self-contained immersive)
const colors = {
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  black: '#000000',
  green: '#00B000',
  lightGreen: '#E0FFE0',
  mediumGray: '#CCCCCC',
};

const HomePage = () => (
  <div className="flex flex-col items-center justify-center h-full text-center py-20">
    <h1 className="text-5xl font-extrabold mb-6" style={{ color: colors.black }}>
      Welcome to Knaptix!
    </h1>
    <p className="text-xl max-w-2xl" style={{ color: colors.mediumGray }}>
      Your partner in navigating the evolving world of digital search and generative AI optimization.
    </p>
    <div className="mt-10">
      <button
        onClick={() => { /* Add navigation to GEO services or contact */ }}
        className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
        style={{ backgroundColor: colors.green, color: colors.white }}
      >
        Explore Our Services
      </button>
    </div>
  </div>
);

export default HomePage;