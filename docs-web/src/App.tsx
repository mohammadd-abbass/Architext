import { Route, Routes } from 'react-router-dom';
import './assets/style/globals.css'
import DocsPage from './pages/DocsPage';
import LandingPage from './pages/LandingPage'
import { AuthPage } from './pages/AuthPage'
import PlaygroundPage from './pages/PlaygroundPage';
import BlogPage from './pages/BlogPage';
import ConfigGenPage from './pages/ConfigGenPage';
import Page404 from './pages/404Page';
import ProtectedRoute from './components/routes/ProtectedRoute';
import CallbackPage from './pages/CallbackPage';
 
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/docs/quick-start" element={<DocsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/docs/:page" element={<DocsPage />} />
        <Route path="/auth/callback" element={<CallbackPage />} />
        <Route path="*" element={<Page404 />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/config-generator" element={<ConfigGenPage />} />
        </Route>
      </Routes>
  );
};

export default App
