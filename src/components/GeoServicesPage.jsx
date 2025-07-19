
// IMPORTANT: The 'colors' object is PASSED AS A PROP from App.js.
// It should NOT be defined locally in this file.
// Ensure there is NO 'const colors = { ... };' block anywhere in this file.

// Accept 'colors' as a prop using object destructuring
const GeoServicesPage = ({ colors }) => (
  <div className="p-8 rounded-lg shadow-xl" style={{ backgroundColor: colors.white, color: colors.black }}>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center leading-tight" style={{ color: colors.green }}>
      GEO Services: Get Discovered in AI Search Results with Knaptix
    </h1>
    <p className="text-xl text-center mb-12 max-w-3xl mx-auto" style={{ color: colors.mediumGray }}>
      Optimize Your Content for Google SGE, Bing AI, and AI-Driven Search Experiences
    </p>

    {/* Section 1: Introduction */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.black }}>
        The Future of Search is Here. Are You Ready?
      </h2>
      <p className="text-lg md:text-xl mb-6 leading-relaxed">
        Search is changing fast. With the rise of AI-powered search engines like Google's Search Generative Experience (SGE) and Bing AI,
        traditional SEO alone isn't enough. Your business needs to show up where customers are engaging—inside AI-generated answers,
        featured AI snippets, and conversational search results.
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        At Knaptix, our **GEO (Generative Experience Optimization) Services** help brands get discovered in AI search results,
        drive more organic visibility, and capture high-intent traffic from next-gen search platforms.
      </p>
      <div className="mt-10 text-center">
        <button
          onClick={() => { /* Implement actual navigation or form trigger */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          Request a Free GEO Consultation
        </button>
      </div>
    </section>

    {/* Section 2: Why GEO Matters */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        Why GEO (Generative Experience Optimization) Matters for Your Business
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        AI search engines are reshaping how people find products, services, and information online.
        Here's why GEO is critical in 2025 and beyond:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✓</span> AI Summaries Dominate Search
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Google SGE and Bing AI often answer user queries directly, reducing the need for users to scroll further down the SERP. Being in these summaries is vital.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✓</span> Zero-Click Searches Are Rising
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            If your content isn't featured in the AI-generated answer box, you're missing out on a significant amount of potential traffic.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✓</span> Conversational Queries Are the New Norm
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            People now use longer, natural language searches—often voice-driven—triggering AI-generated responses that require a different optimization approach.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✓</span> Ranking Signals Are Evolving
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            AI prioritizes contextual relevance, structured data, and semantic depth over traditional keyword stuffing. Your content must be AI-ready.
          </p>
        </div>
      </div>
      <p className="text-xl mt-10 leading-relaxed font-bold text-center" style={{ color: colors.black }}>
        If you want to stay competitive, your content and site architecture must be AI-search ready.
      </p>
    </section>

    {/* Section 3: Why Choose Knaptix for GEO Services? */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.black }}>
        Why Choose Knaptix for Your GEO Strategy?
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        Knaptix is leading the shift from traditional SEO to AI-driven search optimization. Here's what sets us apart:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">★</span> Early Adopters of AI Search
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We've been actively optimizing client websites for Google SGE, Bing AI, and AI-powered featured snippets since their beta phases, giving you a head start.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">★</span> Data-Led Content Engineering
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Our strategies are built around conversational intent, long-tail AI queries, and structured content frameworks preferred by AI models.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">★</span> Technical SEO Meets AI Requirements
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We implement advanced schema markup, structured data, and site performance enhancements crucial for maximum AI visibility.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.white }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.green }}>
            <span className="text-black mr-2">★</span> Full Funnel Optimization
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            From discovery queries to commercial-intent keywords, we ensure your brand appears at every critical touchpoint in the AI search journey.
          </p>
        </div>
      </div>
    </section>

    {/* Section 4: What's Included in Knaptix GEO Services */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        What's Included in Knaptix GEO Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>AI-Focused Keyword Research & Mapping</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We identify AI-preferred topics, question-based queries, and conversational keywords your target audience is searching for.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Content Optimization for AI Summaries & Answer Boxes</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We optimize your landing pages, blogs, product descriptions, and FAQs to increase your chances of being featured in AI-generated search results.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Structured Data & Schema Implementation</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Proper schema markup is critical for AI engines to understand and summarize your content. We handle full implementation and validation.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Conversational Search Intent Targeting</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We tailor your content to match how users ask questions, use voice search, and interact with AI search assistants.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>AI Content Audit & Readiness Score</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We conduct a GEO readiness audit of your site and deliver an action plan to improve AI discoverability.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>Performance Tracking for AI Search Visibility</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We set up custom AI SERP monitoring, so you can track how often and where your content appears inside AI summaries and answer boxes.
          </p>
        </div>
      </div>
    </section>

    {/* Section 5: Our GEO Optimization Process */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.black }}>
        Our Streamlined GEO Optimization Process
      </h2>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>1</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Discovery & AI Search Audit</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We assess your website's current presence in AI-powered search environments to identify opportunities.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>2</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>AI Keyword & Intent Mapping</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We pinpoint high-potential queries likely to trigger AI-generated summaries and rich answers for your business.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>3</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Content & Technical Optimization</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We optimize content structures, implement structured data, and enhance on-page SEO for AI-readability.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>4</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Implementation & QA Testing</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We deploy changes, validate schema, and rigorously test how your site appears in AI search previews.
          </p>
        </li>
        <li className="p-6 rounded-xl shadow-md flex flex-col items-center text-center" style={{ backgroundColor: colors.white }}>
          <div className="text-5xl font-extrabold mb-4" style={{ color: colors.green }}>5</div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.black }}>Performance Monitoring & Refinement</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            We continuously track your AI search visibility, CTR, and user engagement—refining for optimal placement.
          </p>
        </li>
      </ol>
    </section>

    {/* Section 6: Client Results */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        Client Results: Real GEO Success Stories
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        Knaptix GEO strategies have delivered measurable results for businesses like yours:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✅</span> 50% Increase in AI Visibility
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Achieved for a national eCommerce brand, significantly boosting their presence in AI-generated answers.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✅</span> 40% Organic CTR Uplift
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Resulted from AI snippet-focused optimization, driving more qualified traffic to client websites.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✅</span> Improved FAQ & How-To Inclusion
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            For multiple service businesses across India and international markets, enhancing their discoverability.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.black }}>
            <span className="text-green-600 mr-2">✅</span> Higher Engagement & Dwell Time
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Observed from AI search-driven visitors, indicating higher quality traffic and better user experience.
          </p>
        </div>
      </div>
    </section>

    {/* Section 7: Pricing Overview */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.black }}>
        Transparent GEO Service Pricing
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed text-center max-w-3xl mx-auto">
        Every business's GEO needs are unique. That's why Knaptix offers flexible, custom GEO service packages based on:
      </p>
      <ul className="list-disc list-inside space-y-4 text-lg text-center mx-auto max-w-2xl" style={{ color: colors.black }}>
        <li><strong className="font-semibold">Website Size & Complexity:</strong> Tailored solutions for sites of all scales.</li>
        <li><strong className="font-semibold">Industry Competition Level:</strong> Strategies adapted to your market's intensity.</li>
        <li><strong className="font-semibold">Current AI Search Visibility Gaps:</strong> Focused efforts where you need it most.</li>
        <li><strong className="font-semibold">Scope of Content & Technical Optimization Needed:</strong> Comprehensive plans for holistic improvement.</li>
      </ul>
      <div className="mt-10 text-center">
        <button
          onClick={() => { /* Link to custom pricing request form */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          Request Custom GEO Pricing Today
        </button>
      </div>
    </section>

    {/* Section 8: FAQs */}
    <section className="mb-16 p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300" style={{ backgroundColor: colors.white, border: `1px solid ${colors.mediumGray}` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.green }}>
        FAQs About GEO & AI Search Optimization
      </h2>
      <div className="space-y-8">
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q1: What is GEO (Generative Experience Optimization)?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            GEO is the process of optimizing your website and content to rank inside AI-generated search summaries,
            conversational answer boxes, and rich AI snippets across Google SGE, Bing AI, and other AI search platforms.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q2: How fast can I see results from GEO services?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Depending on your site's current SEO health, many clients see improvements in AI snippet inclusion and CTR within 1-3 months.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q3: Can Knaptix help optimize my existing SEO strategy for AI search?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Yes. We offer GEO add-on services for clients already running SEO campaigns who want to layer in AI search optimization.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q4: Is structured data necessary for GEO?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Absolutely. Structured data and schema markup are foundational for helping AI models understand and prioritize your content
            for summaries and answer boxes.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md" style={{ backgroundColor: colors.lightGray }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.black }}>Q5: Does Knaptix track AI search performance separately from regular SEO?</h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.mediumGray }}>
            Yes. We provide custom reporting on AI-specific metrics, including snippet visibility, AI summary placements, and AI-driven CTR changes.
          </p>
        </div>
      </div>
    </section>

    {/* Section 9: Final Call to Action */}
    <section className="p-8 rounded-2xl shadow-lg text-center" style={{ backgroundColor: colors.lightGreen }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
        Ready to Get Discovered in AI Search?
      </h2>
      <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: colors.mediumGray }}>
        Stay ahead of your competition and start showing up where your customers are searching.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
        <button
          onClick={() => { /* Link to consultation booking */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          Book Your Free GEO Consultation
        </button>
        <button
          onClick={() => { /* Link to AI Search Visibility Plan */ }}
          className="px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: colors.black, color: colors.white }}
        >
          Get Your AI Search Visibility Plan Today
        </button>
      </div>
      <div className="mt-10 text-xl font-semibold" style={{ color: colors.black }}>
        <h3 className="font-bold mb-3">Contact Us Directly:</h3>
        <p>+91 8905803439 | +91 7877277388</p>
        <p>official@knaptix.in</p>
      </div>
    </section>
  </div>
);

export default GeoServicesPage;