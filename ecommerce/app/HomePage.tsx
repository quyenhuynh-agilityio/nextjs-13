"use client";

// Libraries
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDisclosure, useToast } from "@chakra-ui/react";

// Components
import ProductList from "@/components/ProductList";
import Information from "@/components/Information";
import Introduction from "@/components/Introduction";
import Notification from "@/components/Notification";

// Services
import { deleteProduct } from "@/services/Products";

// Constants
import { EMPTY_PRODUCTS, FAILED_DELETING_DATA } from "@/constants/message";
import Pagination from "@/components/Pagination";

type Props = {
  products?: string;
};

const HomePage = ({ products }: Props) => {
  // Converting string to array object when reciving data from Server Component
  const data = products ? JSON.parse(products) : {};

  const router = useRouter();
  const toast = useToast();

  const addNewProductModal = useDisclosure();
  const deleteProductModal = useDisclosure();

  const [selectedId, setSelectedId] = useState("");
  const [isShowError, setIsShowError] = useState("");

  // Handle delete product by id
  const handleDelete = async () => {
    try {
      await deleteProduct({ id: selectedId });
      deleteProductModal.onClose();
      router.refresh();
      toast({ description: "This product was deleted!", status: "success" });
      setIsShowError("");
    } catch (_) {
      setIsShowError(FAILED_DELETING_DATA);
    }
  };

  // Handle open confirm modal to delete product
  const handleOpenDeleteModal = (id: string) => {
    deleteProductModal.onOpen();
    setSelectedId(id);
  };

  return (
    <>
      {products ? (
        <>
          <Information />
          <ProductList
            onOpenAddNewModal={addNewProductModal.onOpen}
            onCloseAddNewModal={addNewProductModal.onClose}
            isOpenAddNewModal={addNewProductModal.isOpen}
            onDelete={handleDelete}
            items={data}
            isShowError={isShowError}
            onOpenDeleteModal={handleOpenDeleteModal}
            onCloseDeleteModal={deleteProductModal.onClose}
            isOpenDeleteModal={deleteProductModal.isOpen}
          />
          <Pagination />
          <Introduction />
        </>
      ) : (
        <Notification label={EMPTY_PRODUCTS} />
      )}
    </>
  );
};

export default HomePage;
