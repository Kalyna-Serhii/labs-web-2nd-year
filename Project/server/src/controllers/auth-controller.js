const AuthController = {
  async register(req, res, next) {
    try {
      return res.status(200).json([1, 2, 3]);
    } catch (error) {
    }
  },
};

export default AuthController;
