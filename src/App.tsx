import { Provider } from 'react-redux';
import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { ThemeContext } from './components/Context/ThemeContext';
import { store } from './redux/store';

export function App() {
  const [theme, setTheme] = useState(false);

  function handleToggleTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
        <Layout />
      </ThemeContext.Provider>
    </Provider>
  );
}
