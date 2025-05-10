// components/sections/TestimonialSection.tsx
import SectionWrapper from '../../common/SectionWrapper';
import SectionTitle from '../../common/SectionTitle';
import Container from '../../common/Container';
import Me from '../../../assets/images/Mohammad Abbas.jpg'

const TestimonialSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Why We Built Architext</SectionTitle>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Quote Container */}
        <Container className="flex-grow max-w-4xl">
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-3xl text-secondary/80 italic">
              "Architext was born from years of frustration with legacy codebases. 
              We wanted to create a tool that helps developers maintain clean 
              architecture from day one, ensuring projects scale gracefully 
              without accumulating technical debt."
            </p>
            <div className="text-lg">
              <p className="font-bold text-accent">Mohammad Abbass</p>
              <p className="text-secondary/80">Creator of Architext</p>
            </div>
          </blockquote>
        </Container>

        {/* Circular Photo */}
        <div className="flex-shrink-0">
          <img
            src={Me} 
            alt="Mohammad Abbass"
            className="w-64 h-64 rounded-full object-cover border-4 "
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSection;