"use client";

// Libraries
import { memo, Suspense } from "react";
import dynamic from "next/dynamic";
import { Box, Heading, SimpleGrid, Flex, Button } from "@chakra-ui/react";

// Components
import Card from "@/components/Card";
import Loading from "app/loading";
const DynamicProductModal = dynamic(() => import("../ProductModal"), {
  suspense: true,
});
const DynamicConfirmModal = dynamic(() => import("../ConfirmationModal"), {
  suspense: true,
});
import Notification from "@/components/Notification";
import Alert from "@/components/Alert";

// Types
import { ProductType } from "@/types/index";

import { EMPTY_PRODUCTS } from "@/constants/message";

type Props = {
  items: ProductType[];
  onOpenAddNewModal: () => void;
  onCloseAddNewModal: () => void;
  isOpenAddNewModal: boolean;
  onDelete: () => void;
  isShowError?: string;
  onOpenDeleteModal?: (id: string) => void;
  onCloseDeleteModal: () => void;
  isOpenDeleteModal: boolean;
};

const ProductList = ({
  items,
  onOpenAddNewModal,
  onCloseAddNewModal,
  isOpenAddNewModal,
  isShowError,
  onDelete,
  onOpenDeleteModal,
  onCloseDeleteModal,
  isOpenDeleteModal,
}: Props) => {
  return (
    <>
      {isShowError && <Alert status="error" label={isShowError} />}
      <Flex
        backgroundColor="textColor.100"
        my={30}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          as="h3"
          color="primary.main"
          pb={10}
          textAlign="center"
          fontSize={{ sm: "base", md: "4xl" }}
        >
          Enjoy our feature products
        </Heading>
        <Button w={200} variant="secondary" mb={30} onClick={onOpenAddNewModal}>
          Add New Product
        </Button>
        {/* Getting the rest items from products list except the fisrt 4 items */}
        {items?.length > 0 ? (
          <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={5} w={{ md: 1440 }}>
            {items?.length > 0 &&
              items?.slice(4)?.map((item: ProductType, index) => (
                <Box px={{ sm: 0, md: 20 }} key={index}>
                  <Card
                    item={item}
                    bgColor="textColor.100"
                    textColor="primary.main"
                    onConfirm={onOpenDeleteModal}
                  />
                </Box>
              ))}
          </SimpleGrid>
        ) : (
          <Notification label={EMPTY_PRODUCTS} />
        )}
      </Flex>
      {!!isOpenAddNewModal && (
        <Suspense fallback={<Loading />}>
          <DynamicProductModal
            title="Add New Product"
            isOpen={isOpenAddNewModal}
            onClose={onCloseAddNewModal}
          />
        </Suspense>
      )}
      {!!isOpenDeleteModal && (
        <Suspense fallback={<Loading />}>
          <DynamicConfirmModal
            title="Are sure to delete this product?"
            isOpen={isOpenDeleteModal}
            onClose={onCloseDeleteModal}
            onSubmit={onDelete}
            labelButton="Delete"
          />
        </Suspense>
      )}
    </>
  );
};

export default memo(ProductList);
