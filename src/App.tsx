import React from "react";
import { Plate, PlateProvider, TEditableProps } from "@udecode/plate";
import { createMyPlugins, MyEditor, MyPlatePlugin, MyValue } from "./typescript/plateTypes";
import { Toolbar } from './toolbar/Toolbar';
import { ToolbarButtons } from './ToolbarButtons';



function App() {
  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return (
    <div className="App">
      <PlateProvider<MyValue>>
        <Toolbar>
          <ToolbarButtons />
        </Toolbar>
        <Plate editableProps={editableProps}></Plate>
      </PlateProvider>
    </div>
  );
}

export default App;
