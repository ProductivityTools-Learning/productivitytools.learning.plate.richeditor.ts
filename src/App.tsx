import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  useResetPlateEditor, //not used in this project, but I am copying it to different one
  createBasicElementsPlugin, //h1, quote, code
  createResetNodePlugin, //h1, quote, code
  createSoftBreakPlugin, //h1, quote, code
  Plate,
  PlateProvider,
  TEditableProps,
  createNormalizeTypesPlugin, //forced layout
  createTrailingBlockPlugin, //forced layout
  ELEMENT_H1, //forced layout
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  CodeBlockElement,
  createExitBreakPlugin,
  createHeadingPlugin,
  StyledElement,
  createPluginFactory,
  createLinkPlugin,
  createIndentPlugin,//list
  createListPlugin,//list
  createIndentListPlugin,//list
  createTablePlugin,//table

} from "@udecode/plate";
import { trailingBlockPlugin } from "./trailing-block/trailingBlockPlugin"; //forced layout
import { forcedLayoutPlugin } from "./forced-layout/forcedLayoutPlugin"; //forced layout
import { withStyledPlaceHolders } from "./placeholder/withStyledPlaceHolders";
import { plateUI } from "./common/plateUI";
import { createMyPlugins, MyParagraphElement, MyEditor, MyPlatePlugin, MyValue } from "./typescript/plateTypes";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarButtons } from "./ToolbarButtons";
import { resetBlockTypePlugin } from "./reset-node/resetBlockTypePlugin";
import { softBreakPlugin } from "./soft-break/softBreakPlugin";
import { exitBreakPlugin } from "./exit-break/exitBreakPlugin";
import { createTitlePlugin } from "./pttitle/titleplugin";
import { linkPlugin } from "./link/linkPlugin";
import { indentPlugin } from './indent/indentPlugin';
import { indentListPlugin } from './indent-list/indentListPlugin';
import {components} from './components/components'



function App() {
  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          createBasicElementsPlugin(), //h1-h6, quote, code
          createTitlePlugin(),
          createResetNodePlugin(resetBlockTypePlugin), //reseting formatinog on enter
          createSoftBreakPlugin(softBreakPlugin), //enter new line without stsarting new block, shift_enter

          createNormalizeTypesPlugin(forcedLayoutPlugin), //forced layout
          createTrailingBlockPlugin(trailingBlockPlugin), //forced layout
          createExitBreakPlugin(exitBreakPlugin), //forced layout
          //createHeadingPlugin() //forced layout
          createLinkPlugin(linkPlugin), //urls
          createListPlugin(),//list
          createIndentListPlugin(indentListPlugin),//list
          createIndentPlugin(indentPlugin),//list
          createTablePlugin({
            options: {
              initialTableWidth: 600,
              // disableMarginLeft: true,
            },
          }),
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
  const [debugValue, setDebugValue] = useState<MyValue | null>(null);

  return (
    <div className="App">
      <PlateProvider<MyValue>
        plugins={plugins}
        onChange={(newValue) => {
          setDebugValue(newValue);
          // save newValue...
        }}
      >
        <Toolbar>
          <ToolbarButtons />
        </Toolbar>
        <Plate editableProps={editableProps}></Plate>
      </PlateProvider>
      value: {JSON.stringify(debugValue)}
    </div>
  );
}

export default App;
