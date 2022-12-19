// true (default): Dynamic segments not included in generateStaticParams are generated on demand.
// false: Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

// Libraries
import { Suspense } from "react";

// Component
import ProductDetailPage from "./ProductDetailPage";
import Loading from "app/loading";

// Types
import { ProductType } from "@/types/index";

// Services
import { fetchProductById, fetchProducts } from "@/services/Products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function getProductList() {
  const res = await fetchProducts({ fetchingMethod: "SSG" });

  return res;
}

export async function generateStaticParams() {
  const products = await getProductList();
  if (!products?.length && products?.status === 404) {
    return notFound();
  }

  return products?.map((item: ProductType) => ({
    id: item.id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = params || "";
  const product = await fetchProductById({ id, fetchingMethod: "ISR" });

  if (Object.keys(product)?.length === 0) {
    return notFound();
  }

  // Converting data to string then passing from Server Component to Client Component
  const data = JSON.stringify(product);

  return (
    <Suspense fallback={<Loading />}>
      <ProductDetailPage product={data} />
    </Suspense>
  );
}
