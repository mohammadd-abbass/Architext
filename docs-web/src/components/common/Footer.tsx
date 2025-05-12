import { Link } from 'react-router-dom';
import { Github, Twitter, Code2, TerminalSquare, BookText, Settings2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t-2 border-accent mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TerminalSquare className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-accent">Architext</span>
            </div>
            <p className="text-secondary/80 text-sm">
              AI-powered architecture generator for VS Code
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:text-accent transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-accent transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>


          <div className="space-y-3">
            <h3 className="text-accent font-semibold mb-2">Product</h3>
            <nav className="space-y-2">
              <FooterLink to="/playground" icon={<Code2 className="w-4 h-4" />}>
                Playground
              </FooterLink>
              <FooterLink to="/docs/installation" icon={<BookText className="w-4 h-4" />}>
                Documentation
              </FooterLink>
              <FooterLink to="/config-generator" icon={<Settings2 className="w-4 h-4" />}>
                Config Generator
              </FooterLink>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-accent font-semibold mb-2">Resources</h3>
            <nav className="space-y-2">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/community">Community</FooterLink>
              <FooterLink to="/examples">Examples</FooterLink>
              <FooterLink to="/changelog">Changelog</FooterLink>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-accent font-semibold mb-2">Legal</h3>
            <nav className="space-y-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/license">License</FooterLink>
            </nav>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <span className="text-secondary/80">
              © {new Date().getFullYear()} Architext. All rights reserved.
            </span>
            <div className="flex gap-4">
              <button className="text-secondary/80 hover:text-accent transition">
                Status
              </button>
              <button className="text-secondary/80 hover:text-accent transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children, icon }: { to: string; children: React.ReactNode; icon?: React.ReactNode }) => (
    <Link
    to={to}
    className="flex items-center gap-2 text-secondary/80 hover:text-accent transition-colors text-sm"
    >
    {icon && <span className="text-accent">{icon}</span>}
    {children}
  </Link>
);

export default Footer;