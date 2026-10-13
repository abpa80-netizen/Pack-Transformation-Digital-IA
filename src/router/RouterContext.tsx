import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

interface RouterProviderProps {
  children: ReactNode;
  initialPath?: string;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children, initialPath }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') return window.location.pathname || '/';
    return '/';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Keep an in-app history entry so the phone's Back button doesn't leave the site.
    if (!window.history.state?.appNavigationGuard) {
      window.history.pushState({ appNavigationGuard: true }, '', window.location.href);
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      // Re-arm the guard after Back, keeping the single-page app open.
      window.history.pushState({ appNavigationGuard: true }, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (typeof window === 'undefined') return;

    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.location.href = to;
      return;
    }

    if (to.startsWith('#')) {
      document.getElementById(to.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const targetPath = to.split('#')[0] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ appRoute: true }, '', to);
      setCurrentPath(targetPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (to.includes('#')) {
      window.history.pushState({ appRoute: true }, '', to);
      document.getElementById(to.split('#')[1])?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <RouterContext.Provider value={{ currentPath, navigate }}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);
