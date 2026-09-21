import express from 'express';
import { contactUsController } from '../../../controllers';
const router = express.Router();

router.post('/', contactUsController.createContactUs);

export default router;
