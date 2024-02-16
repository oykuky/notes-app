import { Flex } from "@chakra-ui/react";
import React from "react";

const Container = ({ bgSrc, children }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      backgroundImage={`url(${bgSrc})`}
      backgroundRepeat="repeat-x"
    >
      {children}
    </Flex>
  );
};

export default Container;
