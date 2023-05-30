import React, { useMemo } from "react";
import {
  createBasicElementsPlugin,
  createExitBreakPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  Plate,
  PlateProvider,
  TEditableProps
} from '@udecode/plate';


import { plateUI } from './common/plateUI';

import { createMyPlugins, MyEditor, MyPlatePlugin, MyValue } from "./typescript/plateTypes";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarButtons } from "./ToolbarButtons";
import { resetBlockTypePlugin } from './reset-node/resetBlockTypePlugin';
import { softBreakPlugin } from "./soft-break/softBreakPlugin";

function App() {
  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          createBasicElementsPlugin(),
          createResetNodePlugin(resetBlockTypePlugin),
          createSoftBreakPlugin(softBreakPlugin),
          
        ],
        {
          components: plateUI,
        }
      ),
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
