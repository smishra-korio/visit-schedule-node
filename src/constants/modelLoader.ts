import { Connection, model } from "mongoose";
import { ISubjectVisit, subjectVisitSchema } from "../models/subjectVisits";
import ModelList from "./modelNames";

export default class ModelLoader {
    static loadModels = async (connection: Connection): Promise<void> => {
        await connection.model<ISubjectVisit>(ModelList.subjectVisitModelName, subjectVisitSchema, ModelList.subjectVisitModelName);
        //...
    }
}