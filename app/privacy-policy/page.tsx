import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IPTVGOLD",
  description:
    "Read the IPTVGOLD Privacy Policy to understand how we collect, use, and protect your personal data when you use our IPTV subscription services.",
  alternates: { canonical: "https://iptvgold.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: July 15, 2025</p>
        <div className="prose-iptv">
          <p>
            At IPTVGOLD, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            store, and protect your personal information when you visit our website or use our IPTV
            subscription services. By using IPTVGOLD, you agree to the practices described in this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Account Information:</strong> Your name, email address, and payment details when you create an account or purchase a subscription.</li>
            <li><strong>Usage Data:</strong> Information about how you use our service, including IP address, device type, browser type, pages visited, and streaming preferences.</li>
            <li><strong>Communication Data:</strong> Emails, chat messages, and support tickets you send to us.</li>
            <li><strong>Technical Data:</strong> Server logs, connection details, and error reports used for troubleshooting and service improvement.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain the IPTV subscription service you purchased</li>
            <li>To process payments and manage your subscription</li>
            <li>To provide customer support and respond to your inquiries</li>
            <li>To monitor and improve service quality, including server performance and streaming stability</li>
            <li>To detect, prevent, and address technical issues or fraudulent activity</li>
            <li>To send service notifications, such as renewal reminders or important updates</li>
          </ul>

          <h2>3. Data Storage and Security</h2>
          <p>
            Your personal data is stored on secure servers with industry-standard encryption. We use SSL/TLS
            encryption for all data transmitted between your device and our servers. Payment information is
            processed through certified payment gateways and is not stored on our servers.
          </p>
          <p>
            Access to personal data is restricted to authorized personnel only. We retain your data only for
            as long as necessary to provide our services and comply with legal obligations.
          </p>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience, analyze
            website traffic, and understand how visitors use our site. You can control cookies through your
            browser settings, but disabling them may affect website functionality.
          </p>

          <h2>5. Sharing Your Information</h2>
          <p>We do not sell, rent, or trade your personal information. We may share data with:</p>
          <ul>
            <li><strong>Payment processors:</strong> To process your subscription payments securely</li>
            <li><strong>Hosting providers:</strong> To deliver the streaming service</li>
            <li><strong>Analytics providers:</strong> To understand website usage (e.g., Google Analytics)</li>
            <li><strong>Legal authorities:</strong> If required by law or to protect our legal rights</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> You can request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to legal retention requirements</li>
            <li><strong>Opt-out:</strong> You can unsubscribe from marketing emails at any time</li>
            <li><strong>Data portability:</strong> You can request your data in a structured, machine-readable format</li>
          </ul>
          <p>To exercise any of these rights, contact us at support@iptvgold.com.</p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under the age of 18. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal data, please contact
            us and we will delete it promptly.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of these external sites. We encourage you to read the privacy policies of any website
            you visit.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal
            requirements. We will notify you of significant changes by posting the updated policy on this page
            with a new effective date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul>
            <li>Email: support@iptvgold.com</li>
            <li>Website: https://iptvgold.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
