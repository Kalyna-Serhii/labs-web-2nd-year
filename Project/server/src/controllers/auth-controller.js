import authService from '../service/auth-service.js';

const AuthController = {
    async register(req, res, next) {
        try {
            const newUser = await authService.register(req.body);
            res.cookie('refreshToken', newUser.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    },

    async login(req, res, next) {
        try {
            const userData = await authService.login(req.body);
            res.cookie('accessToken', userData.accessToken);
            res.cookie('refreshToken', userData.refreshToken, {httpOnly: true});
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    async logout(req, res, next) {
        try {
            await authService.logout(req.cookies.refreshToken);
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    async refresh(req, res, next) {
        try {
            const {accessToken, refreshToken} = await authService.refresh(req.cookies.refreshToken);
            res.cookie('accessToken', accessToken);
            res.cookie('refreshToken', refreshToken, {httpOnly: true});
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

export default AuthController;