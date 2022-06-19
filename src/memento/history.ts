import EditorState from "./editor-state";

export default class History {
  private states: EditorState[];
  constructor() {
    this.states = [];
  }

  push(state: EditorState): void {
    this.states.push(state);
  }

  pop(): EditorState | undefined {
    return this.states.pop();
  }
}
