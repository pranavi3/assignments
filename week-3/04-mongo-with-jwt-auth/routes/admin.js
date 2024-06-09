const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const { Admin, Course } = require("../db");
const JWT_SECRET = require("../config/secrets");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    });
    res.json({
        message: 'Admin created successfully'
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.findOne({username, password});
    if(!user){
        return res.status(400).json({
            msg: 'Invalid credentials'
        });
    }
    const jwtToken = await jwt.sign({username: username}, JWT_SECRET);
    res.json({
        msg: 'Sign in Successful',
        token: jwtToken
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const courseNew =   await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink
        });
        res.json({
            message: 'Course created successfully',
            courseId: courseNew._id
        })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses: courses
    })
});

module.exports = router;