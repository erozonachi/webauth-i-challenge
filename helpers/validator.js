module.exports = {
  validateUser: function(req, res, next) {
    const { first_name, last_name, username, password } = req.body;

    if(!first_name || first_name.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required first_name field'
        });
    }
    if(!last_name || last_name.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required last_name field'
        });
    }
    if(!username || username.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required username field'
        });
    }
    if(!password || password.trim('') === '') {
      return res.status(400)
        .json({
          message: 'missing required password field'
        });
    }

    next();
  }
}
