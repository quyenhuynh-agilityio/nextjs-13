// Constants

import { requestHeaders } from "@/constants/variables";

// Types
import { FetchOptionsType, Methods, RequestPropsType } from "@/types/index";

const API_ENDPOINT = process.env.API_ENDPOINT || "";

export const basicFetch = async ({
  endpoint,
  fetchingMethod,
}: FetchOptionsType) => {
  let response;

  switch (fetchingMethod) {
    case "ISR":
      // eslint-disable-next-line no-console
      console.log("ISR");

      // This request should be cached with a lifetime of 5 seconds.
      // Similar to `getStaticProps` with the `revalidate` option.
      response = await fetch(endpoint, { next: { revalidate: 10 } });
      break;
    case "SSR":
      // This request should be refetched on every request.
      // Similar to `getServerSideProps`.
      response = await fetch(endpoint, { cache: "no-store" });
      break;
    case "SSG":
      // This request should be cached until manually invalidated.
      // Similar to `getStaticProps`.
      // `force-cache` is the default and can be omitted.
      response = await fetch(endpoint, { cache: "force-cache" });
      break;
    default:
    // response.json({ message: "Welcome to API Routes!" });
  }

  if (!response?.ok) {
    return response;
  }

  const data = await response?.json();

  return data;
};

// Fetch product list
export const fetchProducts = async ({
  fetchingMethod,
}: {
  fetchingMethod?: Methods;
}) => {
  return await basicFetch({
    endpoint: API_ENDPOINT,
    fetchingMethod,
  });
};

// Fetch product by id
export const fetchProductById = async ({
  id,
  fetchingMethod,
}: {
  id: string;
  fetchingMethod?: Methods;
}) => {
  try {
    return await basicFetch({
      endpoint: `${API_ENDPOINT}/${id}`,
      fetchingMethod,
    });
  } catch (error) {
    return error;
  }
};

export const addNewProduct = async ({
  product,
  endpoint = API_ENDPOINT,
}: RequestPropsType) => {
  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(product),
    headers: requestHeaders,
  });

  const result = res.json();
  return result;
};

export const deleteProduct = async ({
  id,
  endpoint = `${API_ENDPOINT}/${id}`,
}: RequestPropsType) => {
  const res = await fetch(endpoint, {
    method: "DELETE",
    headers: requestHeaders,
  });

  return res;
};
