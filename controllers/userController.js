const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const userControllers = {

 
    addUser: async (req, res) => {
        let { email, password, userName, lastName, imgUrl, country } = req.body
        console.log(req.body)
        try {
            const userExists = await User.findOne({ email })
            if (userExists) {
                res.json({ success: false, error: "El email ya esta en uso", response: null })
            } else {
                const hashPass = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    email,
                    password: hashPass,
                    userName,
                    lastName,
                    imgUrl,
                    country
                })
                await newUser.save()
                res.json({ success: true, response: newUser, error: null })
            }
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    signin: async (req, res) => {
        const { email, password } = req.body

        try {
            const userExists = await User.findOne({ email })
            if (!userExists) {
                res.json({ success: true, error: "email y/o contraseña incorrectos" })
            } else {
                let samePass = bcryptjs.compareSync(password, userExists.password)
                if (samePass) {
                    const { userName, imgUrl } = userExists
                    res.json({ success: true, response: { userName, imgUrl }, error: null })
                } else {
                    res.json({ success: true, error: "email y/o contraseña incorrectos" })
                }
            }

        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    }


}

module.exports = userControllers;