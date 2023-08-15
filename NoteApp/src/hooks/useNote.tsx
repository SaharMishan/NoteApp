import { useOutletContext } from "react-router-dom";
import { Note } from "../types/NoteDataTypes";

export function useNote() {
  return useOutletContext<Note>();
}
