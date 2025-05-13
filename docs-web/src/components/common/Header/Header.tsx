import { useState, useEffect } from "react";
import {
  Github,
  ChevronDown,
  LogIn,
  Star,
  GitFork,
  AlertCircle,
  Menu,
  User,
  LogOut,
} from "lucide-react";
import NavLinks from "./NavLinks";
import Button from "../Button";
import logo from "../../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { GITHUB_CONFIG } from "../../../constants/constants";

const Header = () => {
  const navigate = useNavigate();
  const [isGitHubOpen, setIsGitHubOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { LINKS } = GITHUB_CONFIG;


  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMediumScreen(width >= 768 && width < 1024);
      if (width >= 1024) setIsMobileMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button
              className="lg:hidden text-secondary hover:text-accent transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div 
              className="flex items-center flex-shrink-0 cursor-pointer" 
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Architext Logo"
                className="w-20 h-20 lg:w-30 lg:h-30 object-contain transition-all lg:-mx-8 -mx-6"
              />
              <span className="text-xl font-bold text-secondary">
                Architext
              </span>
            </div>

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
                    href={LINKS.STAR}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50"
                  >
                    <Star className="w-4 h-4" />
                    Star on GitHub
                  </a>
                  <a
                    href={LINKS.FORK}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50"
                  >
                    <GitFork className="w-4 h-4" />
                    Fork Repository
                  </a>
                  <a
                    href={LINKS.ISSUES}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Report Issues
                  </a>
                </div>
              )}
            </div>
          </div>

          <nav
            className={`hidden lg:flex items-center ${
              isMediumScreen ? "gap-4" : "gap-15"
            }`}
          >
            <NavLinks />
          </nav>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-1 text-secondary hover:text-accent transition"
                  aria-haspopup="true"
                  aria-expanded={isProfileOpen}
                >
                  <User className="w-5 h-5" />
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48    rounded-lg shadow-lg py-2 z-50">
                    <Button
                    variant="outline"
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                className="px-4 py-2"
                variant="primary"
                onClick={() => navigate('/auth')}
              >
                <LogIn className="w-5 h-5 md:hidden" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-primary border-t border-accent/20 z-50">
            <div className="px-4 sm:px-6 py-4 space-y-6">
              <nav className="flex flex-col gap-3">
                <NavLinks />
              </nav>

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
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isGitHubOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isGitHubOpen && (
                  <div className="mt-2 space-y-2 pl-8">
                    <a
                      href={LINKS.STAR}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50 rounded-lg"
                    >
                      <Star className="w-4 h-4" />
                      Star Repository
                    </a>
                    <a
                      href={LINKS.FORK}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50 rounded-lg"
                    >
                      <GitFork className="w-4 h-4" />
                      Fork Project
                    </a>
                    <a
                      href={LINKS.ISSUES}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary hover:bg-primary/50 rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Report Issue
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="h-px bg-accent w-full" />
      </div>
    </header>
  );
};

export default Header;