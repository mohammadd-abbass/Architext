import Button from "../../common/Button";

interface Message {
  content: string;
  isUser: boolean;
  json?: string;
}

interface ChatMessageProps {
  message: Message;
  onCopy?: (json: string) => void;
  onDownload?: (json: string) => void;
}

const ChatMessage = ({ message, onCopy, onDownload }: ChatMessageProps) => {
  return (
    <div
      className={`max-w-3xl mx-auto rounded-lg p-4 ${
        message.isUser
          ? "bg-accent/10 ml-auto border border-accent/20"
          : "bg-secondary/5 border border-secondary/20"
      }`}
    >
      <p className="whitespace-pre-wrap">{message.content}</p>

      {message.json && (
        <div className="mt-3 relative group">
          <pre className="p-4 rounded-lg bg-primary/90 text-secondary overflow-x-auto">
            <code>{message.json}</code>
          </pre>
          <div className="absolute top-2 right-2 flex gap-2">
            <Button
              variant="outline"
              className="text-sm px-3 py-1 hover:bg-accent hover:text-primary"
              onClick={() => onCopy?.(message.json!)}
            >
              Copy
            </Button>
            <Button
              variant="primary"
              className="text-sm px-3 py-1"
              onClick={() => onDownload?.(message.json!)}
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
