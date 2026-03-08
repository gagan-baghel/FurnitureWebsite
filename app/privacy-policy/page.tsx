import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for Priya Sharma Interior Design.",
  alternates: {
    canonical: "https://priyainteriors.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 bg-cream min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-[32px] p-8 space-y-6 text-rich-brown/80">
            <p>
              We collect personal information that you voluntarily submit through contact forms, email, or phone to
              respond to inquiries and provide design services.
            </p>
            <p>
              Information may include your name, email, phone number, project details, and communication history.
              We do not sell your data to third parties.
            </p>
            <p>
              We may use trusted tools and service providers to operate this website and communicate with you. Data is
              retained only as long as required for legitimate business or legal purposes.
            </p>
            <p>
              You may request access, correction, or deletion of your personal information by contacting us at
              hello@priyainteriors.com.
            </p>
            <p>Last updated: March 8, 2026.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
