const UsersControllers = {
    async createUser(req, res) {
        try{
            return res.status(200).send(req.body);
        }catch(error) {
            return res.status(400).send("Something went wrong")
        }
    }
}

export default UsersControllers;