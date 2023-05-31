import React, { useMemo } from "react";
import {
  createBasicElementsPlugin,//h1, quote, code
  createResetNodePlugin,//h1, quote, code
  createSoftBreakPlugin,//h1, quote, code
  Plate,
  PlateProvider,
  TEditableProps,
  createNormalizeTypesPlugin,//forced layout
  createTrailingBlockPlugin,//forced layout
  ELEMENT_H1,//forced layout
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  CodeBlockElement,
  createExitBreakPlugin,
  createHeadingPlugin
} from '@udecode/plate';

import { trailingBlockPlugin } from './trailing-block/trailingBlockPlugin';//forced layout
import { forcedLayoutPlugin } from './forced-layout/forcedLayoutPlugin';//forced layout
import { withStyledPlaceHolders } from './placeholder/withStyledPlaceHolders';



import { plateUI } from './common/plateUI';

import { createMyPlugins, MyEditor, MyPlatePlugin, MyValue } from "./typescript/plateTypes";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarButtons } from "./ToolbarButtons";
import { resetBlockTypePlugin } from './reset-node/resetBlockTypePlugin';
import { softBreakPlugin } from "./soft-break/softBreakPlugin";
import { exitBreakPlugin } from './exit-break/exitBreakPlugin';


let components = createPlateUI({
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  // customize your components by plugin key
});
components = withStyledPlaceHolders(components);

function App() {
  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          createBasicElementsPlugin(),
          createResetNodePlugin(resetBlockTypePlugin),
          createSoftBreakPlugin(softBreakPlugin),
          
          createNormalizeTypesPlugin(forcedLayoutPlugin),//forced layout
          createTrailingBlockPlugin(trailingBlockPlugin),//forced layout
          createExitBreakPlugin(exitBreakPlugin),//forced layout
          createHeadingPlugin(),//forced layout
         

        ],
        {
          components: components,
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
