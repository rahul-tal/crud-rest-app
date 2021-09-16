"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//getting all users
router.get('/', (req, res) => {
    res.send('Hello World');
});
//getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});
//creating one
router.post('/', (req, res) => {
});
//updating one - patch because we will only update what user 
//passes us if passes name then only update name not anything else
//put updates all 
router.patch('/', (req, res) => {
});
//deleting one
router.get('/:id', (req, res) => {
});
exports.default = router;
