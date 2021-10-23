import express from "express";
import UsersControllers from "../controllers/Users.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
    "/register",

    body("name").not().isEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        UsersControllers.createUser(req, res);
    }
);

export default router;
