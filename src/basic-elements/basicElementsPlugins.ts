import {
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createParagraphPlugin,
} from '@udecode/plate';
import { plateUI } from '../common/plateUI';
import { createMyPlugins } from '../typescript/plateTypes';

export const basicElementsPlugins = createMyPlugins(
  [
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),

  ],
  {
    components: plateUI,
  }
);
