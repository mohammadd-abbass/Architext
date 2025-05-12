import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SidebarSection({
  sectionKey,
  title,
  Icon,
  links,
  isOpen,
  toggleSection,
  closeSidebar
}: {
  sectionKey: string;
  title: string;
  Icon: React.ElementType;
  links: Array<{ name: string; path: string }>;
  isOpen: boolean;
  toggleSection: (key: string) => void;
  closeSidebar: () => void;
}) {
  return (
    <div>
      <button 
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center w-full text-left text-secondary hover:text-accent transition-colors"
      >
        <Icon className="w-5 h-5 mr-2" />
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 ml-auto" />
        ) : (
          <ChevronRight className="w-4 h-4 ml-auto" />
        )}
      </button>
      
      {isOpen && (
        <div className="ml-7 mt-2 space-y-1">
          {links.map((link) => (
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
              onClick={closeSidebar}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}