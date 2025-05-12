import DocsLayout from '../layouts/DocsLayout';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DocsPage = () => {
  const { page } = useParams<{ page: string }>();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await import(`../content/docs/${page}.md`);
        const content = await response.markdown;
        setContent(content);
      } catch (error) {
        console.error('Error loading markdown file', error);
        setContent(null);
      }
    };

    fetchMarkdownContent();
  }, [page]);

  const components = {
    h2: ({ ...props }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
    ),
    h3: ({ ...props }) => (
      <h3 className="text-xl font-medium mt-6 mb-3" {...props} />
    ),
    p: ({ ...props }) => (
      <p className="mb-4 leading-relaxed" {...props} />
    ),
    hr: ({ ...props }) => (
      <hr className="my-8 border-t border-gray-200" {...props} />
    ),
    code: ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          PreTag="div"
          className="rounded-lg mb-6 mt-2"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-accent text-primary px-2 py-1 rounded text-sm font-bold" {...props}>
          {children}
        </code>
      );
    },
    ul: ({...props }) => (
      <ul className="list-disc pl-6 mb-6" {...props} />
    ),
    li: ({ ...props }) => (
      <li className="mb-2" {...props} />
    ),
  };

  if (!content) {
    return (
      <DocsLayout>
        <div className="text-center py-12 text-gray-500">Loading documentation...</div>
      </DocsLayout>
    );
  }

  return (
    <DocsLayout>
      <div className="prose max-w-4xl mx-auto px-4">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </DocsLayout>
  );
};

export default DocsPage;