
import HTTPStatusCode from "../../constants/statusCodes";
import express, { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import SomeTestService from "../../services/someTestService";

const router = express.Router();

router.post("/setProtocol", 
    asyncHandler(async (req: Request, res: Response) => {
        const response = await SomeTestService.setProtocolNumber();
        res.status(HTTPStatusCode.OK).send(response);
}));

router.get("/getProtocol", 
    asyncHandler(async (req: Request, res: Response) => {
            const response = await SomeTestService.getProtocolNumber();
            res.status(HTTPStatusCode.OK).send(response);
}));

export default router;