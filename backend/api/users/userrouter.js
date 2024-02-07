const {createUser} =require("./usercontroller")
const router = require("express").Router();

router.post("/",createUser);

module.exports = router;