import {
  Hero,
  Navbar,
  About,
  Careers,
  Security,
  SignUp,
  Login,
} from "./components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Hero />} > 
      
       </Route>
      <Route path="about" element={<About />} />
      <Route path="careers" element={<Careers />} />
      <Route path="security" element={<Security />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Route>
  ),
);

function App() {
  return (
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>
  );
}

export default App;
