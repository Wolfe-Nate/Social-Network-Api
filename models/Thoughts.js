const { Schema, model } = require("mongoose");
const format_date = require("../utils/helper");
const reactionSchema = require("./Reaction")

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      Type: Date,
      default: Date.now,
      get: (timestamp) => format_date(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = model("Thoughts", thoughtsSchema);
module.exports = Thoughts;