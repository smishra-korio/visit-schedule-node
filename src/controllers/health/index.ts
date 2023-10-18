import HTTPStatusCode from "../../constants/statusCodes";
import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  const responseData = {
    message: "Pong",
    data: "Datetime: " + (new Date()).toISOString() ,
  };

  res.status(HTTPStatusCode.OK).send(responseData);
});

export default router;
