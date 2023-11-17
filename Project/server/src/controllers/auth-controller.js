import authService from '../service/auth-service.js';
import ApiError from '../exceptions/api-error.js';

const AuthController = {
    async register(req, res, next) {
        try {
            const newUser = await authService.register(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    },

    async login(req, res, next) {
        try {
            const user = await authService.login(req.body);
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
            const {refreshToken} = req.body;
            if (!refreshToken) {
                return next(ApiError.UnauthorizedError());
            }
            await authService.logout(refreshToken);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.body;
            if (!refreshToken) {
                return next(ApiError.UnauthorizedError());
            }
            const user = await authService.refresh(refreshToken, res);
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