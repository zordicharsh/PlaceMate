const candidateOnly = (req, res, next) => {
  if (req.user && req.user.userType === 2) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Access denied. Candidates only.",
    });
  }
};

export default candidateOnly;
