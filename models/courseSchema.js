const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      default: Date.now,
    },
    totalLesson: {
      type: Number,
      required: true,
    },
    lessonCompleted: {
      type: Number,
    },
    duration: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
