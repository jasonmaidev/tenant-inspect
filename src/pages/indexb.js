import { Inter } from "next/font/google";
import { CheckCircle, Shield, Clock, Download, Camera, Share2, X } from "lucide-react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Tenant Inspect - Protect Your Security Deposit</title>
        <meta name="description" content="Document your rental's condition legally and avoid unfair charges. Get started for just $19.99 and protect your security deposit today." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tenantinspect.com/" />
        <meta property="og:title" content="Tenant Inspect - Protect Your Security Deposit" />
        <meta property="og:description" content="Document your rental's condition legally and avoid unfair charges. Get started for just $19.99 and protect your security deposit today." />
        <meta property="og:image" content="https://tenantinspect.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tenantinspect.com/" />
        <meta property="twitter:title" content="Tenant Inspect - Protect Your Security Deposit" />
        <meta property="twitter:description" content="Document your rental's condition legally and avoid unfair charges. Get started for just $19.99 and protect your security deposit today." />
        <meta property="twitter:image" content="https://tenantinspect.com/twitter-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="keywords" content="security deposit, tenant rights, rental inspection, property documentation, move-in checklist" />
        <meta name="author" content="Tenant Inspect" />
        <link rel="canonical" href="https://tenantinspect.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2A2D5E" />
      </Head>

      <div className={`${inter.variable} font-sans text-gray-900 overflow-x-hidden`}>
        {/* Sticky Header */}
        <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <span className="text-[#2A2D5E] font-bold text-xl">Tenant Inspect</span>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-full hover:bg-[#45a049] transition-colors">
              Download Now
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-[#2A2D5E]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Protect Your Security Deposit. Keep Your Landlord Honest.
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  For just $19.99, document your rental's condition legally and avoid unfair charges.
                  Get started in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5a1f] transition-colors">
                    Download Now – First 100 Free Inspections!
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Tenant using app"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2A2D5E]">
              How Tenant Inspect Saves You Hundreds
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#4CAF50]" />
                <h3 className="font-semibold text-xl mb-2">Checklist Confidence</h3>
                <p>Follow our expert-backed checklist – never miss a detail.</p>
              </div>
              <div className="text-center">
                <Camera className="w-12 h-12 mx-auto mb-4 text-[#4CAF50]" />
                <h3 className="font-semibold text-xl mb-2">Time-Stamped Proof</h3>
                <p>Photos & notes automatically dated for legal protection.</p>
              </div>
              <div className="text-center">
                <Share2 className="w-12 h-12 mx-auto mb-4 text-[#4CAF50]" />
                <h3 className="font-semibold text-xl mb-2">Instant Report</h3>
                <p>Generate a professional PDF report in seconds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* First 100 Free Campaign Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-[#FF6B35] text-white p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Be a Deposit Defender – Get Your First Inspection Free!
              </h2>
              <p className="text-xl mb-6">
                Join our first 100 users, inspect your rental for $0, and earn a $10 credit for an honest review.
              </p>
              <div className="text-4xl font-bold mb-6">47/100 left</div>
              <button className="bg-white text-[#FF6B35] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Claim My Free Inspection →
              </button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2A2D5E]">
              3 Steps to Peace of Mind
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <Download className="w-12 h-12 mb-4 text-[#4CAF50]" />
                <h3 className="font-semibold text-xl mb-2">Download</h3>
                <p className="text-center">Get the app (iOS/Android).</p>
              </div>
              <div className="flex flex-col items-center">
                <Camera className="w-12 h-12 mb-4 text-[#4CAF50]" />
                <h3 className="font-semibold text-xl mb-2">Inspect</h3>
                <p className="text-center">Use our checklist, take photos, add notes.</p>
              </div>
              <div className="flex flex-col items-center">
                <Share2 className="w-12 h-12 mb-4 text-[#4CAF50]" />
                <h3 className="font-semibold text-xl mb-2">Share</h3>
                <p className="text-center">Email the report to your landlord – it's legally valid!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-[#2A2D5E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Lose Your Deposit to "Normal Wear and Tear"
            </h2>
            <p className="text-xl mb-8">$19.99 today could save you $1,000 tomorrow.</p>
            <button className="bg-[#4CAF50] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#45a049] transition-colors">
              Download & Protect Your Deposit Now
            </button>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Legally Valid Reports</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2A2D5E]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-xl mb-2">Is this legally valid?</h3>
                <p>Yes! Our reports include timestamped photos and detailed documentation that are accepted by courts and rental boards.</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-xl mb-2">What if my landlord refuses?</h3>
                <p>Our reports create an undeniable record of your rental's condition. If your landlord refuses to accept it, the documentation can still be used as evidence in disputes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2025 Tenant Inspect. All rights reserved.</p>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">
          <button className="w-full bg-[#4CAF50] text-white py-3 rounded-full font-semibold">
            Download Now
          </button>
        </div>
      </div>
    </>
  );
}