import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

const EditNote = ({
  tempNote,
  tempValue,
  tempTitle,
  tempId,
  onClose,
  isOpen,
}) => {
  const toast = useToast();
  const { updateNote } = useContext(NoteContext);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const id = tempId;
  const [title, setTitle] = useState(tempTitle);
  const [note, setNote] = useState(tempNote);
  const [value, setValue] = useState(tempValue);

  const updatedNote = { id, title, note, value };

  const handleSumbit = (e) => {
    e.preventDefault();
    updateNote(id, updatedNote);
    toast({
      description: "Not Düzenlendi.",
      status: "warning",
      duration: 3000,
      isClosable: false,
    });

    onClose();
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Not Düzenle</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Başlık</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              ref={initialRef}
              placeholder="örn: Doğrum günü"
            />

            <FormLabel mt={4}>Not *</FormLabel>
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="örn: Emre -> 13 ağustos"
            />

            <FormLabel mt={4}>Önemi ({value})</FormLabel>
            <Slider
              value={value}
              onChange={(number) => setValue(number)}
              defaultValue={3}
              min={0}
              max={10}
              step={1}
            >
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={handleSumbit}
            type="submit"
            colorScheme="blue"
            mr={3}
          >
            Kaydet
          </Button>
          <Button onClick={onClose}>İptal</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditNote;
