import express from "express";
import { getAdminOrders, updateOrderStatus } from "../Controllers/adminController.js";
import { protect } from "../Middleware/isAuth.js";

const adminRoutes = express.Router();

adminRoutes.get("/fetchadmin", protect, authorize("admin"), getAdminOrders);
adminRoutes.put("/update-status/:id", protect, authorize("admin"), updateOrderStatus);

export default adminRoutes;
 