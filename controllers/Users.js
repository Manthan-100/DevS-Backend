import bcrypt from "bcryptjs";
import Users from "../models/users.js";
import gravatar from "gravatar";

const UsersControllers = {
    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;
            let user = await Users.findOne({ email });
            if (user) {
                return res.status(200).send("User already exits");
            }

            const avatar = gravatar.url(email, {
                s: "200",
                r: "pg",
                d: "mm",
            });
            user = new Users({
                name,
                email,
                password,
                avatar,
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send("Internal server error");
        }
    },
};

export default UsersControllers;
