# visit-schedule-node

This repo is meant to pair programming session not for production use.

## Introduction

- This project consists of backend api(s) that support functionalities related to subjects(or patients) and their visits.

- The data Hierachy of subjects and their visits are as follows:

```
sponsor or tenant
    |_ protocol-1 
    ..  |_ subjects
            |_ subject visits

    |_ protocol-2
```

- Each subject when added to a protocol(or study or clinical trial) will have a visit schedule based on which he/she
  visit the site and the investigator will assign a status based on the outcome of the visit.

- Each visit is saved as a record in the *subjectVisits* collections with 'subjectNumber' being the property being the
  reference from *subjects* collection. 

- Each of the visit record will also have a visit type which describes what action was performed by the investigator. The
  list of visit types are as follows:
    - Screening - the very first visit of the patient in which details like demographics and initials are recorded. On successfull screening subjectNumber is assigned and the status of the subject is 'Screened', otherwise the Status is set to 'Screenfail' 
    - Rescreening - This visit only happens when a subject is given a Screenfail status
    - Randomization - This visit generates randomized sequence based on which a subject is then assigned to specific treatment
    - ScheduledVisit - This visit may simply record current status of the subject and/or dispense kits(or medication) 
    - Discontinuation - This visit consists of assigning a status to the subject of being discontinued which may happen during the visits
    - Completion - This visit is the last visit that the subject goes to which could again consists of capturing patient's details etc.

- *visitSchedule* collection holds a sample of a visit schedule

## Problem statement

- the current ```/subjectVisit/``` api returns all the subject visits.
  
- the front-end it serves has the following requirement for the api:
  -  a list of eligible statuses that can be assigned to the subject for the current (or upcoming) visit.
  -  latest visit record per subject should be returned.

- the schema of the *visitSchedule* collecton for optimal querying considering that updates to visitSchedule does not happen after
  a protocol is active.

- Dockerize the development environment.


## How to Setup Dev Environment

- install the dependencies using:
  ```npm install --save```

- The environment file (which holds DB Connection string and Db Name) would be shared through email. please reach out the email stated below.

- Place the '.env' environment file in the same directory as *package.json* 

- Run the following command to host the API locally in dev mode:
  ```npm run start-dev```


For any queries, reach out to smishra@korioclinical.com