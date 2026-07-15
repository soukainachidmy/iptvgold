import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | IPTVGOLD",
  description:
    "Read the IPTVGOLD Terms of Use to understand the terms and conditions that apply when you use our IPTV subscription services and website.",
  alternates: { canonical: "https://iptvgold.com/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: July 15, 2025</p>
        <div className="prose-iptv">
          <p>
            These Terms of Use govern your use of the IPTVGOLD website and services. By accessing or using
            IPTVGOLD, you agree to be bound by these terms. If you do not agree with any part of these terms,
            please do not use our services.
          </p>

          <h2>1. Service Description</h2>
          <p>
            IPTVGOLD provides IPTV subscription services that allow users to stream live television channels
            and on-demand video content over the internet. Our service includes access to 18,000+ live channels
            and 60,000+ VOD titles, subject to your subscription plan.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use IPTVGOLD. By using our services, you represent and warrant
            that you are 18 or older and have the legal capacity to enter into these terms.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To use IPTVGOLD, you must provide accurate and complete information when creating an account. You
            are responsible for maintaining the security of your account credentials and for all activities
            that occur under your account. Do not share your account credentials with others.
          </p>

          <h2>4. Subscription and Payment</h2>
          <ul>
            <li>Subscription plans and pricing are displayed on our pricing page and may change at any time.</li>
            <li>Payment is required in advance for the subscription period you select (1, 3, 6, or 12 months).</li>
            <li>Subscriptions do not auto-renew. You must manually renew when your subscription expires.</li>
            <li>All payments are processed securely through our payment partners. We do not store your credit card information.</li>
            <li>Prices are listed in USD. Taxes, if applicable, are added at checkout.</li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any illegal or unauthorized purpose</li>
            <li>Share, resell, or redistribute your account credentials or subscription</li>
            <li>Attempt to hack, disrupt, or reverse-engineer our servers or software</li>
            <li>Use automated tools to scrape, download, or archive content from our service</li>
            <li>Interfere with the proper functioning of the service or other users&apos; access</li>
            <li>Use the service to transmit viruses, malware, or other malicious code</li>
          </ul>

          <h2>6. Device Compatibility</h2>
          <p>
            IPTVGOLD is compatible with most streaming devices, including Amazon Firestick, Smart TVs, Android,
            iOS, Apple TV, Roku, Formuler, and Buzz TV. However, we do not guarantee compatibility with every
            device or software version. You are responsible for ensuring your device meets the minimum
            requirements.
          </p>

          <h2>7. Refund Policy</h2>
          <p>
            We offer a satisfaction guarantee. If you experience technical issues that we cannot resolve within
            24 hours of being reported, you may request a refund within the first 7 days of your subscription.
            Refunds are not available after 7 days or for issues caused by the user&apos;s device, internet
            connection, or configuration.
          </p>
          <p>
            To request a refund, contact support@iptvgold.com with your account details and a description of
            the issue.
          </p>

          <h2>8. Service Availability</h2>
          <p>
            We strive for 99.9% uptime but do not guarantee uninterrupted service. The service may be
            temporarily unavailable due to maintenance, server updates, network issues, or events beyond our
            control. We are not liable for any downtime or data loss resulting from service interruptions.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            The IPTVGOLD name, logo, website design, and all content on our website are our intellectual property.
            You may not use, copy, or distribute any of our intellectual property without our written permission.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            IPTVGOLD is provided &quot;as is&quot; without warranties of any kind. We are not liable for any
            indirect, incidental, or consequential damages arising from the use of our service. Our total
            liability shall not exceed the amount you paid for your subscription.
          </p>

          <h2>11. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time if you violate these Terms of
            Use or engage in any activity that we deem harmful to our service or other users. Upon termination,
            your access to the service will be removed immediately.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use at any time. We will post the updated terms on this page with a new
            effective date. Continued use of IPTVGOLD after changes are posted constitutes acceptance of the
            updated terms.
          </p>

          <h2>13. Contact Us</h2>
          <p>If you have any questions about these Terms of Use, please contact us at:</p>
          <ul>
            <li>Email: support@iptvgold.com</li>
            <li>Website: https://iptvgold.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
