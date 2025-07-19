import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./routes/Layout";

import HomePage from "./routes/Homepage";
import AboutUsPage from "./routes/AboutUsPage";
import ContactPage from "./routes/ContactPage"; // Correct typo if needed
import SEOPage from "./routes/SEOPage";
import GeoServicesPage from "./routes/GeoServicesPage";
import GoogleLocalServicesPage from "./routes/GoogleService";

const colors = {
  white: "#FFFFFF",
  lightGray: "#F5F5F5",
  black: "#000000",
  green: "#00B000",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // includes Navbar and Outlet
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/seo",
        element: <SEOPage />,
      },
      {
        path: "/seo/geo-services",
        element: <GeoServicesPage colors={colors} />,
      },
      {
        path: "/seo/google-local-services",
        element: <GoogleLocalServicesPage colors={colors}/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
