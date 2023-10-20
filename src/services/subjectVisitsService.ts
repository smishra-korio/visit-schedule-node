import { ObjectId } from "bson";
import SubjectVisitModel, {
  ISubjectVisit,
  ISubjectVisitList,
} from "../models/subjectVisits";

class SubjectVisitsService {
  static async getAllSubjectVisits(
    protocolId: string
  ): Promise<ISubjectVisitList> {
    const visits = await SubjectVisitModel.find({
      isLastVisit: true,
      protocolId: new ObjectId(protocolId),
    });

    let count = 0;
    const subjectVisitsList: [ISubjectVisit] = [] as unknown as [ISubjectVisit];
    for (const visitRecord of visits) {
      subjectVisitsList.push(visitRecord);
      count += 1;
    }
    return {
      totalRecords: count,
      subjectVisits: subjectVisitsList,
    };
  }
}

export default SubjectVisitsService;
