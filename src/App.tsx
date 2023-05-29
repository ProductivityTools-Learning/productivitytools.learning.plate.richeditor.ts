import React from "react";
import { Plate, TEditableProps } from "@udecode/plate";

function App() {
  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return (
    <div className="App">
      <Plate editableProps={editableProps} />
    </div>
  );
}

export default App;
