"use client";

import { getPages } from "@/utils/utilities";
import { List, ListItem } from "@chakra-ui/react";

type PropsType = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (value: number) => void;
  currentPage?: number;
};

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PropsType) => {
  const pageNumbers = getPages(totalPosts, postsPerPage);

  return (
    <List display="flex" justifyContent="center" py={10}>
      {pageNumbers?.map((number) => (
        <ListItem
          w={10}
          h={10}
          border="1px"
          borderColor="primary.100"
          textAlign="center"
          pt={2}
          borderRadius={20}
          mr={5}
          _hover={{ bg: "primary.100" }}
          backgroundColor={
            currentPage === number ? "primary.100" : "textColor.100"
          }
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </ListItem>
      ))}
    </List>
  );
};

export default Pagination;
