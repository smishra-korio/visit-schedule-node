import axios from "axios";

class SomeTestService {
    static protocolId: string;
    static dateTime: string;

    static async setProtocolNumber(): Promise<{oldProtocol: string, newProtocol: string}> {

        let protocolNum = await Math.ceil(Math.random()*100).toString();
        this.protocolId = protocolNum;
        this.dateTime = (new Date()).toISOString();
        console.log('setProtocol', this.protocolId, this.dateTime);
        
        const options = {
            method: "GET",
            url: "https://hub.dummyapis.com/delay?",
            params: {seconds: 20},
        }

        const apiResp = await axios.request(options);
        console.log(apiResp.status);

        // response.newProtocol = await Math.ceil(Math.random()*100).toString();
        // this.protocolId = response.newProtocol;
        // this.dateTime = (new Date()).toISOString();

        let response = {
            oldProtocol: this.protocolId ?? "-100",
            newProtocol: this.protocolId
        }
        return response;
    }


    static async getProtocolNumber(): Promise<{protocol: string, dateTime: string}> {

        let response = {
            oldProtocol: this.protocolId ?? "-100",
            newProtocol: ""
        }

        response.newProtocol = await Math.ceil(Math.random()*100).toString();
        this.protocolId = response.newProtocol;
        this.dateTime = (new Date()).toISOString();

        console.log('getProtocol', this.protocolId, this.dateTime);
        if(!this.protocolId){
            console.log("initialize protocol")
            this.protocolId = "-100"
        }

        if(!this.dateTime){
            console.log("initialize dateTime")
            this.dateTime = (new Date()).toISOString();
        }


        return {
            protocol: this.protocolId,
            dateTime: this.dateTime
        }
    }
}

export default SomeTestService;