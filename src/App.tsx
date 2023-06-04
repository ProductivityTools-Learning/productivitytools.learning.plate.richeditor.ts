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
} from "@udecode/plate";
import { withProps } from "@udecode/plate";
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
import { ELEMENT_TITLE } from "./pttitle/titleconsts";
import { createTitlePlugin } from "./pttitle/titleplugin";
import { linkPlugin } from "./link/linkPlugin";

let components = createPlateUI({
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  [ELEMENT_TITLE]: withProps(StyledElement, {
    styles: {
      root: {
        margin: "0 0 0 0",
        fontSize: "25px",
        fontWeight: "1000",
        color: "gray",
      },
    },
  }),
  [ELEMENT_H1]: withProps(StyledElement, {
    styles: {
      root: {
        margin: "0 0 0 0",
        fontSize: "20px",
        fontWeight: "1000",
      },
    },
  }),
});
components = components;

// const createTitlePlugin = createPluginFactory({
//   key: ELEMENT_TITLE,
//   isElement: true
// });

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
