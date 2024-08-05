import { Router } from 'express';
import { register, login, protect, logout } from '../controllers/auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/protected', protect, (req, res) => {
  res.status(200).json({
    message: 'Protected Access!',
    role: res.locals.user.role // Include user role in response
});
});

export default router;
