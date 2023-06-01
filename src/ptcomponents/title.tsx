import React, { useMemo, useState } from "react";

import { PlateRenderElementProps } from "@udecode/plate";

export const TitleElement = ({ attributes, children }: PlateRenderElementProps) => <h1 {...attributes}>{children}</h1>;
