import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AppLayout } from "./layouts";

import { Home, IAProfile, Favorites, NewTool } from "./pages";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/adicionar-ia' element={<NewTool />} />
          <Route path='/perfil-ia' element={<IAProfile />} />
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
