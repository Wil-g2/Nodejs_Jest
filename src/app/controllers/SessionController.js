const { User } = require('../models');

class SessionController { 
  async store(req, res) {
    const { email, password } = req.body; 

    const user = await User.find({ email }); 

    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect Password .' });
    }
    return res.json({ user });
  }
}

module.exports = new SessionController();