import { useState, useRef, useEffect } from 'react';
import ChatMessage from '../components/features/configGen/ChatMessages';
import ChatInput from '../components/features/configGen/ChatInput';
import Header from '../components/common/Header/Header';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  json?: string;
  createdAt: Date;
}

const ConfigGenPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      content: 'Hello! Describe your project structure and I\'ll generate the .arch.json file for you.\nExamples:\n• "Next.js project with components in src/components"\n• "Python project with tests directory and no __pycache__"',
      isUser: false,
      createdAt: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const mockAIResponse = (prompt: string): Message => ({
    id: crypto.randomUUID(),
    content: '',
    isUser: false,
    json: `{
  "rules": [
    {
      "path": "${prompt.toLowerCase().includes('react') ? 'src/components/**/*.tsx' : 'src/**/*'}",
      "description": "Auto-generated structure",
      "required": true,
      "constraints": {
        ${prompt.toLowerCase().includes('test') ? '"testFiles": { "coverageThreshold": 80 }' : '"allowedExtensions": [".ts", ".tsx"]'}
      }
    }
  ]
}`,
    createdAt: new Date()
  });

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: input,
      isUser: true,
      createdAt: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      content: 'Generating...',
      isUser: false,
      createdAt: new Date()
    }]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev.slice(0, -1),
        mockAIResponse(userMessage.content)
      ]);
    }, 1000);
  };

  const copyJson = (json: string) => {
    navigator.clipboard.writeText(json);
  };

  const downloadJson = (json: string) => {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'architecture.arch.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [input, messages]);

  return (
    <div className="flex flex-col h-screen bg-primary text-secondary pt-16">
        <Header/>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onCopy={copyJson}
            onDownload={downloadJson}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
        textareaRef={textareaRef as React.RefObject<HTMLTextAreaElement>}
      />
    </div>
  );
};

export default ConfigGenPage;