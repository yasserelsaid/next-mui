import { createContext } from 'react';
import { red } from '@mui/material/colors';

export const lightTheme = {
  palette: {
    primary: {
      main: '#027FFF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F3F6F9',
    },
    app: {
      bg: '#F3F6F9',
      fg: '#ffffff',
      ffg: '#F3F6F9',
      border: '#d7d7d7',
      borderFocused: '#a0a0a0',
      bg2: '#E7EBEF',
    },
    neutral: {
      main: '#7e7e7e',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#57A6FF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#020408',
    },
    app: {
      bg: '#020408',
      fg: '#161B22',
      ffg: '#0E1117',
      border: '#30363C',
      borderFocused: '#60666c',
      bg2: '#21262C',
    },
    neutral: {
      main: '#b7b7b7',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

const getThemeTokens = (mode) =>
  mode == 'light' ? { ...lightTheme } : { ...darkTheme };

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
export default getThemeTokens;
