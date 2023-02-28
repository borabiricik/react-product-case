import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../modules/common/components/buttons/Button";
import { Loading } from "../modules/common/components/loaders/Loading";
import { useAppDispatch, useAppSelector } from "../modules/core/redux";
import { getSingleProduct } from "../modules/products/redux/productsReducer";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentProduct, isLoading } = useAppSelector(
    (state) => state.products
  );
  useEffect(() => {
    id ? dispatch(getSingleProduct(id)) : navigate("/products");
  }, [dispatch, id, navigate]);

  if (!isLoading && currentProduct) {
    return (
      <div className="flex justify-center py-10 w-1/2 mx-auto">
        <div className="flex items-center gap-x-4 ">
          <img
            className="max-h-[400px] border-2 rounded-md  "
            src={currentProduct?.image}
            alt=""
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl">{currentProduct.title} </h1>
            <p className="text-sm">{currentProduct.description} </p>
            <p className="text-xl">${currentProduct.price} </p>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    );
  } else return <Loading />;
};

export default ProductDetails;
