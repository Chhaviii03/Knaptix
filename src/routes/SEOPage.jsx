const colors = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#00B000',
  lightGray: '#F5F5F5',
};

const SEOPage = ({ navigateTo }) => (
  <div className="p-10 rounded-lg shadow-lg" style={{ backgroundColor: colors.white }}>
    <h1 className="text-3xl font-bold text-center mb-4" style={{ color: colors.green }}>
      SEO Services Overview
    </h1>
    <p className="text-lg leading-relaxed" style={{ color: colors.black }}>
      Navigate through our AI-driven SEO services tailored to dominate modern search landscapes.
    </p>
    <div className="mt-6 text-center">
      <button
        onClick={() => navigateTo('geo-services')}
        className="px-6 py-3 rounded-full text-lg font-semibold shadow-md transition hover:scale-105"
        style={{ backgroundColor: colors.green, color: colors.white }}
      >
        Explore GEO Services
      </button>
    </div>
  </div>
);

export default SEOPage;
