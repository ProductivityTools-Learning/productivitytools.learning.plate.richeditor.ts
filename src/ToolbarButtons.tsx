import { BasicElementToolbarButtons } from './basic-elements/BasicElementToolbarButtons';

export const ToolbarButtons = () => {
  return (
    <>
      <BasicElementToolbarButtons />
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
      <LinkToolbarButton icon={<Link />} />
      <ImageToolbarButton icon={<Image />} />
      <MediaEmbedToolbarButton icon={<OndemandVideo />} />
      <TableToolbarButtons />
      <ExcalidrawElementToolbarButton /> */}
    </>
  );
};
