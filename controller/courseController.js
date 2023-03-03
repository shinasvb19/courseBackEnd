const { response } = require("express");
const Course = require("../models/courseSchema");

module.exports.addCourse = async (req, res) => {
  const { name, icon, startDate, totalLesson, lessonCompleted, duration } =
    req.body;
  try {
    const course = new Course({
      name,
      icon,
      startDate,
      totalLesson,
      lessonCompleted,
      duration,
    });
    await course.save();
    res.status(200).json("succefully inserted");
  } catch (error) {
    response.status(500).json("internal server error");
  }
};

module.exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json("internal server error");
  }
};
