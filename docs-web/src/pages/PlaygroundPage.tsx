'use client';
import { useState, useEffect } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import CodeEditor from '../components/features/playground/CodeEditor';

const PlaygroundPage = () => {
  const [code, setCode] = useState<string>(
    '// Welcome to the VS Code Extension Playground!\n// Write your code here...\n'
  );
  const [output, setOutput] = useState<string>('');
  const [errors, setErrors] = useState<Error[]>([]);

  const processCode = (code: string) => {
    try {
      // Simulate extension processing
      const processedOutput = `Processed at ${new Date().toLocaleTimeString()}:\n\n${code}`;
      setOutput(processedOutput);
      setErrors([]);
    } catch (error) {
      setErrors([error as Error]);
    }
  };

  const handleRun = () => {
    processCode(code);
  };

  return (
    <PanelGroup direction="horizontal" className="h-screen bg-vscode-editor">
      <Panel defaultSize={60} className="flex flex-col">
        <div className="p-4 border-b border-vscode-gray">
          <div className="flex justify-between items-center">
            <h2 className="text-vscode-green font-mono text-lg">EDITOR</h2>
            <button
              onClick={handleRun}
              className="bg-vscode-blue hover:bg-blue-700 text-white font-mono px-4 py-2 rounded"
            >
              Run (Ctrl+Enter)
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <CodeEditor code={code} onChange={setCode} />
        </div>
      </Panel>

      <PanelResizeHandle className="w-2 bg-vscode-gray hover:bg-vscode-blue transition-colors" />

      <Panel defaultSize={40} className="flex flex-col bg-vscode-dark">
        <div className="p-4 border-b border-vscode-gray">
          <h2 className="text-vscode-green font-mono text-lg">OUTPUT</h2>
        </div>
        <div className="flex-1 p-4 font-mono text-sm overflow-auto">
          {errors.length > 0 ? (
            <div className="text-red-400 space-y-2">
              {errors.map((error, i) => (
                <pre key={i} className="whitespace-pre-wrap">
                  {error.toString()}
                </pre>
              ))}
            </div>
          ) : (
            <pre className="text-gray-300 whitespace-pre-wrap">{output}</pre>
          )}
        </div>
      </Panel>
    </PanelGroup>
  );
}

export default PlaygroundPage;