import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import Case from './component/Case/Case';
import Ram from './component/Ram/Ram';
import Gpu from './component/Gpu/Gpu';
import Motherboard from './component/Motherboard/Motherboard';
// import Games from './component/Games/Games';
import Monitors from './component/Monitors/Monitors';
import Keyboards from './component/Keyboards/Keyboards';
import Mouse from './component/Mouse/Mouse';
import Accessories from './component/Accessories/Accessories';
import Register from './component/Register/Register';
import Profile from './component/Profile/Profile';

import ProductDetails from './component/ProductDetails/ProductDetails';
import ProdDetailsShop from './component/ProdDetailsShop/ProdDetailsShop';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Register /> },
      { path: 'home', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'case', element: <Case /> },
      { path: 'ram', element: <Ram /> },
      { path: 'gpu', element: <Gpu /> },
      { path: 'motherboard', element: <Motherboard /> },
      // { path: 'games', element: <Games /> },
      { path: 'monitors', element: <Monitors /> },
      { path: 'keyboards', element: <Keyboards /> },
      { path: 'mouse', element: <Mouse /> },
      { path: 'accessories', element: <Accessories /> },
      { path: 'register', element: <Register /> },
      { path: 'profile', element: <Profile /> },

      { path: 'product-details/:id', element: <ProductDetails /> },
      { path: 'shop-product-details/:id', element: <ProdDetailsShop /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={routes} />;
}