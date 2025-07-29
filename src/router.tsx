import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Blog } from './pages/Blog/Blog';
import { CardItem } from './pages/CardItem/CardItem';
import { Favorites } from './pages/Favorites/Favorites';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/selected/:id',
        element: <CardItem />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);
