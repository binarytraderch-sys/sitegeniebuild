import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import { RouteGuard } from '@/components/common/RouteGuard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { routes } from './routes';

// Routes that use their own full-page layout (no shared Navbar/Footer)
const STANDALONE_PREFIXES = ['/dashboard', '/payment-success', '/payment-cancel'];

function AppShell() {
  const location = useLocation();
  const isStandalone = STANDALONE_PREFIXES.some((prefix) =>
    location.pathname.startsWith(prefix)
  );

  return (
    <RouteGuard>
      {isStandalone ? (
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </RouteGuard>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <IntersectObserver />
          <AppShell />
          <Toaster />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
