import { useState } from 'react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    question: 'What services does Aman Global Enterprises provide?',
    answer:
      'We offer network infrastructure, CCTV and surveillance systems, access control, Wi-Fi and wireless solutions, IT support, AMC contracts, and complete security integrations for offices, enterprises, and institutions.',
  },
  {
    question: 'Is the free trial session really free?',
    answer:
      'Yes. Our free trial session is a no-obligation consultation where our experts assess your requirements and recommend the best solutions. Simply call us or message on WhatsApp to schedule.',
  },
  {
    question: 'How do I get a quotation for my project?',
    answer:
      'Fill out the quotation form on this page with your project details, or contact us directly. We typically respond within 24 hours with a tailored estimate based on your scope and requirements.',
  },
  {
    question: 'Do you provide installation and after-sales support?',
    answer:
      'Absolutely. We handle professional installation, configuration, testing, and ongoing maintenance. Our team also offers AMC (Annual Maintenance Contract) for long-term peace of mind.',
  },
  {
    question: 'How long does a typical installation take?',
    answer:
      'Timelines depend on project size. Small office setups may take 1–2 days, while larger enterprise deployments can take a week or more. We provide a clear schedule during your consultation.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We serve businesses and organizations across the region. Contact us with your location and requirements — we will confirm availability and arrange an on-site visit if needed.',
  },
];

/**
 * Frequently asked questions with expandable accordion items.
 */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="section section--alt faq" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p>Quick answers to common questions about our services and process.</p>
        </header>

        <div className="faq__list fade-in fade-in-delay-1">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article key={item.question} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <h3 className="faq__question">
                  <button
                    id={buttonId}
                    type="button"
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
