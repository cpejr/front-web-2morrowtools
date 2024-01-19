import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { AppLayout } from "./layouts";

import { Home, IAProfile, Favorites, NewTool, Tools, NewCategory, Blog } from "./pages";
import isAdm from "./utils/isAdm";
import useAuthStore from "./stores/auth";

function Routes() {
  const { getUser } = useAuthStore();
  const user = getUser();
  const userEmail = user?.email || null;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='/favoritos' element={<Favorites />} />
          <Route
            path='/adicionar-ia'
            element={isAdm(userEmail) ? <NewTool /> : <Navigate to='/' />}
          />
          <Route
            path='/adicionar-categoria'
            element={isAdm(userEmail) ? <NewCategory /> : <Navigate to='/' />}
          />
          <Route
            path='/blog'
            element={isAdm(userEmail) ? <Blog /> : <Navigate to='/' />}
          />
           
          <Route path='/perfil-ia' element={<IAProfile />} />
          <Route path='/ferramenta/:name' element={<Tools />} />
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
