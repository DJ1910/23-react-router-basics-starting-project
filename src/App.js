//import { createRoutesFromElements, Route} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/homepage";
import ProductsPage from "./Pages/productspage";
import RootPage from "./Pages/rootPage";
import ErrorPage from "./Pages/errorPage";
import ProductDetailPage from "./Pages/productDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //path: ''
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// Alternate method of defining routes

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
