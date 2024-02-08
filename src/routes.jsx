import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { AppLayout } from "./layouts";

import { Home, IAProfile, Favorites, NewTool, Tools, NewCategory, Post } from "./pages";
import useAuthStore from "./stores/auth";
import Admin from "./pages/Admin/Admin";

function Routes() {
  const { getUser } = useAuthStore();
  const user = getUser();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='/favoritos' element={<Favorites />} />
          <Route
            path='/adicionar-ia'
            element={user?.type === "Admin" ? <NewTool /> : <Navigate to='/' />}
          />
          <Route
            path='/adicionar-categoria'
            element={user?.type === "Admin" ? <NewCategory /> : <Navigate to='/' />}
          />
          <Route path='/admin' element={user?.type === "Admin" ? <Admin /> : <Navigate to='/' />} />
          <Route path='/perfil-ia' element={<IAProfile />} />
          <Route path='/ferramenta/:name' element={<Tools />} />
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/post/:name' element={<Post />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
