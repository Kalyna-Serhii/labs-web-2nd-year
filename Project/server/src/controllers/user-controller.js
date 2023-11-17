import userService from "../service/user-service.js";

const UserController = {
    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            return res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },

    async getUserById(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },

    async createUser(req, res, next) {
        try {
            const newUser = await userService.createUser(req.body);
            return res.status(200).json(newUser);
        } catch (error) {
            next(error);
        }
    },

    async updateUser(req, res, next) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            return res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            await userService.deleteUser(req.params.id);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
}

export default UserController;