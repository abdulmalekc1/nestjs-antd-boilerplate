import { createBrowserRouter } from "react-router-dom";
import { Guest } from "./auth/components/Guest";
import { Protected } from "./auth/components/Protected";
import { LoginPage } from "./auth/pages/LoginPage";
import { DashboardPage } from "./dashboard/pages/DashboardPage";
import { CreateProperty } from "./properties/pages/CreateProperty";
import { ListProperties } from "./properties/pages/ListProperties";
import { UpdateProperty } from "./properties/pages/UpdateProperty";
import { AdminLayout } from "./shared/layouts/AdminLayout";
import { CreateCategory } from "./categories/pages/CreateCategory";
import { ListCategories } from "./categories/pages/ListCategory";
import { UpdateCategory } from "./categories/pages/UpdateCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Guest>
        <LoginPage />
      </Guest>
    ),
  },
  {
    path: "/admin",
    element: (
      <Protected>
        <AdminLayout />
      </Protected>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "properties/create",
        element: <CreateProperty />,
      },
      {
        path: "properties",
        element: <ListProperties />,
      },
      {
        path: "properties/edit/:id",
        element: <UpdateProperty />,
      },
      {
        path: "categories/create",
        element: <CreateCategory />,
      },
      {
        path: "categories",
        element: <ListCategories />,
      },
      {
        path: "categories/edit/:id",
        element: <UpdateCategory />,
      },
    ],
  },
]);
