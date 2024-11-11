import React from "react";
import NoteView from "./NoteView";
import Main from "./Main";
//notes
const Notes = ({
  selectedNote,
  isMobile,
  display,
  setDisplay,
  noteBtnClick
}) => {
  return (
    <React.Fragment>
      {selectedNote && selectedNote.notes ? (
        <NoteView
          id={selectedNote.id}
          name={selectedNote.name}
          color={selectedNote.color}
          notes={selectedNote.notes}
          isMobile={isMobile}
          display={display}
          setDisplay={setDisplay}
        />
      ) : (
        <Main noteBtnClick={noteBtnClick}  isMobile={isMobile} />
      )}
    </React.Fragment>
  );
};

export default Notes;
