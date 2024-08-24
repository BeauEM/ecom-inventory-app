import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

//centralized location for controllers

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
