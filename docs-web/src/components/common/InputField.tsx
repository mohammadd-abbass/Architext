import { ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
}

const InputField = ({ label, icon, ...props }: InputProps) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-accent">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/80">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 bg-primary/50 border border-accent/20 rounded-lg text-secondary focus:border-accent/50 focus:ring-1 focus:ring-accent/30 outline-none transition"
      />
    </div>
  </div>
);

export default InputField