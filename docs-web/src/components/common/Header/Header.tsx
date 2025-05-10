// components/header/Header.tsx
import { useState } from 'react';
import { Github, Moon, Sun, ChevronDown, LogIn, Star, GitFork, AlertCircle } from 'lucide-react';
import NavLinks from './NavLinks';
import Button from '../Button';
import logo from '../../../assets/images/logo.svg';

const Header = () => {
  const [isGitHubOpen, setIsGitHubOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <header className="bg-primary py-2 flex items-center justify-center">
    <div className="container mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Logo & Name */}
            <div className="flex items-center">
            <img 
                src={logo} 
                alt="Architext Logo" 
                className="w-30 h-30 object-contain" // Adjust size as needed
              />
              <span className="text-xl font-bold text-secondary">Architext</span>
            </div>

            {/* GitHub Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGitHubOpen(!isGitHubOpen)}
                className="flex items-center gap-1 text-secondary hover:text-accent transition"
              >
                <Github className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {isGitHubOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-primary border border-accent/20 rounded-lg shadow-lg py-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50"
                  >
                    <Star className="w-4 h-4" />
                    Star on GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50"
                  >
                    <GitFork className="w-4 h-4" />
                    Fork Repository
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Report Issues
                  </a>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-secondary hover:text-accent transition"
            >
              {isDarkMode ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            <NavLinks />
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              className="flex items-center gap-2"
              onClick={() => {/* Add login handler */}}
            >
              <LogIn className="w-5 h-5" />
              Login
            </Button>
          </div>
        </div>
      <div className="h-px bg-accent w-full mt-2"></div>
      </div>
    </header>
  );
};

export default Header;