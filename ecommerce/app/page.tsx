// Libraries
import { Suspense } from "react";

// Components
import HomePage from "./HomePage";
import Loading from "./loading";

// Constant
import { fetchProducts } from "@/services/Products";
import { notFound } from "next/navigation";

async function getData() {
  const response = await fetchProducts({ fetchingMethod: "ISR" });

  return response;
}

export default async function Page() {
  const products = await getData();
  if (!products?.length && products?.status === 404) {
    notFound();
  }

  // Converting data to string then passing from Server Component to Client Component
  const data = JSON.stringify(products);

  return (
    <Suspense fallback={<Loading />}>
      <HomePage products={data} />
    </Suspense>
  );
}
