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
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
      className="border-t border-secondary/20 p-4"
    >
      <div className="max-w-3xl mx-auto relative">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Describe your project structure..."
          className="w-full bg-secondary/5 border border-secondary/20 rounded-lg p-4 pr-16 resize-none focus:outline-none focus:border-accent/50"
          rows={1}
        />
        <button
          type="submit"
          className="absolute bottom-2 right-2 btn-primary px-4 py-2"
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;