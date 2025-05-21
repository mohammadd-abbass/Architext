
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '../../pages/LandingPage';
import { AuthPage } from '../../pages/AuthPage';
import DocsPage from '../../pages/DocsPage';
import CallbackPage from '../../pages/CallbackPage';
import Page404 from '../../pages/404Page';
import PlaygroundPage from '../../pages/PlaygroundPage';
import ConfigGenPage from '../../pages/ConfigGenPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/docs/quick-start" element={<DocsPage />} />
      <Route path="/docs/:page" element={<DocsPage />} />
      <Route path="/auth/callback" element={<CallbackPage />} />
      <Route path="*" element={<Page404 />} />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/config-generator" element={<ConfigGenPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
