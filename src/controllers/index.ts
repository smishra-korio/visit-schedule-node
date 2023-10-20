import express from "express";
import PingController from "./health";
import SubjectVisitController from "./subjectVisit";

const router = express.Router();
router.use("/health/", PingController);
router.use("/subjectVisit/", SubjectVisitController);

export default router;
