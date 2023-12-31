import * as React from 'react';
import { useEffect, useRef, useImperativeHandle } from 'react';
import type {
  EditorState,
  EditorStateConfig,
  Extension,
} from '@codemirror/state';
import type { EditorView, ViewUpdate } from '@codemirror/view';
import { useCodeMirror } from '../hooks';
import type { BasicSetupOptions } from './basicSetup';

export * from './basicSetup';

export interface CodeMirrorProps
  extends Omit<EditorStateConfig, 'doc' | 'extensions'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'placeholder'> {
  /** value of the auto created model in the editor. */
  value?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  /** focus on the editor. */
  autoFocus?: boolean;
  /** Enables a placeholder—a piece of example content to show when the editor is empty. */
  placeholder?: string | HTMLElement;
  /**
   * `light` / `dark` / `Extension` Defaults to `light`.
   * @default light
   */
  theme?: 'light' | 'dark' | Extension;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  basicSetup?: boolean | BasicSetupOptions;
  /**
   * This disables editing of the editor content by the user.
   * @default true
   */
  editable?: boolean;
  /**
   * This disables editing of the editor content by the user.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  indentWithTab?: boolean;
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
  /** Fired whenever any state change occurs within the editor, including non-document changes like lint results. */
  onUpdate?(viewUpdate: ViewUpdate): void;
  /**
   * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
   * They can either be built-in extension-providing objects,
   * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
   * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
   */
  extensions?: Extension[];
  /**
   * If the view is going to be mounted in a shadow root or document other than the one held by the global variable document (the default), you should pass it here.
   * Originally from the [config of EditorView](https://codemirror.net/6/docs/ref/#view.EditorView.constructor%5Econfig.root)
   */
  root?: ShadowRoot | Document;
}

export interface CodeMirrorRef {
  editor?: HTMLDivElement | null;
  state?: EditorState;
  view?: EditorView;
}

export const CodeMirror = React.forwardRef<CodeMirrorRef, CodeMirrorProps>(
  (props, ref) => {
    const {
      className,
      value = '',
      selection,
      extensions = [],
      onChange,
      onUpdate,
      autoFocus,
      theme = 'light',
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      basicSetup,
      placeholder,
      indentWithTab,
      editable,
      readOnly,
      root,
      ...other
    } = props;
    const editor = useRef<HTMLDivElement>(null);
    const { state, view, container, setContainer } = useCodeMirror({
      container: editor.current,
      root,
      value,
      autoFocus,
      theme: 'dark',
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      basicSetup,
      placeholder,
      indentWithTab,
      editable,
      readOnly,
      selection,
      onChange,
      onUpdate,
      extensions,
    });
    useImperativeHandle(ref, () => ({ editor: container, state, view }), [
      container,
      state,
      view,
    ]);
    useEffect(() => {
      setContainer(editor.current);
    }, []);

    // check type of value
    if (typeof value !== 'string') {
      throw new Error(`value must be typeof string but got ${typeof value}`);
    }

    const defaultClassNames =
      typeof theme === 'string' ? `cm-theme-${theme}` : 'cm-theme';
    return (
      <div
        ref={editor}
        className={`${defaultClassNames}${className ? ` ${className}` : ''}`}
        {...other}
      ></div>
    );
  }
);
