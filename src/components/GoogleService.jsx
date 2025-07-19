
// IMPORTANT: The 'colors' object is PASSED AS A PROP from App.js.
// It should NOT be defined locally in this file.

// Accept 'colors' as a prop using object destructuring
const GoogleLocalServicesPage = ({ colors }) => (
  <div className="p-8 rounded-lg shadow-xl" style={{ backgroundColor: colors.white, color: colors.black }}>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center leading-tight" style={{ color: colors.green }}>
      Google Local Services Ads (LSA) Management Services
    </h1>
    <p className="text-xl text-center mb-12 max-w-3xl mx-auto" style={{ color: colors.mediumGray }}>
      Get Top Placement on Google. Pay Only for Real, Verified Leads.
    </p>

    {/* Introduction Section */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.black }}>
        Struggling to Generate High-Quality Local Leads?
      </h2>
      <p className="text-lg md:text-xl mb-6 leading-relaxed">
        Tired of wasted ad spend on irrelevant clicks? With Google Local Services Ads (LSAs), your business appears at the very top of Google Search—above traditional Google Ads and organic listings. This means more visibility, more trust, and most importantly, more verified leads.
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        At Knaptix, we specialize in Google Local Services Ads management, helping local service businesses, contractors, D2C brands, and multi-location businesses dominate local search and drive measurable ROI.
      </p>
      <div className="mt-10 text-center">
        <button
          onClick={() => { /* Implement actual navigation or form trigger */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          Request a Free LSA Consultation
        </button>
      </div>
    </section>

    {/* What Are Google Local Services Ads (LSAs)? */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        What Are Google Local Services Ads (LSAs)?
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        Google Local Services Ads (LSAs) are a pay-per-lead advertising program designed to help local businesses connect with customers searching for services nearby.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">⭐</span> Top-of-the-Page Placement
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Your ad appears above traditional Google Ads and organic search results, giving you prime visibility.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">💰</span> Pay-Per-Lead Model
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Only pay when a customer contacts you directly through the ad—no wasted clicks on irrelevant traffic.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✅</span> Google Guaranteed Badge
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Build instant trust and credibility with Google's verification and background check process.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">📞</span> Lead Verification
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Receive calls, messages, and booking requests directly from high-intent local searchers, ensuring quality.
          </p>
        </div>
      </div>
      <p className="text-xl mt-10 leading-relaxed font-bold text-center" style={{ color: colors.black }}>
        If your business serves a local market, Google LSAs can dramatically increase your lead flow and conversion rates.
      </p>
    </section>

    {/* Why Choose Knaptix for Your LSA Campaign Management? */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.black }}>
        Why Choose Knaptix for Your LSA Campaign Management?
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        Running profitable LSAs requires more than just turning on ads. At Knaptix, we offer data-driven, performance-focused LSA management services tailored for your business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">✔️</span> Expertise in LSA Account Setup & Optimization
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            From profile creation to geo-targeting and budget management—we handle it all, ensuring your account is perfectly configured.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">✔️</span> Lead Quality Improvement
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We help filter low-quality leads and maximize your ROI with advanced screening techniques, so you only pay for what matters.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">✔️</span> Budget Efficiency
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We constantly adjust bids, monitor CPL (cost per lead), and scale campaigns based on real-time performance metrics to optimize your spend.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">✔️</span> Dedicated Account Management
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            You get a dedicated LSA specialist at Knaptix monitoring your account and optimizing results continuously, ensuring personalized attention.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">✔️</span> Experience Across Industries
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            From home services and healthcare to D2C brands and multi-location businesses—we've delivered real LSA results across diverse sectors.
          </p>
        </div>
      </div>
    </section>

    {/* Knaptix's Google Local Services Ads Management Services Include: */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        Our Comprehensive LSA Management Services Include:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Account Setup & Verification Support</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We help you get your business verified and fully eligible for LSAs, ensuring quick approval and a smooth start.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Profile Optimization for Maximum Visibility</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We optimize your business profile with relevant services, service areas, compelling photos, and customer reviews to boost your rankings.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Geo-targeting and Service Area Setup</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Target the exact locations where your ideal customers are searching, optimizing your reach for local intent.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Lead Management, Screening & Dispute Handling</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We track and review every lead, help you dispute invalid leads, and ensure you pay only for qualified prospects.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Budget Optimization and Bid Adjustments</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We continuously optimize your daily and monthly spend to reduce your Cost Per Lead (CPL) and maximize your monthly lead volume.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Ongoing Campaign Monitoring & Reporting</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Get transparent monthly reports showing your lead volume, CPL, conversion rate, and ROI, keeping you fully informed.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md col-span-1 md:col-span-2" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Lead Quality Filtering and ROI Maximization</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We continually optimize your campaign based on lead quality data and conversion performance, ensuring maximum return on your investment.
          </p>
        </div>
      </div>
    </section>

    {/* Our LSA Management Process */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.black }}>
        Our Proven LSA Management Process
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        Here's how we deliver high-performing Google LSA campaigns for your business:
      </p>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>1</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Free LSA Consultation</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We assess your business, service area, competition, and current lead flow to tailor our strategy.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>2</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Account Setup & Verification</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We handle your Google Local Services Ads account setup, profile optimization, and the entire verification process with Google.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>3</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Campaign Launch & Optimization</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We go live with your campaigns, continuously tweaking geo-targets, bid settings, and service categories for optimal results.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>4</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Lead Tracking & Quality Control</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We monitor every lead, track conversion sources, and help you dispute low-quality or irrelevant leads to ensure efficiency.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>5</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Reporting & Continuous Improvement</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Receive monthly performance reviews with detailed reporting on leads, CPL, and ROI, along with strategic recommendations for scaling.
          </p>
        </li>
      </ol>
    </section>

    {/* Key Achievements & Results Delivered for Our Clients */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        Key Achievements & Results Delivered for Our Clients
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        At Knaptix, our LSA strategies don't just generate leads—they generate revenue:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">📈</span> ₹30 Lakhs+ Revenue Generated
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            From a mere ₹50K Google Ads budget for a local contractor client, showcasing exceptional ROI.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">📈</span> ₹5 Crore+ Annual Revenue
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Achieved for a D2C brand with a 6X Return On Ad Spend (ROAS) through an integrated Google + LSA strategy.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">📈</span> ₹150 Crore+ Annual Sales Driven
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            For an ethnic wear eCommerce brand through comprehensive full-funnel paid ads management.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">📈</span> Consistent Sales Growth
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Delivered for multiple clients through integrated digital strategies, including Google Ads, Meta Ads, WhatsApp Marketing, and Email Campaigns.
          </p>
        </div>
      </div>
    </section>

    {/* Google Local Services Ads Management Pricing */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.black }}>
        Transparent LSA Management Pricing
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        At Knaptix, our LSA management pricing is flexible and designed to align with your ad spend, lead volume, and business goals.
      </p>
      <ul className="list-disc list-inside space-y-4 text-lg text-center mx-auto max-w-2xl" style={{ color: colors.black }}>
        <li><strong className="font-semibold">One-Time Setup Fee:</strong> For new accounts, covering initial configuration and verification.</li>
        <li><strong className="font-semibold">Monthly Management Fee:</strong> Based on your ad spend and the scope of services required.</li>
        <li><strong className="font-semibold">Custom Packages:</strong> Available for multi-location businesses or high-spend accounts, tailored to your specific needs.</li>
      </ul>
      <div className="mt-10 text-center">
        <button
          onClick={() => { /* Link to custom pricing request form */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          Request Custom LSA Pricing Today
        </button>
      </div>
    </section>

    {/* LSA FAQs */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        LSA FAQs: Everything You Need to Know
      </h2>
      <div className="space-y-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q1: How do Google Local Services Ads work?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Google LSAs place your business at the top of local search results. You only pay when a potential customer contacts you through the ad.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q2: How much does LSA management cost?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Knaptix offers flexible, transparent pricing based on your ad spend and business size. Request a custom quote for details.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q3: What industries qualify for LSAs?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Industries eligible for LSAs include home services, legal, healthcare, cleaning services, D2C brands, and more. We'll help verify your eligibility.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q4: How fast can I start getting leads?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Once your business is verified and your LSA campaign is live, you can start receiving leads within days.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q5: Can Knaptix help optimize my existing LSA account?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Absolutely. Whether you're starting fresh or have an underperforming account, Knaptix can audit, optimize, and scale your LSA campaigns for better results.
          </p>
        </div>
      </div>
    </section>

    {/* Final Call to Action */}
    <section className="p-8 rounded-2xl shadow-lg text-center" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
        Maximize Your Local Lead Flow
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: colors.mediumGray }}>
        Stop wasting budget on low-quality leads. Partner with Knaptix for performance-focused LSA management and start filling your pipeline with verified, high-intent local customers.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
        <button
          onClick={() => { /* Link to LSA specialist contact */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          Talk to a Google LSA Specialist
        </button>
        <button
          onClick={() => { /* Link to Free LSA Consultation */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.black, color: colors.white }}
        >
          Request Your Free LSA Consultation Today
        </button>
      </div>
      <div className="mt-10 text-xl font-semibold" style={{ color: colors.black }}>
        <h3 className="font-bold mb-3">Contact:</h3>
        <p>+91 8905803439 | +91 7877277388</p>
        <p>official@knaptix.in</p>
      </div>
    </section>
  </div>
);

export default GoogleLocalServicesPage;