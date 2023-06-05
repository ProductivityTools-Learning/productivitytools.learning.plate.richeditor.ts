import { BasicElementToolbarButtons } from "./basic-elements/BasicElementToolbarButtons";
import { Link } from "@styled-icons/material/Link";
import { LinkToolbarButton,ToolbarButton } from "@udecode/plate";
import { IndentToolbarButtons } from './indent/IndentToolbarButtons';
import { ListToolbarButtons } from './list/ListToolbarButtons';

export const ToolbarButtons = () => {
  return (
    <>
      <BasicElementToolbarButtons />
      <LinkToolbarButton icon={<Link />} />
      <ListToolbarButtons />
      <IndentToolbarButtons />
      
      {/* <ListToolbarButtons />
      <IndentToolbarButtons />
      <BasicMarkToolbarButtons />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<FormatColorText />}
        selectedIcon={<Check />}
        tooltip={colorTooltip}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<FontDownload />}
        selectedIcon={<Check />}
        tooltip={bgTooltip}
      />
      <EmojiToolbarDropdown tooltip={emojiTooltip} pluginKey={KEY_EMOJI} icon={<EmojiEmotions />} />
      <LineHeightToolbarDropdown tooltip={lineHeightTooltip} icon={<LineWeight />} />
      <AlignToolbarButtons />
    
      <ImageToolbarButton icon={<Image />} />
      <MediaEmbedToolbarButton icon={<OndemandVideo />} />
      <TableToolbarButtons />
      <ExcalidrawElementToolbarButton /> */}
    </>
  );
};
