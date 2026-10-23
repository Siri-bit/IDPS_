import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'blue';

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (t: ColorTheme) => void;
  themeConfig: {
    name: string;
    primaryBg: string;
    primaryDarkBg: string;
    primaryMediumBg: string;
    accentBg: string;
    accentText: string;
    accentBorder: string;
    headerGradient: string;
    cardBorderHover: string;
    badgeBg: string;
    badgeText: string;
    buttonPrimary: string;
    buttonSecondary: string;
  };
}

const ROYAL_BLUE_CONFIG: ThemeContextType['themeConfig'] = {
  name: 'Royal Academic Blue & Gold',
  primaryBg: '#133568', // Rich Royal Scholastic Blue
  primaryDarkBg: '#0B1D38', // Deep Oxford Midnight Blue
  primaryMediumBg: '#1D4ED8', // Vibrant Royal Accent
  accentBg: '#F59E0B', // Rich Warm Gold
  accentText: '#1E40AF',
  accentBorder: '#93C5FD',
  headerGradient: 'from-[#0B1D38] via-[#133568] to-[#1E40AF]',
  cardBorderHover: 'hover:border-blue-600',
  badgeBg: 'bg-blue-50',
  badgeText: 'text-blue-950',
  buttonPrimary: 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950',
  buttonSecondary: 'bg-[#133568] hover:bg-[#0B1D38] text-white',
};

const THEME_CONFIGS: Record<ColorTheme, ThemeContextType['themeConfig']> = {
  blue: ROYAL_BLUE_CONFIG
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default directly to Royal Blue as requested!
  const [theme, setThemeState] = useState<ColorTheme>('blue');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = (t: ColorTheme) => {
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig: THEME_CONFIGS[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
