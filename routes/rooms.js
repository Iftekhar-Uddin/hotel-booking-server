import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


router.post("/:hotelid", createRoom);

router.put("/:id", updateRoom);

router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", deleteRoom);

router.get("/:id", getRoom);

router.get("/", getAllRoom);

export default router;