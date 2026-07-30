const recruiterOnly = (req, res, next) => {
  if (req.user && req.user.userType === 1) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Access denied. Recruiters only.",
    });
  }
};

export default recruiterOnly;
