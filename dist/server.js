"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const databaseUrl = 'mongodb://localhost/users';
const httpPort = 3000;
mongoose_1.default.connect(databaseUrl);
const db = mongoose_1.default.connection;
db.on('error', (error) => console.log(error));
db.on('open', () => console.log('connected to database'));
app.use(express_1.default.json());
app.use('/users', users_1.default);
app.listen(httpPort, () => {
    console.log(`App running on ${httpPort}`);
});
