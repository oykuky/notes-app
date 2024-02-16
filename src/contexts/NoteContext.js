import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    const notes = localStorage.getItem("notes");
    setNotes(JSON.parse(notes));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  const addNote = (title, note, value) => {
    setNotes([...notes, { id: uuidv4(), title, note, value }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  const sortedNotes = notes.sort((a, b) => (a.value < b.value ? 1 : -1));

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, sortedNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteContextProvider;
