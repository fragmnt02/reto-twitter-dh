//const db = require('../database/models');
const usersController = {
    signupView: (req, res) => {
        res.render('signup')
    },
    signup: (req, res) => {
        /*db.User.create({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email
        })*/
        res.redirect('/');
    }
}

module.exports = usersController