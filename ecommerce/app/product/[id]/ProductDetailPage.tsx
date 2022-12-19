"use client";

// Components
import Notification from "@/components/Notification";
import ProductDetail from "@/components/ProductDetail";

// Constants
import { EMPTY_PRODUCT } from "@/constants/message";

type Props = {
  product?: string;
};

const ProductDetailPage = ({ product }: Props) => {
  // Converting string to object when reciving data from Server Component
  const data = product ? JSON.parse(product) : {};

  return (
    <>
      {product ? (
        <ProductDetail product={data} />
      ) : (
        <Notification label={EMPTY_PRODUCT} />
      )}
    </>
  );
};

export default ProductDetailPage;
