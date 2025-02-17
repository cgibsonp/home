import React, { useState } from 'react';
import Header from '../components/Sections/Header';
import Footer from '../components/Sections/Footer';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const MondayNightGroup: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-50 mt-16">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Monday Night Group</h1>
          <h2 className="text-2xl text-gray-600">Developed by Chris Gibson</h2>
        </section>

        <section className="mb-8 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-semibold">Support Contact</h3>
          <p className="text-gray-700">For support, please contact us at:</p>
          <a href="mailto:cgibsonp@gmail.com" className="text-blue-600 hover:underline">
            cgibsonp@gmail.com
          </a>
          <p className="text-gray-700 mt-2">Address:</p>
          <p className="text-gray-700">810 Oak Meadow Dr, Franklin, TN 37064-9998</p>
        </section>

        <section className="mb-8 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-semibold">FAQs or Troubleshooting Guide</h3>
          <div className="space-y-4">
            {[
              { question: 'How do I sign up and create an account?', answer: 'To sign up, download the Monday Night Group app from the App Store. Open the app, tap Sign Up, and enter your name, email, and password.' },
              { question: 'How do I reset my password?', answer: 'On the login screen, tap Forgot Password? Enter your registered email, and we\'ll send you a reset link.' },
              { question: 'How do I track chapter readings?', answer: 'The app includes a reading tracker where the group admin can assign chapters.' },
              { question: 'How do I add or manage events?', answer: 'Admins can create events under the Events tab. Tap Add Event, enter the details, and save. Members can see available events.' },
              { question: 'How can I update my contact information?', answer: 'To update your name or email, delete your account and re-sign up.' },
              { question: 'Can I receive notifications for upcoming events or readings?', answer: 'Not at this time.' },
              { question: 'Why can\'t I log in to my account?', answer: 'Double-check that you\'re using the correct email and password. If you\'ve forgotten your password, use the Forgot Password option to reset it. If issues persist, contact support.' },
              { question: 'What should I do if the app crashes or freezes?', answer: 'Close and reopen the app. Restart your device. Check the App Store for updates. If the issue continues, report it to support with details about your device and app version.' },
              { question: 'What data does the app collect?', answer: 'We collect minimal user data such as name, email, and group membership to facilitate group communication. Your data is never shared with third parties.' },
              { question: 'How is my personal information protected?', answer: 'We use encrypted storage and secure authentication to protect your information. You can read our full Privacy Policy below.' },
              { question: 'Can I delete my account and data?', answer: 'Yes. To delete your account, go to Settings > Delete Account. This will remove all your personal data from our system.' },
              { question: 'How do I report a bug or request a new feature?', answer: 'You can also email us at our support email above.' },
              { question: 'Who do I contact for technical support?', answer: 'For assistance, email us at our support email above.' },
            ].map((faq, index) => (
              <div key={index} className="border-b">
                <div
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-lg font-medium text-gray-800">{faq.question}</h4>
                  {openFAQ === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                  )}
                </div>
                {openFAQ === index && (
                  <p className="text-gray-600 pl-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-semibold">Privacy Policy</h3>
          <p className="text-gray-700">
            We value your privacy. This app collects the following data:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>User name and email for support purposes.</li>
            <li>Usage data to improve app performance.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            For more details, please read our full
            <a 
              href="https://www.termsfeed.com/live/bfbe4173-d916-41e9-afb2-a6d6e5b54d3e" 
              className="text-blue-600 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            > Privacy Policy
            </a>
          </p>
        </section>

        <section className="mb-8 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-semibold">App Store Link (TBD)</h3>
          <a
            href="" // Replace with actual link
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MondayNightGroup; 