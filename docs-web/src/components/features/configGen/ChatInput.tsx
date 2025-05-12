import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

const ChatInput = ({
  input,
  onInputChange,
  onSend,
  textareaRef,
}: ChatInputProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
    
    if (textareaRef.current) {
      // Auto-resize without scrollbar
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
      className="border-t border-secondary/20 bg-primary/95 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto relative py-4 px-2">
        <div className="relative flex items-end shadow-sm">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            placeholder="Describe your project structure..."
            className="w-full min-h-[52px] bg-secondary/10 border border-secondary/30 rounded-2xl pl-4 pr-14 py-3.5 resize-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-secondary/60 overflow-y-auto
              /* Scrollbar hide */
              [scrollbar-width:none] /* Firefox */
              [-ms-overflow-style:none] /* IE/Edge */
              [&::-webkit-scrollbar]:hidden /* Chrome/Safari */"
            rows={1}
            style={{ maxHeight: '200px' }}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 bottom-2 p-2 rounded-xl bg-accent text-primary hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-center text-sm text-secondary/60 mt-3">
          Architext can make mistakes. Verify important information.
        </p>
      </div>
    </form>
  );
};

export default ChatInput;