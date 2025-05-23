import { useCallback, useEffect, useRef, useState } from 'react';
import CodeEditor from '../components/features/playground/CodeEditor';
import Container from '../components/common/Container';
import Header from '../components/common/Header/Header';
import usePlayground from '../hooks/usePlayground';

const shortcutHints = [
  { keys: ['Ctrl', 'Alt', 'C'], description: 'Comment code function' },
  { keys: ['Ctrl', 'Alt', 'O'], description: 'Calculate complexity' },
  // { keys: ['Ctrl', 'Alt', 'A'], description: 'Analyze code' },
];

const languageOptions = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
];

const Playground = () => {
  const { 
    currentCode,
    // analyzeCode,
    commentCode,
    checkComplexity,
    updateCode,
    // isAnalyzing,
    isCommenting,
    isCheckingComplexity,
    error
  } = usePlayground();
  const [language, setLanguage] = useState('typescript');
  const [code, setCode] = useState(currentCode);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shortcutsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCode(currentCode);
  }, [currentCode]);

  const handleAnalysis = useCallback(async (type: 'comment' | 'complexity' | 'analyze') => {
    try {
      let modifiedCode;
      switch(type) {
        case 'comment':
          modifiedCode = await commentCode(code, language);
          break;
        case 'complexity':
          modifiedCode = await checkComplexity(code, language);
          break;
        // case 'analyze':
        //   modifiedCode = await analyzeCode(code, language);
        //   break;
      }
      if (modifiedCode !== undefined) {
        updateCode(modifiedCode);
      } else {
        console.error('Modified code is undefined');
      }
    } catch (error) {
      console.error('Error during analysis:', error);
    }
  }, [code, language, commentCode, checkComplexity, updateCode]);

  const handleExtensionShortcut = (action: string) => {
    setActiveHint(action);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveHint(null), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        try {
          eval(code);
        } catch (err) {
          console.error(err);
          alert(`Error: ${err}`);
        }
      }

      if (e.ctrlKey && e.altKey) {
        e.preventDefault();
        const actionMap: Record<string, 'comment' | 'complexity' | 'analyze'> = {
          'c': 'comment',
          'o': 'complexity',
          // 'a': 'analyze'
        };
        const action = actionMap[e.key.toLowerCase()];
        if (action) {
          handleExtensionShortcut(action);
          handleAnalysis(action);
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (shortcutsRef.current && !shortcutsRef.current.contains(e.target as Node)) {
        setShowShortcuts(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [code, language, handleAnalysis]);

  const loading = isCommenting || isCheckingComplexity;

  return (
    <main className="section-padding min-h-screen bg-primary text-secondary flex flex-col items-center justify-center">
      <Header />
      <Container className="space-y-6 w-[90vw]">
        <header className="flex justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">Playground</h1>
          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-secondary-5 rounded-lg px-3 py-2 text-sm focus:outline-none"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="relative" ref={shortcutsRef}>
              <button
                onClick={() => setShowShortcuts(!showShortcuts)}
                className="p-2 hover:bg-secondary-5 rounded-lg transition-colors"
                aria-label="Keyboard shortcuts"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-secondary-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {showShortcuts && (
                <div className="absolute right-0 top-12 bg-primary border border-border rounded-lg p-4 w-64 shadow-lg z-10">
                  <h3 className="text-lg font-semibold mb-3">Shortcuts</h3>
                  <div className="space-y-3">
                    {shortcutHints.map((hint, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          {hint.keys.map((key, i) => (
                            <kbd
                              key={i}
                              className="px-2 py-1 bg-secondary-5 rounded text-sm font-medium flex items-center"
                            >
                              {key}
                            </kbd>
                          ))}
                        </div>
                        <span className="text-sm text-secondary-2 flex-1">
                          {hint.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="h-[70vh] rounded-xl overflow-hidden border border-border bg-muted relative">
          <CodeEditor 
            code={code} 
            onChange={(value) => {
              setCode(value);
              updateCode(value);
            }}
          />
          
          {loading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {activeHint && (
            <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-md border border-border animate-fadeIn">
              <span className="text-sm">
                {activeHint === 'comment' && 'Code commented 🔗'}
                {activeHint === 'complexity' && 'Complexity calculated ⚡'}
                {/* {activeHint === 'analyze' && 'Code analyzed 🔍'} */}
              </span>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default Playground;