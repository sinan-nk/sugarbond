import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#004aad] mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold">SugarBond</span> — your one-stop
          destination for premium homemade pickles crafted with love and care.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is to bring the authentic taste of tradition to every home.
          We use only the freshest ingredients and time-tested recipes to create
          products that deliver both flavor and quality.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for supporting local, homemade goodness. We’re glad to share
          our story and products with you!
        </p>
      </div>
    </div>
  );
}
