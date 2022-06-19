"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class History {
    constructor() {
        this.states = [];
    }
    push(state) {
        this.states.push(state);
    }
    pop() {
        return this.states.pop();
    }
}
exports.default = History;
//# sourceMappingURL=history.js.map