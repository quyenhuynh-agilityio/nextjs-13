"use client";

import { List, ListItem } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = () => {
  return (
    <List display="flex" justifyContent="end">
      <ListItem className="pagination-item">
        <ChevronLeftIcon />
      </ListItem>
      <ListItem className="pagination-item">1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
      <ListItem>4</ListItem>
      <ListItem>
        <ChevronRightIcon />
      </ListItem>
    </List>
  );
};

export default Pagination;
