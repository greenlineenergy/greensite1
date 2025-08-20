import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>GreenLine Energy — Save Big on Energy Upgrades</title>
        <meta
          name="description"
          content="GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pumps, air conditioning, and hydronics. Save up to $4,000 with rebates and expert support."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="Unlock VEU-accredited upgrades to save on energy costs and reduce emissions. Enjoy up to $4,000 in rebates with certified installations."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <script src="https://cdn.tailwindcss.com"></script>
        {/* favicon: eco green */}
        <link
          rel="icon"
          href={`data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'><circle cx='128' cy='128' r='120' fill='#2E7D32'/><path d='M68 148c40-10 68-42 84-88 18 20 28 44 28 72 0 45-31 82-84 82-22 0-39-7-51-20 9-17 13-31 23-46z' fill='#fff'/></svg>`
          )}`}
        />
        {/* LocalBusiness JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GreenLine Energy Pty Ltd",
            url: "https://greensite-rouge.vercel.app",
            telephone: "+61 412 345 678",
            email: "contact@GLEnergy.com.au",
            areaServed: "Victoria, Australia",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Green Street",
              addressLocality: "Melbourne",
              addressRegion: "VIC",
              postalCode: "3000",
              addressCountry: "AU",
            },
            sameAs: [
              "https://www.energy.vic.gov.au/victorian-energy-upgrades",
              "https://www.solar.vic.gov.au/hot-water-rebate",
            ],
          })}
        </script>
      </Head>
      {/* SITE WRAPPER */}
      <div className="bg-gradient-to-b from-[#F9F9F9] via-[#F9F9F9] to-[#E0E0E0] text-[#1A237E] antialiased">
        {/* Banner */}
        <div className="w-full">
          <img
            src="/greenline-banner.png.png.png"
            alt="GreenLine Energy Savings Banner"
            className="w-full h-[150px] md:h-[200px] object-cover rounded-b-lg shadow-md"
            loading="lazy"
          />
        </div>
        {/* Header (Teal with professional accent) */}
        <header className="sticky top-0 z-50 bg-[#26A69A] text-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 font-semibold text-white">
                <img
                  src="/greenline-logo-mark.png.jpeg"
                  alt="GreenLine Energy Logo"
                  className="h-10 w-10 rounded-full"
                  loading="lazy"
                />
                <span className="sr-only">GreenLine Energy</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#solutions" className="hover:text-[#4DA8DA]">Solutions</a>
                <a href="#pricing" className="hover:text-[#4DA8DA]">Pricing</a>
                <a href="#process" className="hover:text-[#4DA8DA]">Process</a>
                <a href="#faq" className="hover:text-[#4DA8DA]">FAQ</a>
                <a href="#contact" className="hover:text-[#4DA8DA]">Contact</a>
              </nav>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </header>
        {/* Hero - Professional and Inviting */}
        <section id="top" className="py-16 md:py-24 bg-[#F9F9F9]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#E0E0E0] text-[#1A237E] ring-1 ring-[#26A69A]/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A237E]">
                Transform Your Home with Energy Savings
              </h1>
              <p className="text-lg md:text-xl text-[#455A64]">
                GreenLine Energy offers VEU-accredited upgrades to cut costs and emissions. Save up to $4,000 with
                government rebates!
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="#rebates"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#F9F9F9] text-[#1A237E] ring-1 ring-[#26A69A]/30 hover:bg-[#E0E0E0]"
                >
                  Explore Rebates
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  ["Up to $4,000", "in Rebates*"],
                  ["Up to $1,500", "Hot Water Savings"],
                  ["Save $1,500/yr", "vs Old Systems"],
                  ["Expert Team", "Quick Installs"],
                ].map(([t, s], i) => (
                  <li
                    key={i}
                    className="bg-[#E0E0E0] rounded-lg shadow-sm ring-1 ring-gray-300 p-3 text-center"
                  >
                    <strong className="block text-base">{t}</strong>
                    <span className="text-sm text-[#455A64]">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#78909C]">
                *Savings vary by location, eligibility, and product. Contact for details.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#F9F9F9] rounded-2xl shadow-md ring-1 ring-gray-300 p-5">
                <img
                  src="/heatpump.jpeg"
                  alt="Modern home with energy-efficient upgrades"
                  width="600"
                  height="400"
                  className="rounded-2xl object-cover w-full h-[250px] md:h-[400px]"
                  loading="lazy"
                />
                <p className="text-sm text-[#455A64] mt-2 text-center">
                  Upgrade to a more efficient, cost-saving home.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Trust and Accreditation */}
        <section aria-label="Trust and Accreditation" className="py-8 bg-[#E0E0E0]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-wrap items-center justify-center gap-6">
            <img
              src="/trust-veu.png"
              alt="Victorian Energy Upgrades Accreditation"
              className="h-12"
              loading="lazy"
            />
            <img
              src="/trust-esc.png"
              alt="Essential Services Commission Accreditation"
              className="h-12"
              loading="lazy"
            />
            <span className="text-sm text-[#455A64]">
              Licensed, Insured, and Committed to Excellence
            </span>
          </div>
        </section>
        {/* Solutions - Professional and Clear */}
        <section id="solutions" className="py-16 md:py-20 bg-[#F9F9F9]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1A237E]">
              Our Energy-Efficient Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Efficient, quiet systems to reduce heating costs.",
                  bullets: ["Up to 80% energy savings", "Smart technology", "VEU & STC eligible"],
                  chips: "Emerald / EcoGenica / Neopower",
                  image: "/heatpumphotwater.jpeg",
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body: "Year-round comfort with VEU-approved units.",
                  bullets: ["All-season efficiency", "Custom sizing", "Rebate discounts"],
                  chips: "Daikin • Mitsubishi • Fujitsu",
                  image: "/revcycair.jpeg",
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Custom heating for consistent warmth.",
                  bullets: ["Tailored designs", "Site eligibility", "Complete service"],
                  chips: "Custom Quotes",
                  image: "/hydronicsboilers.jpeg",
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-[#E0E0E0] rounded-2xl shadow-sm ring-1 ring-gray-300 p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} Solution`}
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-[#26A69A] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#455A64] mb-3">{card.body}</p>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-[#455A64]">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#26A69A] rounded-full"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#F9F9F9] text-[#00695C] ring-1 ring-[#26A69A]/20 mt-3">
                    {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Rebates - Informative and Inviting */}
        <section id="rebates" className="py-16 md:py-20 bg-[#E0E0E0]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E]">
                Unlock Your Rebate Savings
              </h2>
              <p className="text-lg text-[#455A64]">
                As a VEU-accredited provider, GreenLine Energy secures government rebates to make your upgrades
                affordable.
              </p>
              <ul className="text-sm text-[#455A64] space-y-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2E7D32] rounded-full"></span>
                  Up to $4,000 in combined rebates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2E7D32] rounded-full"></span>
                  Up to $1,500 hot water savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2E7D32] rounded-full"></span>
                  Discounts on air conditioners
                </li>
              </ul>
              <p className="text-xs text-[#78909C]">
                *Depends on location and eligibility. Contact for a personalized estimate.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
              >
                Check Eligibility
              </a>
            </div>
            <div className="md:pl-6">
              <img
                src="/rebates-illustration.png.png"
                alt="Energy-efficient home upgrades"
                width="400"
                height="300"
                className="rounded-2xl shadow-sm ring-1 ring-gray-300 object-cover w-full h-[250px] md:h-[300px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* Pricing - Structured and Clear */}
        <section id="pricing" className="py-16 md:py-20 bg-[#F9F9F9]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1A237E]">
              Pricing After Rebates
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  desc: (
                    <>
                      From <span className="font-semibold text-[#2E7D32]">$799</span> installed*
                    </>
                  ),
                  points: ["Full install & removal", "5–7 year warranties", "Rebates applied"],
                  image: "/heatpumphotwater.jpeg",
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  desc: <>VEU-discounted, site-specific</>,
                  points: ["Efficient single-room comfort", "Certified units", "Quick setup"],
                  image: "/splitrcac.jpeg",
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  desc: <>Custom, VEU-discounted</>,
                  points: ["Whole-home efficiency", "Load planning", "Professional install"],
                  image: "/ductedrcac.jpeg",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-[#E0E0E0] rounded-2xl shadow-sm ring-1 ring-gray-300 p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} Pricing`}
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-[#1A237E] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#455A64] mb-3">{p.desc}</p>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-[#455A64]">
                    {p.points.map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#26A69A] rounded-full"></span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#78909C] mt-4 text-center">
              *Based on eligibility. Confirm with us for exact costs.
            </p>
          </div>
        </section>
        {/* Process - Streamlined Flow */}
        <section id="process" className="py-16 md:py-20 bg-[#E0E0E0]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1A237E]">
              Your Upgrade Process
            </h2>
            <div className="flex justify-center">
              <img
                src="/eligible.png"
                alt="Eligibility Process"
                className="w-full max-w-[600px] h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* Contact - Professional and Accessible */}
        <section id="contact" className="py-16 md:py-20 bg-[#F9F9F9]">
          <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-5">
              Let’s Get Started
            </h2>
            <p className="text-lg text-[#455A64] mb-5">
              Our team is here to assist with your energy upgrade needs.
            </p>
            <form className="bg-[#E0E0E0] rounded-2xl shadow-sm ring-1 ring-gray-300 p-5 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium text-[#1A237E]">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-gray-300 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#1A237E]">Email</span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border-gray-300 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-[#1A237E]">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-gray-300 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="3000"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-[#1A237E]">Message</span>
                <textarea
                  rows={4}
                  required
                  className="mt-2 w-full rounded-lg border-gray-300 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="How can we assist you?"
                />
              </label>
              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:contact@GLEnergy.com.au"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-white text-[#1A237E] ring-1 ring-[#26A69A]/30 hover:bg-[#E0E0E0] transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-sm text-[#78909C] mt-3">
              Refer a friend and get $100 off your next upgrade! By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>
        {/* Refer a Friend - $100 Cash */}
        <section className="w-full py-12 bg-[#E0E0E0]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#26A69A] text-white text-center py-6">
                <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
                  Refer a Friend, $100 Cash!
                </h2>
              </div>
              <div className="p-8 space-y-4 text-center">
                <p className="text-lg text-[#455A64]">
                  Invite your friends to join GreenLine Energy and earn <strong>$100 cash</strong> for each successful referral!
                </p>
                <p className="text-sm text-[#78909C]">
                  No limit—refer more friends to boost your rewards!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
                >
                  Refer Now
                </a>
                <p className="flex justify-center mt-4 text-sm text-[#78909C]">
                  Quick, easy, and rewarding way to share the savings.
                </p>
              </div>
            </div>
            {/* New Image Section */}
            <div className="mt-6">
              <img
                src="/refer.png"
                alt="Refer a Friend Illustration"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* FAQ - Informative and Clear */}
        <section id="faq" className="py-16 md:py-20 bg-[#E0E0E0]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">Rebate Details</h3>
              <ul className="text-sm text-[#455A64] space-y-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Hot water rebates up to $1,500
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Up to $4,000 in combined incentives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Aircon discounts available
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">Benefits of Switching</h3>
              <ul className="text-sm text-[#455A64] space-y-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Save up to $1,500/year on energy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Upgrade to efficient heating
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Lower your carbon footprint
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-4">
            <p className="text-sm text-[#78909C] text-center">
              *Estimates vary. Contact us for a detailed assessment.
            </p>
          </div>
        </section>
        {/* Footer - Professional and Clear */}
        <footer className="py-8 bg-[#2E7D32] text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-white">
              © {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN 12 345 678 901
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DA8DA] transition-colors duration-200"
              >
                VEU Program
              </a>
              <span className="text-white/50">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DA8DA] transition-colors duration-200"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-white/50">•</span>
              <a
                href="mailto:contact@GLEnergy.com.au"
                className="hover:text-[#4DA8DA] transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
