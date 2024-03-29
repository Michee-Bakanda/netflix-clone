const router = require("express").Router()
const User = require("../models/User")
const CryptoJs = require("crypto-js")

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password:  CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Login
router.post("/login", async(req,res)=>{
  try {
    const user = await User.findOne({email: req.body.email})
    !user && res.status(401).json("wrong password or username")

    const bytes =  CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJs.enc.Utf8)

    originalPassword !== req.body.password && res.status(401).json("wrong password or username!")

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
} );

module.exports = router;
