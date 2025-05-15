import { useState, useRef, useEffect } from 'react';
import ChatMessage from '../components/features/configGen/ChatMessages';
import ChatInput from '../components/features/configGen/ChatInput';
import Header from '../components/common/Header/Header';
import useAssistant from '../hooks/useAssistant';
import { v4 as uuidv4 } from 'uuid';
import { downloadJson, copyJson } from '../utils/jsonUtils';


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
      id: uuidv4(),
      content: 'Hello! Describe your project structure and I\'ll generate the .arch.json file for you.\nExamples:\n• "Next.js project with components in src/components"\n• "Python project with tests directory and no __pycache__"',
      isUser: false,
      createdAt: new Date()
    }
  ]);

  const { generateConfig } = useAssistant();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      content: input,
      isUser: true,
      createdAt: new Date()
    };

    const generatingMessage: Message = {
      id: uuidv4(),
      content: 'Generating...',
      isUser: false,
      createdAt: new Date()
    };

    try {
      setMessages(prev => [...prev, userMessage, generatingMessage]);
      setInput('');

      const response = await generateConfig(input);
      const result = response?.result || '';
      
      setMessages(prev => prev.map(msg => 
        msg.id === generatingMessage.id 
          ? { ...msg, content: '', json: result }
          : msg
      ));
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === generatingMessage.id 
          ? { ...msg, content: error as string, json: undefined }
          : msg
      ));
    }
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