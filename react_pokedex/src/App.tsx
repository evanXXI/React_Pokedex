import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import PokemonHomePage from "./pages/PokemonHomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<PokemonHomePage />} />
      <Route path="/pokemonDetails" element={<PokemonDetailsPage />} />
      <Route path="/NotFound" element={<NotFoundPage />} />
    </Route>
  )
);

const App: React.FC = () => {
  useEffect(() => {
    const rootElement = document.getElementById("root");

    rootElement && rootElement.classList.add("bg-dark");
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
