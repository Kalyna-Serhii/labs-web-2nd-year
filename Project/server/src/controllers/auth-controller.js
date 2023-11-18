import authService from '../service/auth-service.js';
import ApiError from '../exceptions/api-error.js';

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
            const user = await authService.login(req.body);
            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.status(200).json({
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            });
        } catch (error) {
            next(error);
        }
    },

    async logout(req, res, next) {
        try {
            await authService.logout(req.cookies.refreshToken);
            res.clearCookie('refreshToken');
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    async refresh(req, res, next) {
        try {
            const user = await authService.refresh(req.cookies.refreshToken);
            return res.status(200).json({
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            });
        } catch (error) {
            next(error);
        }
    },
};

export default AuthController;