import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeloader";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";
import NotFoundPage from "./components/NotFoundPage";
import Loading from "./components/Loading";

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader:detailsLoader,
      },
      {
         path: "*",
        element: <NotFoundPage />,
      },
      
    ],
  },
]);


function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}


export default App;
