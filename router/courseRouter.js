const express = require("express");
const { addCourse, getCourses } = require("../controller/courseController");
const router = express.Router();

router.post("/", addCourse);
router.get("/", getCourses);
module.exports = router;
