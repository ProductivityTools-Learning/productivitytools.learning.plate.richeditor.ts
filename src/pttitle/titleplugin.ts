import { createPluginFactory } from "@udecode/plate";
import { ELEMENT_TITLE } from "./titleconsts";


export const createTitlePlugin = createPluginFactory({
  key: ELEMENT_TITLE,
  isElement: true,
});
