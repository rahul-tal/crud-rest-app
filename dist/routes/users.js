"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../models/users"));
const router = express_1.default.Router();
//getting all users
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}));
//getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});
//creating one
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new users_1.default({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    });
    try {
        const newUser = yield user.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
}));
//updating one - patch because we will only update what user 
//passes us if passes name then only update name not anything elses
//put updates all 
router.patch('/', (req, res) => {
});
//deleting one
router.get('/:id', (req, res) => {
});
function getUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield users_1.default.findById(req.params.id);
            if (user === null)
                return res.status(404);
        }
        catch (err) {
        }
    });
}
exports.default = router;
