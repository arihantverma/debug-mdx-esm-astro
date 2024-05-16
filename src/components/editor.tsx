import {
  frontmatterPlugin,
  headingsPlugin,
  listsPlugin,
  MDXEditor as MDXEdit,
  thematicBreakPlugin,
  linkPlugin,
  linkDialogPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  quotePlugin,
  KitchenSinkToolbar
} from "@mdxeditor/editor";
import type { ComponentProps } from "react";
// import { esmMdxEditorPlugin } from '../../lib/mdx-editor/plugins/esm/index'
import { esmMdxEditorPlugin } from 'mdx-editor-plugin-esm'

import "@mdxeditor/editor/style.css";

type TProps = ComponentProps<typeof MDXEdit>;

export function MDXEditor(props: TProps) {
  return (
    <MDXEdit
      plugins={[
        esmMdxEditorPlugin(),
        listsPlugin(),
        quotePlugin(),
        frontmatterPlugin(),
        headingsPlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        markdownShortcutPlugin(),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
      ]}
      {...props}
    />
  );
}
