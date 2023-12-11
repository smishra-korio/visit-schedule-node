

import express from 'express';
import PingController from './health';
import SubjectVisitController from './subjectVisit';
import TestingController from './testing';

const router = express.Router();
router.use('/health/', PingController);
router.use('/subjectVisit/', SubjectVisitController);
router.use('/test/', TestingController);

export default router;