import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './pages/routes.jsx';
import { GlobalStyles } from './styles/global.jsx'
import Header from './components/header/index.jsx';
import { useState } from 'react';


import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {

  const [ theme, setTheme ] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light )
  };

  return (
    <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header toggleTheme={toggleTheme}/>
          <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
