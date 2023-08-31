const { Schema, model } = require("mongoose");
const Reaction = require("./reactions");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formattedTime(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

function formattedTime(timestamp) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    timestamp.toLocaleDateString("en-US", options) +
    " at " +
    timestamp.toLocaleTimeString()
  );
}

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
