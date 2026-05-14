import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="w-full bg-[#007AFF] py-16 px-4 text-center pt-[75px] pb-[75px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-blue-100 text-sm">Effective Date: January 1, 2026 &nbsp;·&nbsp; Studio Inova</p>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#007AFF] hover:underline mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12 text-gray-700 leading-relaxed">

          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">1. Introduction</h2>
            </div>
            <p>
              Studio Inova ("we", "us", or "our") is an independent digital studio committed to building responsible AI-powered tools and clean digital experiences. We take your privacy seriously and are dedicated to being transparent about how we collect, use, and protect your personal information.
            </p>
            <p className="mt-3">
              This Privacy Policy applies to all Studio Inova products, applications, and this website. By using any of our services, you agree to the practices described in this policy.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">2. Information We Collect</h2>
            </div>
            <p className="mb-4">We collect information in the following ways:</p>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-black mb-1">Information You Provide</h3>
                <p className="text-sm">When you use our contact form, we collect your name, email address, subject, and message content. This information is used solely to respond to your inquiry.</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-black mb-1">Content Submitted to Our AI Tools</h3>
                <p className="text-sm">When you use tools like <strong>Detect AI</strong>, the text or images you submit are processed in real time to provide results. We do not store or share this content beyond your active session.</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-semibold text-black mb-1">Automatically Collected Data</h3>
                <p className="text-sm">We may automatically collect usage data such as device type, browser version, operating system, pages visited, and time spent on pages. This helps us improve our products and user experience.</p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">3. Cookies</h2>
            </div>
            <p className="mb-4">
              Our website and apps use cookies — small text files stored on your device — to enhance your experience and support advertising functionality.
            </p>
            <p className="mb-4">
              Cookies we use include:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
              <li><strong>Analytics Cookies:</strong> Used to understand how visitors interact with our content so we can improve it.</li>
              <li><strong>Advertising Cookies:</strong> Set by our third-party advertising partners (including Google) to serve personalized ads based on your browsing behavior.</li>
            </ul>
            <p className="mt-4">
              You can control or disable cookies through your browser settings at any time. Note that disabling certain cookies may affect the functionality of our services.
            </p>
          </section>

          {/* Third-Party Advertising */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">4. Third-Party Advertising (Google AdMob)</h2>
            </div>
            <p className="mb-4">
              Studio Inova uses <strong>Google AdMob</strong>, a mobile advertising service provided by Google LLC, to display advertisements within our applications. AdMob is part of Google's advertising network.
            </p>

            <div className="bg-[#007AFF]/5 border border-[#007AFF]/20 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-black mb-2">How Google AdMob Works</h3>
              <p className="text-sm leading-relaxed">
                Google AdMob uses cookies and similar tracking technologies (such as advertising identifiers on mobile devices) to collect data about your app usage and serve ads that are relevant to you. <strong>Google uses this data — including information about your prior visits to our apps and other websites — to personalize the ads you see.</strong>
              </p>
            </div>

            <p className="mb-4">
              The data collected by Google AdMob may include:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Your device's advertising identifier (IDFA on iOS, GAID on Android)</li>
              <li>IP address and approximate location</li>
              <li>App usage behavior and interaction data</li>
              <li>Information from prior visits to apps and websites in Google's advertising network</li>
            </ul>
            <p className="mt-4">
              Studio Inova does not control or have access to the data collected by Google AdMob. Google's use of your data is governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] hover:underline font-medium">
                Google's Privacy Policy
              </a>.
            </p>
            <p className="mt-4">
              You can opt out of personalized advertising by:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
              <li>Visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] hover:underline">Google's Ads Settings</a></li>
              <li>On iOS: going to <strong>Settings → Privacy → Advertising → Limit Ad Tracking</strong></li>
              <li>On Android: going to <strong>Settings → Google → Ads → Opt out of Ads Personalization</strong></li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">5. Data Sharing & Security</h2>
            </div>
            <p>
              We do not sell or rent your personal information to any third parties. We share data only with trusted service providers — such as Google AdMob — strictly necessary to operate our services, and only under agreements that require them to keep your information confidential.
            </p>
            <p className="mt-3">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss.
            </p>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">6. Contact Us</h2>
            </div>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@studioinova.com" className="text-[#007AFF] hover:underline font-medium">hello@studioinova.com</a>.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated effective date.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#007AFF] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-xs text-gray-400">© 2026 Studio Inova</span>
        </div>
      </div>
    </div>
  );
}
