
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
    <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: colors.green }}>Contact Us</h2>
  </div>
);

export default AboutUsPage;
