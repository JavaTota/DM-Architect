import express from "express";
import mongoose from "mongoose";
import Npc from "../models/Npc.js";

const router = express.Router();

// GET all NPCs for a campaign
router.get("/", async (req, res) => {
  try {
    const { campaignId } = req.query;

    if (!campaignId) {
      return res.status(400).json({ message: "campaignId is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(campaignId)) {
      return res.status(400).json({ message: "Invalid campaignId" });
    }

    const npcs = await Npc.find({ campaignId }).sort({ createdAt: -1 });
    res.json(npcs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET one NPC
router.get("/:id", async (req, res) => {
  try {
    const npc = await Npc.findById(req.params.id);

    if (!npc) {
      return res.status(404).json({ message: "NPC not found" });
    }

    res.json(npc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE NPC
router.post("/", async (req, res) => {
  try {
    const {
      campaignId,
      name,
      role,
      location,
      personality,
      motivation,
      secret,
    } = req.body;

    if (!campaignId || !name || !role) {
      return res
        .status(400)
        .json({ message: "campaignId, name, and role are required" });
    }

    const npc = await Npc.create({
      campaignId,
      name,
      role,
      location,
      personality,
      motivation,
      secret,
    });

    res.status(201).json(npc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE NPC
router.put("/:id", async (req, res) => {
  try {
    const npc = await Npc.findById(req.params.id);

    if (!npc) {
      return res.status(404).json({ message: "NPC not found" });
    }

    npc.name = req.body.name ?? npc.name;
    npc.role = req.body.role ?? npc.role;
    npc.location = req.body.location ?? npc.location;
    npc.personality = req.body.personality ?? npc.personality;
    npc.motivation = req.body.motivation ?? npc.motivation;
    npc.secret = req.body.secret ?? npc.secret;

    const updatedNpc = await npc.save();
    res.json(updatedNpc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE NPC
router.delete("/:id", async (req, res) => {
  try {
    const npc = await Npc.findById(req.params.id);

    if (!npc) {
      return res.status(404).json({ message: "NPC not found" });
    }

    await npc.deleteOne();
    res.json({ message: "NPC deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
