"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get('/:userId/:subId', (req, res) => {
    console.log(req.params.userId);
    res.send('Hello, my name is Sadik!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST request received');
});
exports.default = app;
