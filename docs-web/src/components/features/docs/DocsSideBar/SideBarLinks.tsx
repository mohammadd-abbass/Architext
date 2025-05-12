import { BookOpen, Code, Settings } from 'lucide-react';

export const sidebarSections = [
  {
    key: 'gettingStarted',
    title: 'Getting Started',
    icon: BookOpen,
    links: [
      { name: 'Installation', path: '/docs/installation' },
      { name: 'Quick Start', path: '/docs/quick-start' },
      { name: 'Core Concepts', path: '/docs/core-concepts' }
    ]
  },
  {
    key: 'apiReference',
    title: 'API Reference',
    icon: Code,
    links: [
      { name: 'Architecture Rules', path: '/docs/api-rules' },
      { name: 'Validation API', path: '/docs/validation' },
      { name: 'Analysis Tools', path: '/docs/analysis' }
    ]
  },
  {
    key: 'configuration',
    title: 'Configuration',
    icon: Settings,
    links: [
      { name: 'Config File', path: '/docs/config-file' },
      { name: 'Custom Rules', path: '/docs/custom-rules' },
      { name: 'Plugins', path: '/docs/plugins' }
    ]
  }
];

export const sidebarConfig = {
  initialOpenState: {
    gettingStarted: true,
    apiReference: false,
    configuration: false
  }
};