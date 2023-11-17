import bcrypt from 'bcrypt';
import UserModel from '../models/user-model.js';
import TokenModel from "../models/token-model.js";
import ApiError from '../exceptions/api-error.js';

const UserService = {
    async getUsers() {
        const users = await UserModel.findAll();
        return users;
    },

    async getUserById(id) {
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with id = ${id}`);
        }
        return user;
    },

    async createUser(body) {
        const {name, gender, phone, password, email, role} = body;
        const userWithSamePhone = await UserModel.findOne({where: {phone}});
        if (userWithSamePhone) {
            throw ApiError.BadRequest(`User with ${phone} phone number already exists`);
        }
        const hashedPassword = await bcrypt.hash(password, 3);
        const newUser = await UserModel.create({
            name,
            gender,
            phone,
            password: hashedPassword,
            email,
            role,
        });
        return newUser;
    },

    async updateUser(id, body) {
        const {name, gender, phone, password, email, role} = body;
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with ${phone} phone number`);
        }
        const userWithSamePhone = await UserModel.findOne({where: {phone}});
        if (userWithSamePhone && userWithSamePhone.id !== parseInt(id)) {
            throw ApiError.BadRequest(`User with ${phone} phone number already exists`);
        }

        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.gender = gender;
        updatedFields.phone = phone;
        updatedFields.password = password;
        updatedFields.email = email;
        updatedFields.role = role;
        const updatedUser = await user.update(updatedFields);
        return updatedUser;
    },

    async deleteUser(id) {
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with id = ${id}`);
        }
        const userToken = await TokenModel.findOne({where: {userId: id}});
        if (userToken) {
            await userToken.destroy();
        }
        await user.destroy();
    },
};

export default UserService;