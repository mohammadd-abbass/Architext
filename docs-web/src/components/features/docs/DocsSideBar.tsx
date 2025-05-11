// components/docs/DocsSidebar.tsx
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Code, Settings, BookOpen, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const DocsSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    gettingStarted: true,
    apiReference: false,
    configuration: false
  });

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 1024 && isOpen) {
        const sidebar = document.querySelector('.docs-sidebar');
        if (sidebar && !sidebar.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close sidebar on window resize above 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const sidebarLinks = {
    gettingStarted: [
      { name: 'Installation', path: '/docs/installation' },
      { name: 'Quick Start', path: '/docs/quick-start' },
      { name: 'Core Concepts', path: '/docs/core-concepts' }
    ],
    apiReference: [
      { name: 'Architecture Rules', path: '/docs/api/rules' },
      { name: 'Validation API', path: '/docs/api/validation' },
      { name: 'Analysis Tools', path: '/docs/api/analysis' }
    ],
    configuration: [
      { name: 'Config File', path: '/docs/config/file' },
      { name: 'Custom Rules', path: '/docs/config/custom-rules' },
      { name: 'Plugins', path: '/docs/config/plugins' }
    ]
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`docs-sidebar bg-primary w-64 border-r border-accent/20 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        {/* Mobile Close Button */}
        <button
          className="lg:hidden absolute top-2 right-2 p-2 text-secondary hover:text-accent"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-4 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full bg-secondary/5 border border-accent/20 rounded-lg px-4 py-2 text-secondary placeholder-secondary/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
              onClick={() => window.innerWidth < 1024 && setIsOpen(true)}
            />
          </div>

          {/* Navigation Sections */}
          <nav className="space-y-2">
            {/* Getting Started */}
            <div>
              <button 
                onClick={() => toggleSection('gettingStarted')}
                className="flex items-center w-full text-left text-secondary hover:text-accent transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="font-medium">Getting Started</span>
                {openSections.gettingStarted ? (
                  <ChevronDown className="w-4 h-4 ml-auto" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
              
              {openSections.gettingStarted && (
                <div className="ml-7 mt-2 space-y-1">
                  {sidebarLinks.gettingStarted.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => 
                        `block px-2 py-1 text-sm rounded-md transition-colors ${
                          isActive 
                            ? 'bg-accent/10 text-accent' 
                            : 'text-secondary/80 hover:text-secondary hover:bg-secondary/5'
                        }`
                      }
                      onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* API Reference */}
            <div>
              <button 
                onClick={() => toggleSection('apiReference')}
                className="flex items-center w-full text-left text-secondary hover:text-accent transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                <span className="font-medium">API Reference</span>
                {openSections.apiReference ? (
                  <ChevronDown className="w-4 h-4 ml-auto" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
              
              {openSections.apiReference && (
                <div className="ml-7 mt-2 space-y-1">
                  {sidebarLinks.apiReference.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => 
                        `block px-2 py-1 text-sm rounded-md transition-colors ${
                          isActive 
                            ? 'bg-accent/10 text-accent' 
                            : 'text-secondary/80 hover:text-secondary hover:bg-secondary/5'
                        }`
                      }
                      onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Configuration */}
            <div>
              <button 
                onClick={() => toggleSection('configuration')}
                className="flex items-center w-full text-left text-secondary hover:text-accent transition-colors"
              >
                <Settings className="w-5 h-5 mr-2" />
                <span className="font-medium">Configuration</span>
                {openSections.configuration ? (
                  <ChevronDown className="w-4 h-4 ml-auto" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
              
              {openSections.configuration && (
                <div className="ml-7 mt-2 space-y-1">
                  {sidebarLinks.configuration.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => 
                        `block px-2 py-1 text-sm rounded-md transition-colors ${
                          isActive 
                            ? 'bg-accent/10 text-accent' 
                            : 'text-secondary/80 hover:text-secondary hover:bg-secondary/5'
                        }`
                      }
                      onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DocsSidebar;