import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout and 404 import
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import Fallback from "./components/Fallback";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy-load when importing the pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const TransactionTypeBought = lazy(
  () => import("./pages/TransactionTypeBought")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Fallback />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Fallback />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/transaction",
    element: (
      <Suspense fallback={<Fallback />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Fallback />}>
            <Transaction />
          </Suspense>
        ),
      },
      // {
      //   path: "search",
      //   element: (
      //     <Suspense fallback={<Fallback />}>
      //       <TransactionSearch />
      //     </Suspense>
      //   ),
      // },
      {
        path: "highestBought",
        element: (
          <Suspense fallback={<Fallback />}>
            <TransactionTypeBought />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
