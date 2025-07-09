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
        {/* <p className="text-lg leading-relaxed">
          Your gateway to discovering, bidding, and winning unique products across a secure and modern auction platform. Join a community of thousands who trust AuctionHub for transparent, real-time auctions.
        </p> */}
      </section>
      <h1>Introduction</h1>
      <p>At AuctionHub, we redefine how auctions happen in
        the digital age. Built with a passion for transparency,
        efficiency, and user empowerment, our platform
        connects sellers and bidders in a seamless, secure, and intuitive
        environment.Whether you’re listing a rare collectible or placing a bid on
        your next big win, AuctionHub ensures every step is smooth, fair, and
        rewarding.
        With real-time bidding, smart notifications,
        and a trusted user base, we make auctions feel
        exciting and effortless.</p>
      <h1>Who are we?</h1>
      <p>We are a team of developers, designers, and auction enthusiasts committed
        to modernizing traditional auctions. Inspired by the dynamic nature of live
        auctions,
        we've created a user-friendly platform where transparency, trust, and
        real-time bidding are at the core of the experience.</p>
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
