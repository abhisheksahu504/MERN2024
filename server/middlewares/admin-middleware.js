const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      res.status(403).json({ msg: "Access Denied : You are not a admin" });
    }
    //if user is a admin proced to the next  middleware
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = adminMiddleware;
