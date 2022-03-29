const router = require("express").Router();
const User = require("../models/User");

// register
router.get("/register", async (req, res) => {
    const user = new User({
        username: "ken",
        email: "ken@gmail.com",
        password: "12345678",
        
    })
    await user.save();
    res.send("OK");
});


module.exports = router;