import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  return (
    <Editor
  height="100%"
  language="typescript"
  value={code}
  onChange={(value) => onChange(value || '')}
  theme="vs-light"
  options={{
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    automaticLayout: true,
    scrollBeyondLastLine: false,
    glyphMargin: false,
    scrollbar: {
      verticalSliderSize: 6,
      horizontalSliderSize: 6,
    },
  }}
/>

  );
}

export default CodeEditor;