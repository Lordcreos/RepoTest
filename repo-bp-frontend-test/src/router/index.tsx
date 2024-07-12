import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
const ListView = lazy( () => import('../pages/poductListPage') );

export const router = createBrowserRouter([
  {
    path: "/products",
    element: <App />,
    children: [
      {
        path: "list",
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <ListView />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="products/list" />,
  },
  {
    path: "*",
    element: <div> 404 pagina no encontrada </div>,
  },
]);
