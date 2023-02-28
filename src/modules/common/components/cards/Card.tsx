import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../products/redux/productsReducer";

interface IProductCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  product: IProduct;
}

const ProductCard = ({
  children,
  className = "",
  product,
  ...props
}: IProductCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <Link
      to={`/products/${product.id}`}
      onClick={handleClick}
      className={classNames(
        "col-span-1 border-2 rounded-[4px] p-2 flex flex-col justify-between",
        className
      )}
    >
      <img
        src={product.image}
        alt=""
        className="w-full max-h-[170px] object-contain"
      />
      <div className="pb-10 flex flex-col">
        <span className="text-sm text-left">{product.title}</span>
        <span className="text-sm text-left">${product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
