import { Route, Routes } from 'react-router-dom';
import './assets/style/globals.css'
// import DocsLayout from './layouts/DocsLayout'
import DocsPage from './pages/DocsPage';
// import LandingPage from './pages/LandingPage'
// import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import { AuthPage } from './pages/AuthPage'
import PlaygroundPage from './pages/PlaygroundPage';
import BlogPage from './pages/BlogPage';
 
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/docs/quick-start" element={<DocsPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/docs/:page" element={<DocsPage />} />
      </Routes>
  );
};

export default App
