export default (req, res, next) => {
  try {
    if (req.session.log == true && req.session.token != null) {
      next();
    } else {
      throw 'Needed to be log';
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};