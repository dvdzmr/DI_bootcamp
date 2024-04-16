import bcrypt from "bcrypt";
import User from "../models/model.js"

const userController = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const userObject = await User.create({ username, password: passwordHash });
        res.json(userObject);
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const userObject = await User.getByUsername(username);
        if (userObject && await bcrypt.compare(password, userObject.password)) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    },
    getUserById: async (req, res) => {
        const userObject = await User.getById(req.params.id);
        res.json(userObject);
    },
    getAllUsers: async (req, res) => {
        const allUsers = await User.getAll();
        res.json(allUsers);
    },
    updateUser: async (req, res) => {
        const userObject = await User.update(req.params.id, req.body);
        res.json(userObject);
    },
};


export default userController;