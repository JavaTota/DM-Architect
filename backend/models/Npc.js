import mongoose from "mongoose";

const npcSchema = new mongoose.Schema(
  {
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      default: "",
      trim: true,
    },
    personality: {
      type: String,
      default: "",
      trim: true,
    },
    motivation: {
      type: String,
      default: "",
      trim: true,
    },
    secret: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Npc = mongoose.model("Npc", npcSchema);

export default Npc;
