import { Copy } from "lucide-react";
import Container from "../components/common/Container";

interface CopyCommandProps {
  isCopied: boolean;
  onCopy: () => void;
}

export const CopyCommand = ({ isCopied, onCopy }: CopyCommandProps) => (
    <Container className="flex items-center gap-4 w-full md:w-auto backdrop-blur-sm">
      <button onClick={onCopy} className="text-secondary hover:text-accent transition">
        {isCopied ? <span className="text-green-500">✓</span> : <Copy className="w-5 h-5" />}
      </button>
      <code className="text-secondary font-mono text-sm md:text-base">
        npm init @architext/config@latest
      </code>
    </Container>
  );