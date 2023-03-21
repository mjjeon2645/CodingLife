import { useDarkMode } from 'usehooks-ts';

import { Reset } from 'styled-reset';

import { ThemeProvider } from 'styled-components';

import GloablStyle from './styles/GlobalStyle';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

import Greeting from './components/Greeting';
import Switch from './components/Switch';
import Button from './components/Bwitch';

export default function App() {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  const theme = isDarkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GloablStyle />
      <Greeting />
      <Switch />
      <Button onClick={toggleDarkMode} active={isDarkMode}>
        Toggle DarkMode
      </Button>
    </ThemeProvider>
  );
}
