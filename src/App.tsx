import { Provider } from 'react-redux';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
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
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </Provider>
  );
}
