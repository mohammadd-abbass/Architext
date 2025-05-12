import { Route, Routes } from 'react-router-dom';
import './assets/style/globals.css'
// import DocsLayout from './layouts/DocsLayout'
import DocsPage from './pages/DocsPage';
// import LandingPage from './pages/LandingPage'
// import MainLayout from './layouts/MainLayout'
// import LandingPage from './pages/LandingPage'
// import { AuthPage } from './pages/AuthPage'
 
const App = () => {
  return (
      <Routes>
        <Route path="/docs/:page" element={<DocsPage />} />
      </Routes>
  );
};

export default App
