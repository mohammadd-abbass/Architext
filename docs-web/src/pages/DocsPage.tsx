import DocsLayout from '../layouts/DocsLayout';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DocsPage = () => {
    const { page } = useParams<{ page: string }>();
    const [content, setContent] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchMarkdownContent = async () => {
        try {
          const response = await import(`../content/docs/${page}.md`);
          console.log('Markdown file loaded:', response);
          const content = await response.markdown;
          setContent(content);
        } catch (error) {
          console.error('Error loading markdown file', error);
          setContent(null);
        }
      };
  
      fetchMarkdownContent();
    }, [page]);
  
    if (!content) {
      return <div>Loading...</div>;
    }
  
    return (
      <DocsLayout>
        <ReactMarkdown>{content}</ReactMarkdown>
      </DocsLayout>
    );
  };
    
  export default DocsPage;