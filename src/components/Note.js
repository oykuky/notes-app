import {
  Flex,
  Text,
  Heading,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import EditNote from "./EditNote";

const Team = ({ note, value, title, id }) => {
  const { deleteNote } = useContext(NoteContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSumbit = (e) => {
    e.preventDefault();
    deleteNote(id);
    toast({
      description: "Not Silindi.",
      status: "error",
      duration: 3000,
      isClosable: false,
    });
  };
  return (
    <Flex
      pt="10px"
      pb="45px"
      px="20px"
      borderRadius="15px"
      border="5px solid #C3F2FF"
      w={[300, 450, 600]}
      h="auto"
      minH="125px"
      bgColor="#E6F8FD"
      direction="column"
      position="relative"
    >
      <Heading size="sm" w="90%">
        {title}
      </Heading>
      <Text
        textAlign="center"
        fontSize="9px"
        color="#fff"
        bgColor="teal"
        padding="2px"
        width="45px"
        borderRadius="10px"
        position="absolute"
        right="1"
        top="1"
      >
        önemi: {value}
      </Text>
      <Text
        noOfLines={4}
        fontSize={{ base: "12px", md: "14px", lg: "14px" }}
        mt="3px"
      >
        {note}
      </Text>

      <Button
        right="2"
        bottom="2"
        position="absolute"
        w={14}
        bgColor="#E5212D"
        color="#fff"
        h={8}
        fontSize="sm"
        onClick={handleSumbit}
      >
        Sil
      </Button>
      <Button
        right="70px"
        bottom="2"
        position="absolute"
        w={14}
        bgColor="#20D79E"
        color="#fff"
        h={8}
        fontSize="sm"
        onClick={onOpen}
      >
        Düzenle
      </Button>
      <EditNote
        tempId={id}
        tempTitle={title}
        tempNote={note}
        tempValue={value}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </Flex>
  );
};

export default Team;
