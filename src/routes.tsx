import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout and 404 import
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import Fallback from "./components/Fallback";

// Lazy-load when importing the pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const TransactionTypeBought = lazy(
  () => import("./pages/TransactionTypeBought")
);
const AddTransaction = lazy(() => import("./pages/AddTransaction"));
const Product = lazy(() => import("./pages/Product"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

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
      {
        path: "highestBought",
        element: (
          <Suspense fallback={<Fallback />}>
            <TransactionTypeBought />
          </Suspense>
        ),
      },
      {
        path: "add",
        element: (
          <Suspense fallback={<Fallback />}>
            <AddTransaction />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/product",
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
            <Product />
          </Suspense>
        ),
      },
      {
        path: "add",
        element: (
          <Suspense fallback={<Fallback />}>
            <AddProduct />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
