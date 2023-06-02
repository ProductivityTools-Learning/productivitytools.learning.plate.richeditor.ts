import { ELEMENT_H1, NormalizeTypesPlugin } from "@udecode/plate";

import { MyPlatePlugin } from "../typescript/plateTypes";

import {  ELEMENT_TITLE } from "../pttitle/titleconsts";

export const forcedLayoutPlugin: Partial<MyPlatePlugin<NormalizeTypesPlugin>> = {
  options: {
    rules: [{ path: [0], strictType: ELEMENT_TITLE }],
  },
};
