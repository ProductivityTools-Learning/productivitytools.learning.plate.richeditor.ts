import React, { useMemo } from "react";
import { Plate, createParagraphPlugin, createHeadingPlugin, PlateProvider, TEditableProps ,createPlateUI} from "@udecode/plate";
import { createMyPlugins, MyEditor, MyPlatePlugin, MyValue } from "./typescript/plateTypes";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarButtons } from "./ToolbarButtons";

function App() {
  const plugins = useMemo(
    () =>
      createMyPlugins([createParagraphPlugin(), createHeadingPlugin()], {
        components: createPlateUI(),
      }),
    []
  );

  const editableProps: TEditableProps = {
    placeholder: "Type...",
  };
  return (
    <div className="App">
      <PlateProvider<MyValue> plugins={plugins}>
        <Toolbar>
          <ToolbarButtons />
        </Toolbar>
        <Plate editableProps={editableProps}></Plate>
      </PlateProvider>
    </div>
  );
}

export default App;
