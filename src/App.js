import {
  Button,
  Heading,
  Stack,
  useDisclosure,
 
} from "@chakra-ui/react";
import React, { useContext } from "react";
import ModalContainer from "./components/AddNote";
import Note from "./components/Note";
import Container from "./Container";
import { NoteContext } from "./contexts/NoteContext";

const App = () => {
  const { sortedNotes } = useContext(NoteContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container bgSrc="notesbg.svg">
      <Heading color="#065E77" mt={12}>
        Notes App
      </Heading>
      <Button
        bgColor="#01BAEF"
        color="white"
        _hover={{ bgColor: "teal" }}
        onClick={onOpen}
        mt={8}
      >
        Not Ekle
      </Button>

      <Stack spacing={5} my={10}>
        {sortedNotes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            note={note.note}
            value={note.value}
          />
        ))}
      </Stack>

      <ModalContainer onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </Container>
  );
};

export default App;
