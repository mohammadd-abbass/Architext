import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionWrapper from '../../common/SectionWrapper';
import SectionTitle from '../../common/SectionTitle';

const faqs = [
  {
    question: "How does Architext integrate with existing projects?",
    answer: "Architext analyzes your project structure without modifying existing code. It runs as a background process in VS Code, providing real-time feedback through the editor's interface."
  },
  {
    question: "What languages does Architext support?",
    answer: "Currently focusing on TypeScript/JavaScript with plans to expand to Python, Java, and C# in upcoming releases."
  },
  {
    question: "Can I customize architecture rules?",
    answer: "Yes, Architext provides a configuration file where you can define custom architectural patterns, layer boundaries, and validation rules."
  },
  {
    question: "How does the AI analysis work?",
    answer: "Our AI engine uses static code analysis combined with machine learning models trained on best practices to provide contextual suggestions."
  }
];

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <SectionTitle>FAQs</SectionTitle>
      <div className="space-y-6 max-w-[80vw] mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border-b border-secondary/20 pb-6 last:border-b-0"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-start gap-4 group"
            >
              <h3 className="text-xl font-medium text-secondary text-left flex-grow transition-colors group-hover:text-secondary/80">
                {faq.question}
              </h3>
              <span className="text-secondary/80 mt-1">
                {activeIndex === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </span>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'mt-4 opacity-100 max-h-[500px]'
                  : 'opacity-0 max-h-0'
              }`}
            >
              <p className="text-secondary/80 text-lg">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FaqsSection;