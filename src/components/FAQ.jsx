import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqs = [
  {
    question: "Who is eligible for a Commission?",
    answer:
      "All of our recruiters receive commission based on the plan they subscribed. You can see our subscription plans in pricing page. For more related information, you can contact us.",
  },
  { question: "Is it possible for anyone to become a recruiter on your platform?", answer: "" },
  { question: "Do you provide more commission for big volume placements?", answer: "" },
  { question: "Can students apply to Entrily directly?", answer: "" },
  { question: "How do you keep a high quality VISA application process?", answer: "" },
  { question: "How will you safeguard my students’ information?", answer: "" },
  { question: "I require access to institutions not listed in your database. What options do you have?", answer: "" },
  { question: "Can I trust that your course and institution information is up to date?", answer: "" },
  { question: "Do you have details about scholarships?", answer: "" },
  { question: "Can you help me guide my recently recruited counsellors?", answer: "" },
  { question: "Some students have highly complicated applications. Can you assist me?", answer: "" },
];

function FAQItem({ faq, index, openIndex, toggleFAQ }) {
  return (
    <div className="border-bottom pb-2 mb-2">
      <button
        onClick={() => toggleFAQ(index)}
        className="btn btn-link text-decoration-none text-primary w-100 text-start d-flex justify-content-between align-items-center"
      >
        {faq.question}
        <span>{openIndex === index ? "▲" : "▼"}</span>
      </button>
      {openIndex === index && faq.answer && (
        <p className="mt-2 text-muted">{faq.answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} openIndex={openIndex} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
