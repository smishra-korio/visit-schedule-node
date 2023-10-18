// database connection setup done here---

import { MongoClient } from "mongodb";
import mongoose, { Mongoose } from "mongoose";

class DatabaseConfig {

  
  public static dbClient?: MongoClient = undefined;
  public static dbConn?: Mongoose = undefined;

  public static connectDB = async (): Promise<void> => {
    try {
      const connStr: string = process.env.MONGO_CONNECTION_STRING ?? "";

      if(connStr === ""){
        throw "Please Configure Connection string for this environment";
      }
      mongoose.set('strictQuery', false);
      
      DatabaseConfig.dbConn = await mongoose.connect(connStr, {dbName : process.env.DB_NAME});
      DatabaseConfig.dbClient = new MongoClient(connStr);
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
  }

  public static disconnectDB = async (): Promise<void> => {
    try{
      if(DatabaseConfig.dbConn){
        DatabaseConfig.dbConn.connection.close();
      }

      if(DatabaseConfig.dbClient){
        DatabaseConfig.dbClient.close();
      }
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
  }
}

export default DatabaseConfig;