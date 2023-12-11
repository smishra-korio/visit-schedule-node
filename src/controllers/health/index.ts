import HTTPStatusCode from "../../constants/statusCodes";
import express, { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";

const router = express.Router();

router.get("/ping",  
  (req, res, next) => {
  console.log("you reached ping");
  next();
  }, 
  asyncHandler((req: Request, res: Response) => {
  const responseData = {
    message: "Pong",
    data: "Datetime: " + (new Date()).toISOString() ,
  };

  res.status(HTTPStatusCode.OK).send(responseData);
}));

export default router;
