import { useState, useEffect } from 'react';
import { 
  Github, 
  Moon, 
  Sun, 
  ChevronDown, 
  LogIn, 
  Star, 
  GitFork, 
  AlertCircle, 
  Menu 
} from 'lucide-react';
import NavLinks from './NavLinks';
import Button from '../Button';
import logo from '../../../assets/images/logo.svg';

const Header = () => {
  const [isGitHubOpen, setIsGitHubOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMediumScreen(width >= 768 && width < 1024);
      if (width >= 1024) setIsMobileMenuOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-primary py-2 flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-secondary hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo & Name */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img 
                src={logo} 
                alt="Architext Logo" 
                className="w-20 h-20 lg:w-30 lg:h-30 object-contain transition-all"
              />
              <span className="text-xl font-bold text-secondary">Architext</span>
            </div>

            {/* GitHub Dropdown (Desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setIsGitHubOpen(!isGitHubOpen)}
                className="flex items-center gap-1 text-secondary hover:text-accent transition"
                aria-haspopup="true"
                aria-expanded={isGitHubOpen}
              >
                <Github className="w-5 h-5" />
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {isGitHubOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-primary border border-accent/20 rounded-lg shadow-lg py-2 z-50">
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

            {/* Theme Toggle (Desktop) */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-secondary hover:text-accent transition hidden lg:block"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Center Navigation (Desktop) */}
          <nav className={`hidden lg:flex items-center ${isMediumScreen ? 'gap-4' : 'gap-15'}`}>
            <NavLinks />
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3"
              onClick={() => {/* Add login handler */}}
            >
              <LogIn className="w-5 h-5 md:hidden" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-primary border-t border-accent/20 z-50">
            <div className="px-4 sm:px-6 py-4 space-y-6">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-3">
                <NavLinks />
              </nav>

              {/* Mobile GitHub Dropdown */}
              <div className="border-t border-accent/20 pt-4">
                <button
                  onClick={() => setIsGitHubOpen(!isGitHubOpen)}
                  className="w-full flex items-center justify-between text-secondary hover:text-accent transition px-4 py-2"
                  aria-expanded={isGitHubOpen}
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isGitHubOpen ? 'rotate-180' : ''}`} />
                </button>

                {isGitHubOpen && (
                  <div className="mt-2 space-y-2 pl-8">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50 rounded-lg"
                    >
                      <Star className="w-4 h-4" />
                      Star Repository
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50 rounded-lg"
                    >
                      <GitFork className="w-4 h-4" />
                      Fork Project
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50 rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Report Issue
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Theme Toggle */}
              <div className="border-t border-accent/20 pt-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="w-full flex items-center gap-2 text-secondary hover:text-accent transition px-4 py-2"
                >
                  {isDarkMode ? (
                    <>
                      <Moon className="w-5 h-5" />
                      <span className="text-sm">Light Theme</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-5 h-5" />
                      <span className="text-sm">Dark Theme</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Border */}
        <div className="h-px bg-accent w-full " />
      </div>
    </header>
  );
};

export default Header;