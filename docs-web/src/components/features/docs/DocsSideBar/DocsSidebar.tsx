import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
// import { NavLink } from 'react-router-dom';
import { sidebarSections, sidebarConfig } from './SideBarLinks';
import SidebarSection from './SidebarSection';

const DocsSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    sidebarConfig.initialOpenState
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 1024 && isOpen) {
        const sidebar = document.querySelector('.docs-sidebar');
        const toggleBtn = document.querySelector('#sidebar-toggle-btn');
        if (
          sidebar && !sidebar.contains(e.target as Node) &&
          toggleBtn && !toggleBtn.contains(e.target as Node)
        ) {
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

  const closeMobileSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isOpen && (
        <button
          id="sidebar-toggle-btn"
          className="fixed lg:hidden bottom-4 right-4 p-2 bg-accent text-primary rounded-full shadow-lg z-40 hover:scale-105 transition-transform"
          onClick={() => setIsOpen(true)}
          aria-label="Open documentation menu"
        >
          <BookOpen className="w-6 h-6" />
        </button>
      )}

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`docs-sidebar bg-primary w-64 border-r border-accent/20 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

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
            {sidebarSections.map((section) => (
              <SidebarSection
                key={section.key}
                sectionKey={section.key}
                title={section.title}
                Icon={section.icon}
                links={section.links}
                isOpen={openSections[section.key]}
                toggleSection={toggleSection}
                closeSidebar={closeMobileSidebar}
              />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DocsSidebar;