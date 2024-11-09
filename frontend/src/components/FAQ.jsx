import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can Psychobeings help me with my mental health?',
      answer:
        'Psychobeings offers a range of mental health services, including individual and group counseling sessions. Our professionals provide personalized support to help you manage and improve your mental health.',
    },
    {
      question: 'What types of counseling services do you offer?',
      answer:
        'We offer various counseling services, such as individual therapy, family therapy, and specialized programs for issues like anxiety, depression, trauma, and addiction.',
    },
    {
      question: 'How do I schedule an appointment?',
      answer:
        'You can schedule an appointment by visiting our website, using our online booking system, or calling our office. Our staff will work with you to find a convenient time.',
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'Yes, we accept most insurance plans. Our team can help you verify coverage and provide information on any out-of-pocket costs.',
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer:
        'If you need to cancel or reschedule, please inform us at least 24 hours in advance to accommodate other clients in need.',
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16 sm:py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2 sm:pb-4">
              <button
                className="w-full flex justify-between items-center py-2 sm:py-3 text-left text-base sm:text-lg lg:text-xl font-medium hover:text-primary transition-colors"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 sm:px-6 lg:px-8 py-2 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
