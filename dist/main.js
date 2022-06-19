"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editor_1 = __importDefault(require("./memento/editor"));
const history_1 = __importDefault(require("./memento/history"));
const eHistory = new history_1.default();
const editor = new editor_1.default("first content");
eHistory.push(editor.createState());
editor.content = "second change";
eHistory.push(editor.createState());
editor.content = "third change";
editor.restore(eHistory.pop());
editor.restore(eHistory.pop());
console.log(editor.content);
//# sourceMappingURL=main.js.map