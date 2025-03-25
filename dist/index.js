"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
app_1.app.listen(PORT, () => {
    console.log(`Server currently listening on port ${PORT}`);
}).on("error", (error) => {
    throw new Error(error.message);
});
