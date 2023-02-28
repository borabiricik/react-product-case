import { PathRouteProps } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import ProductsPage from "../pages/Products";
interface IRoute extends PathRouteProps {
  title: string;
}

export const routes: IRoute[] = [
  { path: "/products", title: "Products", element: <ProductsPage /> },
  {
    path: "/products/:id",
    title: "Product Details",
    element: <ProductDetails />,
  },
  { path: "/checkout", title: "Checkout" },
];
