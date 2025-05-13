import { NavLink } from 'react-router-dom';

export default function NavLinks() {
  const links = [
    { name: 'Docs', path: '/docs/installation' },
    { name: 'Playground', path: '/playground' },
    { name: 'Config Generator', path: '/config-generator' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-accent ${
              isActive ? 'text-accent' : 'text-secondary/80'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}