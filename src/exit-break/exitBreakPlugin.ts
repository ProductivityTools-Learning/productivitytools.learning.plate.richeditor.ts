import { ExitBreakPlugin, KEYS_HEADING } from '@udecode/plate';
import { MyPlatePlugin } from '../typescript/plateTypes';
import { ELEMENT_TITLE } from "../pttitle/titleconsts";

export const exitBreakPlugin: Partial<MyPlatePlugin<ExitBreakPlugin>> = {
  options: {
    rules: [
      {
        hotkey: 'mod+enter',
      },
      {
        hotkey: 'mod+shift+enter',
        before: true,
      },
      {
        hotkey: 'enter',
        query: {
          start: true,
          end: true,
          allow: [...KEYS_HEADING,ELEMENT_TITLE],
        },
        relative: true,
        level: 1,
      },
    ],
  },
};
