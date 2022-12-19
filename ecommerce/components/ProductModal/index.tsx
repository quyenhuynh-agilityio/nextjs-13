"use client";
// Libraries
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Components
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Alert from "../Alert";
import Modal from "../Modal";

// Constants
import { FAILED_ADDING_DATA } from "@/constants/message";

// Services
import { addNewProduct } from "@/services/Products";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

const ProductModal = ({ isOpen, onClose, title }: PropsType) => {
  const router = useRouter();
  const toast = useToast();

  const [productName, setProductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productPhotoURL, setproductPhotoURL] = useState("");
  const [isRequired, setIsRequired] = useState("");
  const [isShowError, setIsShowError] = useState("");

  const productId = Math.floor(Math.random() * 100);
  const invalidURL = !productPhotoURL?.includes(
    "https://s3-alpha-sig.figma.com/img",
  );

  const handleSubmit = async () => {
    if (invalidURL) {
      setIsRequired("Please enter correctimage url!");
    } else {
      try {
        const newProduct = {
          id: `${productId}`,
          name: productName,
          price: parseFloat(productPrice),
          image: {
            src: productPhotoURL,
            alt: `${productName} ${productId}`,
            width: 330,
            height: 330,
          },
        };

        await addNewProduct({ product: newProduct });
        onClose();
        // Reference: https://beta.nextjs.org/docs/data-fetching/mutating
        // The Next.js team is working on a new RFC for mutating data in Next.js.
        //  This RFC has not been published yet.
        // For now, we recommend the following pattern:
        // You can mutate data inside the app directory with router.refresh().
        router.refresh();
        toast({ description: "A new product was added!", status: "success" });
        setIsShowError("");
      } catch (_) {
        setIsShowError(FAILED_ADDING_DATA);
      }
    }
  };

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      labelButton="Submit"
    >
      <FormControl>
        {isShowError && <Alert status="error" label={isShowError} />}
        <FormLabel>Product name:</FormLabel>
        <Input
          size={{ sm: "sm", md: "xl" }}
          variant="outline"
          value={productName || ""}
          onChange={(event) => setProductName(event.target.value)}
        />
        <FormLabel pt="10px">Product price:</FormLabel>
        <Input
          size={{ sm: "sm", md: "xl" }}
          variant="outline"
          type="number"
          value={productPrice || ""}
          onChange={(event) => setproductPrice(event.target.value)}
        />
        <FormLabel pt="10px">Product photo URL:</FormLabel>
        <Input
          size={{ sm: "sm", md: "xl" }}
          variant="outline"
          value={productPhotoURL || ""}
          onChange={(event) => setproductPhotoURL(event.target.value)}
        />
        <Text fontFamily="base" fontSize="sm" color="crimson" mt={1}>
          {isRequired}
        </Text>
      </FormControl>
    </Modal>
  );
};

export default ProductModal;
