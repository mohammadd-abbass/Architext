import { useState } from "react";
import { Mail, Lock, User, Github } from "lucide-react";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import Container from "../../common/Container"; 

interface AuthFormProps {
  isLogin: boolean;
  toggleAuthMode: () => void;
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
  error: string | null;
  isLoading: boolean;
}

type AuthFormData = {
  email: string;
  password: string;
  name?: string;
};

export const AuthForm = ({
  isLogin,
  toggleAuthMode,
  onSubmit,
  error,
}: AuthFormProps) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container className="w-full max-w-md mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-secondary">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-secondary/80 text-center">
          {isLogin ? "Sign in to continue" : "Join our developer community"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-accent bg-primary/50 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <InputField
          label="Email"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          icon={<Mail className="w-5 h-5" />}
        />

        {!isLogin && (
          <InputField
            label="Username"
            type="text"
            placeholder="Choose a username"
            value={formData.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            icon={<User className="w-5 h-5" />}
          />
        )}

        <InputField
          label="Password"
          type="password"
          placeholder={isLogin ? "Enter your password" : "Create a password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          icon={<Lock className="w-5 h-5" />}
        />

        <Button type="submit" variant="primary" className="w-full">
          {isLogin ? "Sign In" : "Create Account"}
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-accent/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-primary text-secondary/80">or</span>
          </div>
        </div>

        <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2">
          <Github className="w-5 h-5" />
          Continue with GitHub
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-secondary/80">
        {isLogin ? "New user? " : "Already have an account? "}
        <button
          onClick={toggleAuthMode}
          className="text-accent hover:underline font-medium"
        >
          {isLogin ? "Create account" : "Sign in"}
        </button>
      </p>
    </Container>
  );
};
