import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    theme: {
      type: String,
      default: "",
    },
    tone: {
      type: String,
      default: "",
    },
    settingType: {
      type: String,
      default: "",
    },
    partyLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 20,
    },
    idea: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      default: "",
    },
    villain: {
      name: { type: String, default: "" },
      goal: { type: String, default: "" },
      motivation: { type: String, default: "" },
      secret: { type: String, default: "" },
    },
    startingLocation: {
      name: { type: String, default: "" },
      description: { type: String, default: "" },
      importantNPCs: [{ type: String }],
      landmarks: [{ type: String }],
    },
    firstQuestHook: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;
