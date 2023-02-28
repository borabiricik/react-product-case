interface IRoute {
  path: string;
  title: string;
}

export const router: IRoute[] = [
  { path: "/products", title: "Products" },
  { path: "/products/:id", title: "Product Details" },
  { path: "/checkout", title: "Checkout" },
];
