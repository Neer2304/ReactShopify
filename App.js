import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Products } from './Products';
import { Error } from './Error';
import { Home } from './Home';
import { Orders } from './Order';
import { Layout } from './Layout';  

function App() {

  const router = createBrowserRouter([{

    path: "/",
    element: <Layout />,  
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:productid",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  }]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
