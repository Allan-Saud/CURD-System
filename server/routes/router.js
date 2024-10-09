const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');


//register user
router.post('/register', async (req, res) => {
    const { name, email, age, mobile, work, address, description } = req.body;

    if (!name || !email || !age || !mobile || !work || !address || !description) {
        return res.status(400).json({ error: 'Please fill all the fields.' });
    }

    try {
        const preUser = await users.findOne({ email: email });

        if (preUser) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const newUser = new users({
            name,
            email,
            age,
            mobile,
            work,
            address,
            description,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.', newUser });
    } catch (error) {
        res.status(422).json({ error: 'Failed to register user.', details: error.message });
    }
});


//get user data 
router.get("/getdata", async (req, res) => {
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})


//get individual user
router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params;
        const userindividual = await users.findById({ _id: id })
        console.log(userindividual)
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(422).json(error)
    }
})


//update user

router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Incoming data:", req.body); 
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
});


//delete user

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Incoming data:", req.body); 
        const deleteduser = await users.findByIdAndDelete({_id:id})
        console.log(deleteduser);
        res.status(201).json(deleteduser);
    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;
