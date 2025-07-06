import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../../Component/Sign up/NavBar";
import logo from "/images/Logo.svg";


function Privacy() {


  return (
    <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover">
      <div className="lg:hidden">
        <NavBar backLink="/" />
      </div>

      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <motion.div
        className="w-[90%] mx-auto "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div class="lg:w-[90%] w-[100%] mx-auto bg-white lg:p-8 p-0">
          <h1 class="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p class="text-sm text-gray-600 mb-6">
            Effective Date: <strong>01.01.2024</strong> | Last Updated:{" "}
            <strong>01.07.2025</strong>
          </p>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p class="mb-2">
              Welcome to FundCirkle ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our ROCSA
              model application and related services.
            </p>
            <p>
              FundCirkle operates as a digital platform that facilitates
              traditional rotating savings and credit associations (ROSCAs) by
              providing tracking and management tools for Cirkle groups. We
              understand the importance of trust in financial applications and
              have designed our data practices with privacy-by-design
              principles.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <h3 class="text-xl font-medium mt-4 mb-1">
              2.1 Personal Information
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>
                <strong>Name:</strong> Full name as provided during registration
              </li>
              <li>
                <strong>Email Address:</strong> For account verification,
                communications, and notifications
              </li>
              <li>
                <strong>Phone Number:</strong> For account security and
                important service notifications
              </li>
              <li>
                <strong>City:</strong> General location information (not
                complete address)
              </li>
            </ul>

            <h3 class="text-xl font-medium mt-4 mb-1">2.2 Usage Information</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Login timestamps and frequency</li>
              <li>Features accessed within the application</li>
              <li>
                Device information (device type, operating system, browser type)
              </li>
              <li>IP address and general location data</li>
            </ul>

            <h3 class="text-xl font-medium mt-4 mb-1">
              2.3 Cirkle Activity Data
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Payment tracking records within your Cirkle groups</li>
              <li>Transaction status updates</li>
              <li>Group membership information</li>
              <li>Communication within Cirkle groups (if applicable)</li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <h3 class="text-xl font-medium mt-4 mb-1">3.1 Primary Purposes</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Service Delivery</li>
              <li>Account Management</li>
              <li>Payment Tracking</li>
              <li>Communication</li>
            </ul>
            <h3 class="text-xl font-medium mt-4 mb-1">
              3.2 Secondary Purposes
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Service Improvement</li>
              <li>Customer Support</li>
              <li>Legal Compliance</li>
              <li>Security</li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              4. Data Retention and Deletion
            </h2>
            <h3 class="text-xl font-medium mt-4 mb-1">
              4.1 Active Account Data
            </h3>
            <p>
              Your personal information is retained as long as your account
              remains active and in use.
            </p>
            <h3 class="text-xl font-medium mt-4 mb-1">
              4.2 Inactive Account Policy
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>
                <strong>12-Month Inactivity Trigger:</strong> Data minimization
                begins after 12 months of inactivity
              </li>
              <li>
                <strong>Notification Process:</strong> Notifications sent at 9,
                10, and 11 months
              </li>
              <li>
                <strong>Data Removal:</strong>
                <ul class="list-disc pl-6 mt-1 space-y-1">
                  <li>Email and phone number deleted</li>
                  <li>Name replaced with a dummy username</li>
                  <li>No remaining PII</li>
                </ul>
              </li>
              <li>
                <strong>Account Reactivation:</strong> You may create a new
                account anytime
              </li>
            </ul>
            <h3 class="text-xl font-medium mt-4 mb-1">
              4.3 Data Deletion Rights
            </h3>
            <p>
              You may request deletion of your data at any time. Requests will
              be verified and processed within 30 days.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              5. Information Sharing and Disclosure
            </h2>
            <h3 class="text-xl font-medium mt-4 mb-1">
              5.1 No Third-Party Sharing
            </h3>
            <p>We do not sell or rent your personal data to third parties.</p>
            <h3 class="text-xl font-medium mt-4 mb-1">
              5.2 Limited Disclosure Scenarios
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>With your consent</li>
              <li>To Cirkle members (name, city)</li>
              <li>Legal requirements</li>
              <li>Service providers (under confidentiality agreements)</li>
              <li>Business transfers (with user notice)</li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">6. Data Security</h2>
            <h3 class="text-xl font-medium mt-4 mb-1">
              6.1 Technical Safeguards
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Encryption (SSL/TLS)</li>
              <li>Strict access controls</li>
              <li>Security audits</li>
              <li>Secure data centers</li>
            </ul>
            <h3 class="text-xl font-medium mt-4 mb-1">
              6.2 Administrative Safeguards
            </h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Employee privacy training</li>
              <li>Incident response plans</li>
              <li>Vendor security assessments</li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              7. Your Rights and Choices
            </h2>
            <ul class="list-disc pl-6 space-y-1">
              <li>Access and correct your personal data</li>
              <li>Request data download (portability)</li>
              <li>Manage communication preferences</li>
              <li>Request account deletion</li>
            </ul>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">8. Geographic Scope</h2>
            <h3 class="text-xl font-medium mt-4 mb-1">8.1 India Operations</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Information Technology Act, 2000</li>
              <li>IT (Security Practices and Procedures) Rules, 2011</li>
              <li>Personal Data Protection Bill (if applicable)</li>
            </ul>
            <h3 class="text-xl font-medium mt-4 mb-1">8.2 Data Localization</h3>
            <p>All Indian user data is stored locally per applicable laws.</p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              9. Cookies and Tracking Technologies
            </h2>
            <h3 class="text-xl font-medium mt-4 mb-1">9.1 Essential Cookies</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Session management</li>
              <li>Security features</li>
              <li>User authentication</li>
            </ul>
            <h3 class="text-xl font-medium mt-4 mb-1">9.2 Analytics</h3>
            <p>
              We use cookies and tools to analyze usage and improve services.
            </p>
            <h3 class="text-xl font-medium mt-4 mb-1">9.3 Cookie Management</h3>
            <p>
              You can control cookies through your browser. Some features may
              stop working if disabled.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">10. Children's Privacy</h2>
            <p>
              Our services are not for individuals under 18. If we find data
              from a child, we delete it immediately.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              11. Changes to This Privacy Policy
            </h2>
            <h3 class="text-xl font-medium mt-4 mb-1">11.1 Updates</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Email notifications</li>
              <li>Website notice</li>
              <li>In-app notifications</li>
            </ul>
            <h3 class="text-xl font-medium mt-4 mb-1">11.2 Acceptance</h3>
            <p>
              Continued use of our service means you accept the updated Privacy
              Policy.
            </p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">12. Contact Information</h2>
            <ul class="list-disc pl-6 space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:privacy@fundcirkle.com"
                  class="text-blue-600 underline"
                >
                  privacy@fundcirkle.com
                </a>
              </li>
              <li>Phone: 9711338003</li>
              <li>Address: B61, Tagore Garden Extension, New Delhi 27</li>
            </ul>
            <p>
              <strong>Data Protection Officer:</strong>{" "}
              <a
                href="mailto:dpo@fundcirkle.com"
                class="text-blue-600 underline"
              >
                dpo@fundcirkle.com
              </a>
            </p>
            <p>Response time: within 7 business days</p>
          </section>

          <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-2">
              13. Compliance and Certifications
            </h2>
            <p>
              We maintain high standards of privacy and regularly review
              compliance practices.
            </p>
            <p class="mt-4 mb-5">
              <strong>Acknowledgment:</strong> BBy using FundCirkle, you
              acknowledge that you have read, understood, and agree to be bound
              by this Privacy Policy.
            </p>
            <p class="text-sm text-gray-600">
              This Privacy Policy supersedes all previous versions.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default Privacy;
