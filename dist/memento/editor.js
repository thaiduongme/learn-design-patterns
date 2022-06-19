"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editor_state_1 = __importDefault(require("./editor-state"));
class Editor {
    constructor(content) {
        this.content = content;
    }
    createState() {
        return new editor_state_1.default(this.content);
    }
    restore(state) {
        if (state)
            this.content = state.content;
    }
}
exports.default = Editor;
//# sourceMappingURL=editor.js.map