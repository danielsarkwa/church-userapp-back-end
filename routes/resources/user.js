// dependencies
const express = require('express');
const router = express.Router();
const valObjId = require('../../lib/middlewares/validateObjectId');
const userModel = require('../../lib/models/user.schema');
const _lodash = require('lodash');

// add a push notification to the dashboard here
router.post('/create', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if(user) return res.status(400).json('user already registered');

    user = await new userModel({
        userName: req.body.username,
        fullName: req.body.fullname,
        avatarUrl: req.body.avatarUrl,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password, // hash password before
    });

    try{
        await user.save();
        res.status(200).json('new user created');
    } catch(ex) {
        console.log(ex);
        res.status(400).json('could not create user');
    }
});


router.get('/profile/snap/:id', [valObjId], async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const snapData = _lodash.pick(user, ['_id', 'avatarUrl', 'userName']);
        return res.status(200).json(snapData);
    } catch(ex) {
        return res.status(400).json('could not retrieve data');
    }
});


router.get('/profile/:id', [valObjId], async (req, res) => {
    try {
        const userDetails = await userModel.findById(req.params.id);
        if(!userDetails) return res.status(404).json("user not found");
        return res.status(200).json(userDetails);
    } catch(ex) {
        return res.status(400).json('could not retrieve data');
    }
});


router.put('/profile/:id', [valObjId], async(req, res) => {
    let user = await userModel.findById(req.params.id);
    if(!user) return res.status(404).json("user not found.");

    const toUpdate = _lodash.pick(req.body, ['userName', 'fullName', 'avatarUrl', 'email', 'phone', 'address', 'password']);
   
    if(toUpdate.email) {
        let anoEmail = await userModel.findOne({email: toUpdate['email']});
        if(anoEmail) return res.status(400).json('email already exit');
    }

    // re-hash password
    // const changePassword = (password) => {
    //     return new Promise(() => {
    //         user.password = hashSync(password);
    //     }).catch((err) => console.log('something went wrong updating password', err.message));
    // };

    for(let detail in toUpdate) {
        if(detail === 'password') {
            // changePassword(toUpdate[detail]);
            user[detail] = toUpdate[detail];
        } else {
            user[detail] = toUpdate[detail];
        };
    }

    try{
        await user.save();
        res.status(200).json('user updated successfully');
    } catch(ex) {
        throw new Error('could not update user');
    }
});


router.delete('/:id', [valObjId], async (req, res) => {
    const userDel = await userModel.findById(req.params.id);
    if(!userDel) return res.status(404).json("user with the given ID was not found.");
    try{
        await userDel.remove();
        res.status(200).json("user deleted succesfully..");
    } catch(ex) {
        res.status(400).json('could not delete user');
    }
});


module.exports = router;