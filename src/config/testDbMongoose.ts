import mongoose, { Connection } from "mongoose";
import CustomError from "../models/customError";
import ModelLoader from "../constants/modelLoader";


class ConnectionCache {
    static connectionDictionary: { [id: string] : any } = {};

    static getDbConnection = async (tenantId: string, dbName: string): Promise<Connection> => {
        const connStr = process.env.MONGO_CONNECTION_STRING ?? "";
        const connection = await mongoose.createConnection(connStr, {dbName : dbName});
        await this.initDb(connection);
        return connection;
    }

    static initDb = async (connection: Connection): Promise<void> => {
        await ModelLoader.loadModels(connection);
    }

    static getDB = async (tenantId: string): Promise<Connection> => {
        if(! (tenantId in this.connectionDictionary)){
            try{
                console.log(`Generating connection for the tenantId: ${tenantId}`);
                this.connectionDictionary[tenantId] = this.getDbConnection(tenantId, tenantId);
                
            } catch (err){
                throw new CustomError(`Error occurred when getting connection for tenantId: ${tenantId}`);
            }
        }
        return this.connectionDictionary[tenantId];
    }   
} 

export default ConnectionCache;