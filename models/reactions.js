const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formattedTime(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

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

module.exports = reactionSchema;
