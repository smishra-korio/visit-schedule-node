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

}

export default SubjectVisitsService;