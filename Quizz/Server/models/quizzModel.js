const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
      },
      level: {
        type: String,
        required: true,
        enum: ['Easy', 'Medium', 'Hard'],
      },
      questions: [
        {
          question: { type: String, required: true }, // Question text
          options: {
            type: [{ type: String, required: true }], // Array of 4 options
            validate: {
              validator: function (v) {
                return v.length === 4; // Ensure exactly 4 options
              },
              message: 'Each question must have exactly 4 options.',
            },
          },
          correctOption: {
            type: Number,
            required: true,
            validate: {
              validator: function (v) {
                return v >= 0 && v < 4; // Correct option index must be 0, 1, 2, or 3
              },
              message: 'Correct option must be an index between 0 and 3.',
            },
          },
        },
      ],

      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;