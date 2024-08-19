import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// importing pages
import AboutClasses from "./pages/AboutClasses";
import AboutMe from "./pages/AboutMe";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// importing layouts
import RootLayout from "./layouts/RootLayout";

///////////////

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="AboutMe" element={<AboutMe />} />
      <Route path="AboutClasses" element={<AboutClasses />} />
      <Route path="Booking" element={<Booking />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
