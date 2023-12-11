import ConnectionCache from "../config/testDbMongoose";
import ModelList from "../constants/modelNames";
import SubjectVisitModel, { ISubjectVisit, ISubjectVisitList } from "../models/subjectVisits";


class SubjectVisitsService{

    static async getAllSubjectVisits(): Promise<ISubjectVisitList>{
        const visits = await SubjectVisitModel.find(
        );

        let count = 1;
        const subjectVisitsList : [ISubjectVisit] = [{} as ISubjectVisit];
        for (const visitRecord of visits){
            subjectVisitsList.push(visitRecord);
            count += 1;
        }
        return {
            totalRecords: count,
            subjectVisits: subjectVisitsList
        }
    }

    static async getAllSubjectVisitsForTenant(tenantId: string): Promise<ISubjectVisitList>{
        const tenantDb = await ConnectionCache.getDB(tenantId);
        const tenantConn = (await tenantDb).asPromise();

        // TODO: need to make this look syntactically more clean
        const visits = await (await tenantConn).asPromise()
                            .then(() => tenantDb.model(ModelList.subjectVisitModelName).find());

        let count = 0;
        const subjectVisitsList : ISubjectVisit[] = [];
        for (const visitRecord of visits){
            subjectVisitsList.push(visitRecord);
            count += 1;
        }
        return {
            totalRecords: count,
            subjectVisits: subjectVisitsList
        }
    }
}

export default SubjectVisitsService;