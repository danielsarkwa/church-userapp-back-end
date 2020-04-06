// dependencies
const express = require('express');
const router = express.Router();
const userModel = require('../../lib/models/user.schema');
const _lodash = require('lodash');


router.post('/', async (req, res) => {
    console.log(req.body);
    // let user = await userModel.findOne({ email: req.body.email });
    // if(user) return res.status(400).send('user already registered');

    // user = await new User({
    //     userName: req.body.userName,
    //     fullName: req.body.fullName,
    //     avatarUrl: req.body.avatarUrl,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     address: req.body.address,
    //     password: req.body.password, // hash password before
    // });

    // try{
    //     await user.save();
    //     res.status(200).send('new user created');
    // } catch(ex) {
    //     res.status(400).send('could not update user');
    // }
});


router.get('/snap', async (req, res) => {
    // try {
    //     const user = await userModel.findById(req.params.id);
    //     const snapData = _lodash.pick(user, ['_id', 'avatarUrl', 'userName']);
    //     return res.status(200).send(snapData);
    // } catch(ex) {
    //     return res.status(400).send('could not retrieve data');
    // }
});


router.get('/profile',async (req, res) => {
    // try {
    //     const userDetails = await userModel.findById(req.params.id);
    //     if(!user) return res.status(404).send("user not found");
    //     return res.status(200).send(userDetails);
    // } catch(ex) {
    //     return res.status(400).send('could not retrieve data');
    // }
});


router.put('/:id', async(req, res) => {
    // let user = await userModel.findById(req.params.id);
    // if(!user) return res.status(404).send("user with the given ID was not found.");

    // const toUpdate = _.pick(req.body, ['name', 'email', 'password', 'role', 'isAdmin']);
   
    // if(toUpdate.email) {
    //     let anoEmail = await userModel.findOne({email: toUpdate['email']});
    //     if(anoEmail) return res.status(400).send('email already exit');
    // }

    // re-hash password
    // const changePassword = (password) => {
    //     return new Promise(() => {
    //         user.password = hashSync(password);
    //     }).catch((err) => console.log('something went wrong updating password', err.message));
    // };

    // for(let detail in toUpdate) {
    //     if(detail === 'password') {
    //         changePassword(toUpdate[detail]);
    //     } else {
    //         user[detail] = toUpdate[detail];
    //     };
    // }

    // try{
    //     await user.save();
    //     res.status(200).send('user updated successfully');
    // } catch(ex) {
    //     throw new Error('could not update user');
    // }
});


router.delete('/:id', async (req, res) => {
    // const userDel = await userModel.findById(req.params.id);
    // if(!userDel) return res.status(404).send("user with the given ID was not found.");

    // try{
    //     await userDel.remove();
    //     res.status(200).send("user deleted succesfully..");
    // } catch(ex) {
    //     res.status(400).send('could not delete user');
    // }
});


module.exports = router;