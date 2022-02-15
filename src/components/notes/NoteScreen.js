import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";
export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm(note);

  const { body, title, id } = values;
  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset();
      activeId.current = note.id;
    }
  }, [note, reset]);
  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [values, dispatch]);

  const hadnleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          name="title"
          type="text"
          placeholder="some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happened today"
          className="notes_textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes_image">
            <img src={note.url} alt="Imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={hadnleDelete}>
        Delete
      </button>
    </div>
  );
};
