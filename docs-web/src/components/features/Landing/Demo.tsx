import SectionWrapper from '../../common/SectionWrapper';
import SectionTitle from '../../common/SectionTitle';
import demo from '../../../assets/images/demo.png'

const DemoSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>See It in Action</SectionTitle>
      
      <div className="max-w-4xl mx-auto">

          <div className="rounded-lg overflow-hidden border-1 border-secondary/20 ">
            {/* Placeholder image - replace with GIF later */}
            <img
              src={demo}
              alt="Architext extension demo"
              className="w-full h-auto object-cover"
            />
          </div>
      </div>
    </SectionWrapper>
  );
};

export default DemoSection;