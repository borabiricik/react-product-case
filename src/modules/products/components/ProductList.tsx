import ProductCard from "../../common/components/cards/Card";
import { useAppSelector } from "../../core/redux";

const ProductList = () => {
  const { products } = useAppSelector((state) => state.products);
  return (
    <div className="grid grid-cols-4 py-10 gap-5">
      {products?.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export { ProductList };
