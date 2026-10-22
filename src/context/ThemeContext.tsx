import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'blue' | 'navy' | 'emerald';

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

const THEME_CONFIGS: Record<ColorTheme, ThemeContextType['themeConfig']> = {
  blue: {
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
  },
  navy: {
    name: 'Midnight Navy & Gold',
    primaryBg: '#0F2344',
    primaryDarkBg: '#07152B',
    primaryMediumBg: '#1E3A8A',
    accentBg: '#EAB308',
    accentText: '#0F2344',
    accentBorder: '#FDE047',
    headerGradient: 'from-[#07152B] via-[#0F2344] to-[#1A3866]',
    cardBorderHover: 'hover:border-indigo-600',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-950',
    buttonPrimary: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950',
    buttonSecondary: 'bg-[#0F2344] hover:bg-[#07152B] text-white',
  },
  emerald: {
    name: 'Heritage Forest Green & Gold',
    primaryBg: '#0F4C3A',
    primaryDarkBg: '#092F24',
    primaryMediumBg: '#15803D',
    accentBg: '#F59E0B',
    accentText: '#0F4C3A',
    accentBorder: '#86EFAC',
    headerGradient: 'from-[#092F24] via-[#0F4C3A] to-[#166534]',
    cardBorderHover: 'hover:border-emerald-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-950',
    buttonPrimary: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950',
    buttonSecondary: 'bg-[#0F4C3A] hover:bg-[#092F24] text-white',
  }
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
