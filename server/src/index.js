"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3003;
const db = mysql_1.default.createConnection({
    user: 'hamza',
    host: '127.0.0.1',
    password: '7AMZA5anfara&é',
    database: 'project1'
});
// Configure CORS options
const allowedOrigins = ['http://localhost:3003', 'http://localhost:3002']; // Specify your allowed origins
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options)); // Use CORS middleware with options
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server with CORS enabled');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
app.post('/iseven', (req, res) => {
    const numb = req.body.val;
    if (numb % 2 == 0) {
        res.send({ answer: 'Even' });
    }
    else {
        res.send({ answer: 'Odd' });
    }
});
app.post('/addUser', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    db.query("INSERT INTO users(firstName, lastName) VALUE (?,?)", [firstName, lastName], (err, res) => {
        if (err) {
            console.log(err);
        }
    });
});
