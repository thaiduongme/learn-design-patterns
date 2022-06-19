import Editor from "./memento/editor";
import History from "./memento/history";

const eHistory = new History();
const editor = new Editor("first content");
eHistory.push(editor.createState());

editor.content = "second change";
eHistory.push(editor.createState());

editor.content = "third change";
editor.restore(eHistory.pop());
editor.restore(eHistory.pop());
console.log(editor.content);
