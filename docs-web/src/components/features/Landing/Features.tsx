import { Folder, BrainCircuit, HeartPulse, FileText } from 'lucide-react';
import SectionWrapper from '../../common/SectionWrapper';
import SectionTitle from '../../common/SectionTitle';
import Container from '../../common/Container';

const features = [
  {
    icon: Folder,
    title: "Folder Architecture",
    description: "Checks folder structure across the app and enforces architectural patterns in real-time.",
    shortcut: "Ctrl + Alt + R / ⌘ + ⌥ + R"
  },
  {
    icon: BrainCircuit,
    title: "AI Powered Analysis",
    description: "Get intelligent code reviews with context-aware suggestions for improvements and optimizations.",
    shortcut: "Ctrl + Alt + A / ⌘ + ⌥ + A"
  },
  {
    icon: HeartPulse,
    title: "Complexity Insights",
    description: "Automatic Big O notation calculation with performance optimization recommendations.",
    shortcut: "Ctrl + Alt + O / ⌘ + ⌥ + O"
  },
  {
    icon: FileText,
    title: "Auto-Documentation",
    description: "Automatically generate comprehensive comments and architecture diagrams.",
    shortcut: "Ctrl + Alt + C / ⌘ + ⌥ + C"
  }
];

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  shortcut: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, shortcut }) => (
  <Container className="flex-shrink-0 w-80 h-96 p-6 flex flex-col group hover:bg-secondary/5 transition-colors">
    <div className="mb-4 text-secondary">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold text-accent mb-4">{title}</h3>
    <p className="text-secondary/80 text-lg flex-grow mb-4">{description}</p>
    <div className="bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-mono w-fit mt-auto">
      {shortcut}
    </div>
  </Container>
);

const FeaturesSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Features</SectionTitle>
      <div className="pb-8">
        <div className="flex overflow-x-auto pb-8 gap-4 px-4 md:px-8 scrollbar-hide">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;