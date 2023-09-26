import { MediaPlugin } from "@udecode/plate";

import { MyPlatePlugin } from "../typescript/plateTypes";

const transform = () => console.log("fff");

export const mediaPlugin: Partial<MyPlatePlugin<MediaPlugin>> = {
  options: {
    transformUrl: (url: string) => {
      debugger;
      console.log("fdsafdasfasfafsafa");
      return url;
    },
  },
};
