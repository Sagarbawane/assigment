const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const userController = {};

userController.register = (req, res) => {
    const body = req.body;
    const user = new User(body);
    user
        .save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json("something went wrong");
        });
};

userController.login = (req, res) => {
    const body = req.body;

    User.findOne({ email: body.email })

        .then((user) => {
            console.log(user);
            if (user) {
                console.log(body.password);
                console.log(user.password);
                bcryptjs.compare(body.password, user.password).then((result) => {
                    console.log(result);
                    if (result) {
                        const tokenData = {
                            id: user._id,
                        };
                        const token = jwt.sign(tokenData, "company-assigment", {
                            expiresIn: "1d",
                        });
                        res.json({
                            token: token,
                        });
                        console.log(token);
                    } else {
                        res.json({ errors: "Invalid UserName Or Password" });
                    }
                });
            } else {
                res.json({ errors: "Invalid UserName Or Password" });
            }
        })
        .catch((err) => {
            res.json(err);
        });
};



module.exports = userController;
