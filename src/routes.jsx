import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AppLayout } from "./layouts";

import { Home, IAProfile, Login, Register, Profile } from "./pages";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
          <Route path='/perfil' element={<Profile />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/perfil-ia' element={<IAProfile />} />
          <Route path='/login' element={<Login />} />
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
