"use client";

// Libraries
import dynamic from "next/dynamic";
import { memo, Suspense } from "react";

// Components
import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import Loading from "app/loading";
import Card from "@/components/Card";
import Notification from "@/components/Notification";
const DynamicConfirmModal = dynamic(() => import("../ConfirmationModal"), {
  suspense: true,
});
import Alert from "../Alert";

// Constants
import { EMPTY_PRODUCTS } from "@/constants/message";

// Types
import { ProductType } from "@/types/index";

type Props = {
  items: ProductType[];
  onDelete: () => void;
  isShowError?: string;
  onOpenDeleteModal?: (id: string) => void;
  onCloseDeleteModal?: () => void;
  isOpenDeleteModal?: boolean;
};

const Features = ({
  items,
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
        {items?.length > 0 ? (
          <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={5} w={{ md: 1440 }}>
            {/* Getting the first 4 items from products list to show at Features section */}
            {items?.slice(0, 4)?.map((item: ProductType) => (
              <Box px={{ sm: 0, md: 20 }} key={item.id}>
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

export default memo(Features);
