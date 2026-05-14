import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="w-full bg-[#007AFF] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-blue-100 text-sm">Effective Date: January 1, 2026 &nbsp;·&nbsp; Studio Inova</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#007AFF] hover:underline mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12 text-gray-700 leading-relaxed">

          {/* Acceptance of Terms */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">1. Acceptance of Terms</h2>
            </div>
            <p>
              By accessing or using any Studio Inova digital product, AI-powered tool, application, or website (collectively, the "Services"), you confirm that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className="mt-3">
              If you do not agree to these Terms, you must immediately stop using our Services. These Terms apply to all visitors, users, and others who access or use the Services.
            </p>
            <p className="mt-3">
              Studio Inova reserves the right to update these Terms at any time. Continued use of the Services after any changes constitutes your acceptance of the revised Terms. We will update the effective date at the top of this page whenever changes are made.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">2. User Conduct</h2>
            </div>
            <p className="mb-4">
              You agree to use our Services only for lawful, ethical, and intended purposes. When using any Studio Inova product or tool, you must not:
            </p>
            <div className="space-y-3">
              {[
                "Violate any applicable local, national, or international law or regulation.",
                "Submit content that is harmful, abusive, defamatory, obscene, or that infringes on the rights of any third party.",
                "Attempt to reverse-engineer, decompile, copy, or reproduce any part of our AI tools, software, or proprietary systems.",
                "Use automated scripts, bots, or scrapers to access our Services without prior written consent from Studio Inova.",
                "Misrepresent the results of our AI tools as definitive legal, academic, or professional proof.",
                "Engage in any activity that disrupts, damages, or impairs the functionality of our Services or servers.",
                "Use our Services to generate, distribute, or promote misinformation or deceptive content.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-[#007AFF] flex-shrink-0" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Studio Inova reserves the right to suspend or permanently terminate access for any user found to be in violation of these conduct rules, without prior notice.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">3. Intellectual Property</h2>
            </div>
            <p className="mb-4">
              All content, materials, and intellectual property associated with Studio Inova's Services are protected by applicable copyright, trademark, and intellectual property laws.
            </p>

            <div className="bg-[#007AFF]/5 border border-[#007AFF]/20 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-black mb-2">Studio Inova Ownership</h3>
              <p className="text-sm leading-relaxed">
                <strong>Studio Inova exclusively owns all app designs, user interface layouts, visual assets, branding elements, source code, AI model configurations, and product concepts</strong> across all of its applications — including Detect AI, Vesper AI Translator, and any future products. This ownership extends to all versions, updates, and derivative works.
              </p>
            </div>

            <p className="mb-4">
              This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>The Studio Inova name, logo, and brand identity</li>
              <li>All app UI/UX designs and visual layouts</li>
              <li>Written content, ebooks, and guides authored by Studio Inova</li>
              <li>Underlying AI tool architectures and scan logic</li>
              <li>Marketing materials and product descriptions</li>
            </ul>
            <p className="mt-4">
              You may not reproduce, redistribute, modify, or create derivative works from any Studio Inova content without explicit prior written permission. Unauthorized use of our intellectual property will be pursued to the fullest extent permitted by law.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">4. Limitation of Liability</h2>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-black mb-2">AI Tools — For Informational Purposes Only</h3>
              <p className="text-sm leading-relaxed">
                <strong>Studio Inova's AI tools, including Detect AI, are provided for informational purposes only.</strong> Results generated by our tools represent probabilistic assessments and should not be used as the sole or definitive basis for any academic, legal, professional, or financial decision. Studio Inova does not guarantee the accuracy, completeness, or reliability of any AI-generated output.
              </p>
            </div>

            <p className="mb-4">
              To the fullest extent permitted by applicable law, Studio Inova and its founder shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our Services.</li>
              <li>Decisions made based on the results of our AI tools.</li>
              <li>Temporary unavailability or technical errors in our Services.</li>
              <li>Loss of data, revenue, or business opportunities connected to the use of our products.</li>
            </ul>
            <p className="mt-4">
              In all cases, Studio Inova's total liability to you shall not exceed the amount you paid, if any, to access the specific Service giving rise to the claim.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">5. Governing Law & Disputes</h2>
            </div>
            <p>
              These Terms are governed by and construed in accordance with applicable laws. Any disputes arising from your use of the Services or these Terms shall first be attempted to be resolved through good-faith negotiation between the parties before pursuing any formal legal process.
            </p>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#007AFF] rounded-full" />
              <h2 className="text-2xl font-bold text-black">6. Contact Us</h2>
            </div>
            <p>
              If you have any questions or concerns about these Terms of Service, please contact us at{" "}
              <a href="mailto:hello@studioinova.com" className="text-[#007AFF] hover:underline font-medium">hello@studioinova.com</a>.
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
