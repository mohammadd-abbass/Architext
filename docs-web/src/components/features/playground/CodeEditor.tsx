import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  return (
    <Editor
      height="100%"
      defaultLanguage="typescript"
      defaultValue={code}
      onChange={(value) => onChange(value || '')}
      theme="vs-dark"
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        automaticLayout: true,
        scrollbar: {
          verticalSliderSize: 6,
          horizontalSliderSize: 6,
        },
        glyphMargin: true,
      }}
    />
  );
}

export default CodeEditor;