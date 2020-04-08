// dependencies
const express = require('express');
const router = express.Router();
const userModel = require('../../lib/models/user.schema');


router.post('/', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('invalid email or password');

    if(user.password == req.body.password) return res.json('logged in');

    // const validPassword = await bcrypt.compare(req.body.password, user.password);
    // if(!validPassword) return res.status(400).send('invalid email or password');
    
    // const token = user.generateAuthToken();
    
    // res.header('x-auth-token', token).status(200).send("logged in");
});


module.exports = router;