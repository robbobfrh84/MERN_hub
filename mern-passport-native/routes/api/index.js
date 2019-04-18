const router = require("express").Router()
const userRoutes = require("./userAPI.js")

// 👥
router.use("/user", userRoutes)

module.exports = router
