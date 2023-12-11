

import { model, Schema } from 'mongoose';

// {
//     "_id": {
//       "$oid": "652fd27ad8ed445b8f765155"
//     },
//     "protocolId": {
//       "$oid": "63ff67fb5f13b29f8f271342"
//     },
//     "subjectNumber": "001-TRN-112",
//     "visitDate": {
//       "$date": "2022-12-12T00:00:00.000Z"
//     },
//     "visitType": "Screened",
//     "isLastVisit": true
//   }


export interface ISubjectVisit {
    protocolId: Schema.Types.ObjectId,
    subjectNumber: Schema.Types.String,
    visitDate: Schema.Types.Date,
    visitType: Schema.Types.String,
    isLastVisit: Schema.Types.Boolean
}

export interface ISubjectVisitList {
    subjectVisits?: ISubjectVisit[],
    totalRecords?: number 
}

export const subjectVisitSchema = new Schema<ISubjectVisit> ({
    protocolId: Schema.Types.ObjectId,
    subjectNumber: Schema.Types.String,
    visitDate: Schema.Types.Date,
    visitType: Schema.Types.String,
    isLastVisit: Schema.Types.String
})

const SubjectVisitModel = model<ISubjectVisit>('subjectVisits', subjectVisitSchema, 'subjectVisits');

export default SubjectVisitModel