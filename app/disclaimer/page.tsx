import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | IPTVGOLD",
  description:
    "Read the IPTVGOLD Disclaimer to understand the limitations and conditions of our IPTV subscription services.",
  alternates: { canonical: "https://iptvgold.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-2">Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: July 15, 2025</p>
        <div className="prose-iptv">
          <p>
            The information and services provided by IPTVGOLD are for general informational and entertainment
            purposes only. By using our services, you acknowledge and agree to the terms outlined in this
            disclaimer.
          </p>

          <h2>1. No Warranty</h2>
          <p>
            IPTVGOLD provides its services on an &quot;as is&quot; and &quot;as available&quot; basis. We do not
            make any warranties or representations regarding the accuracy, reliability, availability, or
            completeness of our service. All warranties, express or implied, are disclaimed to the fullest
            extent permitted by law.
          </p>

          <h2>2. Content Availability</h2>
          <p>
            Channel availability, VOD content, and streaming quality may vary based on your location, internet
            connection, device, and server conditions. We do not guarantee that all channels or content will
            be available at all times. Channels may be added, removed, or modified without prior notice.
          </p>

          <h2>3. No Content Ownership</h2>
          <p>
            IPTVGOLD does not host, own, or store any of the video content available through our service. We
            act as a streaming service provider that aggregates content from third-party sources. We are not
            responsible for the content itself, its quality, or its legality.
          </p>

          <h2>4. User Responsibility</h2>
          <p>
            Users are responsible for ensuring that their use of IPTVGOLD complies with all applicable local,
            national, and international laws. You are responsible for your own internet connection, device
            compatibility, and configuration. We recommend using a VPN for privacy and security when streaming
            online content.
          </p>

          <h2>5. Third-Party Links and Services</h2>
          <p>
            Our website and service may contain links to third-party websites or services. We are not
            responsible for the content, accuracy, or practices of these third-party sites. Accessing
            third-party links is at your own risk.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Under no circumstances shall IPTVGOLD, its owners, employees, or partners be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising from your use of our service.
            This includes, but is not limited to, loss of data, service interruptions, or damages to your
            device.
          </p>

          <h2>7. Internet Connection Requirement</h2>
          <p>
            IPTVGOLD requires a stable internet connection to function. We are not responsible for streaming
            issues caused by slow, unstable, or unavailable internet connections. Minimum recommended speeds
            are 10 Mbps for HD and 25 Mbps for 4K UHD streaming.
          </p>

          <h2>8. No Legal Advice</h2>
          <p>
            The information on our website, including blog posts and installation guides, is provided for
            informational purposes only and does not constitute legal advice. Consult a legal professional
            for advice regarding your specific situation.
          </p>

          <h2>9. Changes to This Disclaimer</h2>
          <p>
            We reserve the right to update or modify this disclaimer at any time. Changes will be posted on
            this page with an updated effective date. Continued use of IPTVGOLD after changes are posted
            constitutes acceptance of the updated disclaimer.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this disclaimer, please contact us at:</p>
          <ul>
            <li>Email: support@iptvgold.com</li>
            <li>Website: https://iptvgold.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
