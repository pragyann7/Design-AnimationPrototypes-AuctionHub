import React from "react";
import HeroFadeScrollV2 from "../components/HeroFadeScrollV2";

function App() {
  return (
    <div>
      <HeroFadeScrollV2 />
      <Content />
    </div>
  );
}
export default App

function Content() {
  return (
    <div className="bg-white px-10 space-y-20 text-gray-800">
      {/* Section 1 - Introduction */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to AuctionHub</h2>
        <p className="text-lg leading-relaxed">
          Your gateway to discovering, bidding, and winning unique products across a secure and modern auction platform. Join a community of thousands who trust AuctionHub for transparent, real-time auctions.
        </p>
      </section>

      {/* Section 2 - Features */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
          title="Live Auctions"
          description="Participate in real-time bidding with auto-updating bids and countdown timers."
          icon="🕒"
        />
        <FeatureCard
          title="Verified Sellers"
          description="All sellers are verified for trust and authenticity before listing products."
          icon="✅"
        />
        <FeatureCard
          title="Smart Alerts"
          description="Stay ahead with instant notifications when you’re outbid or an auction ends."
          icon="📱"
        />
      </section>

      {/* Section 3 - How It Works */}
      <section className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              step: "1. Browse",
              detail: "Explore live and upcoming auctions by category or featured picks.",
            },
            {
              step: "2. Bid",
              detail: "Place your bids with confidence. Our system ensures fair play for all.",
            },
            {
              step: "3. Win & Pay",
              detail: "Securely complete your transaction after winning. Delivery is tracked.",
            },
          ].map(({ step, detail }, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-2">{step}</h4>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Call to Action */}
      <section className="text-center max-w-xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Ready to Start Bidding?</h3>
        <p className="mb-6">
          Create your free account today and never miss a great deal again.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-all">
          Join AuctionHub Now
        </button>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-50 p-6 cursor-pointer rounded-xl shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
