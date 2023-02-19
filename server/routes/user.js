const { getMe } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const User = require("../models/user")
const router = require("express").Router();

router.get("/me",auth,getMe);

router.get("/users",async (req,res,next)=>{
    try {
        const { sortType = 'points' } = req.body;
        const users = await User.find({ role: { $nin: ["ROLE_ADMIN"] } } ).sort(sortType);
        res.json(users);
      } catch (error) {
        next(error);
      }
})
module.exports = router;