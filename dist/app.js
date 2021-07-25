"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const serve_1 = __importDefault(require("./src/server/serve"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
//configura a porta
dotenv_1.default.config();
const server = new serve_1.default();
server.listen();
//# sourceMappingURL=app.js.map