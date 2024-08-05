import { Router } from "express";
import { protect } from "../controllers/auth.controller";
import { isAdmin } from "../middlewares/admin.middleware";

const router = Router();

router.get('/admin-check', protect, isAdmin, (req, res) => {
    res.status(200).json({ message: 'You are an admin' });
});



export default router;