
// Define the color palette (duplicated for self-contained immersive)
const colors = {
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  black: '#000000',
  green: '#00B000',
  lightGreen: '#E0FFE0',
  mediumGray: '#CCCCCC',
};

const AboutUsPage = () => (
  <div className="p-8 rounded-lg shadow-xl" style={{ backgroundColor: colors.white, color: colors.black }}>
    <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: colors.green }}>About Us</h2>
    <p className="text-lg mb-4 leading-relaxed">
      At Knaptix, we are at the forefront of digital marketing, specializing in Generative Experience Optimization (GEO).
      In a rapidly changing search landscape, where AI-powered engines like Google SGE and Bing AI dominate,
      traditional SEO is no longer sufficient. We empower businesses to thrive by ensuring their content
      is discovered within AI-generated answers, featured snippets, and conversational search results.
    </p>
    <p className="text-lg mb-4 leading-relaxed">
      Our team comprises early adopters of AI search optimization, leveraging data-led content engineering and
      advanced technical SEO to maximize your AI visibility. We are committed to delivering full-funnel optimization,
      helping your brand appear at every critical touchpoint in the AI search journey.
    </p>
    <p className="text-lg leading-relaxed">
      Partner with Knaptix to stay ahead of the curve, drive more organic visibility, and capture high-intent traffic
      from next-gen search platforms.
    </p>
  </div>
);

export default AboutUsPage;
