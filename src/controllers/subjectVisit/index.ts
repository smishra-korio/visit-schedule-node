import SubjectVisitsService from "../../services/subjectVisitsService";
import HTTPStatusCode from "../../constants/statusCodes";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const responseData = await SubjectVisitsService.getAllSubjectVisits();
    let retStatus = HTTPStatusCode.OK;
    if(responseData.totalRecords == 0){
        retStatus = HTTPStatusCode.NOT_FOUND;
    }
    res.status(retStatus).send(responseData);
});

export default router;