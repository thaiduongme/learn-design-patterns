import EditorState from "./editor-state";

export default class Editor {
  constructor(public content: string) {}

  createState(): EditorState {
    return new EditorState(this.content);
  }

  restore(state: EditorState | undefined): void {
    if (state) this.content = state.content;
  }
}
