import SectionWrapper from '../../common/SectionWrapper';
import SectionTitle from '../../common/SectionTitle';
import Container from '../../common/Container';
import Vscode from '../../../assets/images/vs-code.svg';


const AvailableSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Currently on</SectionTitle>
      <div className="flex flex-col items-center justify-center">
        <Container className="max-w-30 text-center">
          <div className="flex flex-col items-center">
            <img src={Vscode} alt="" />
          </div>
        </Container>
        <p className="text-secondary/80 text-lg text-center my-10">
            Architext is currently available as a Visual Studio Code extension.<br />
            <span className="text-accent/80 text-center">Support for other editors coming soon.</span>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AvailableSection;