import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUpLoading } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active } = useSelector((state) => state.notes);

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUpLoading(file));
    }
  };
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  return (
    <div className="notes__appbar">
      <span>June 8, 2020</span>
      <input
        id="fileSelector"
        name="file"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
