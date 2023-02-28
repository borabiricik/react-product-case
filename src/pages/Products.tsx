import { useEffect, useState } from "react";
import { getProducts } from "../modules/products/redux/productsReducer";
import { useAppDispatch, useAppSelector } from "../modules/core/redux";
import { Loading } from "../modules/common/components/loaders/Loading";
import { ProductList } from "../modules/products/components/ProductList";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!isLoading && products) {
    return <ProductList />;
  }
  return <Loading />;
};

export default ProductsPage;
