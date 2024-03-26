const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const serviceTypeSchema = new mongoose.Schema(
  {
    fee: {
      type: Number,
      required: false,
    },

    serviceType: {
      type: String,
      trim: true,
      required: false,
    },

    location: {
      type: String,
      trim: true,
      required: false,
    },

    description: {
      type: String,
      trim: true,
      required: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("ServiceType", serviceTypeSchema);
