import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http: Http) {

    }

    storeServers(servers: any[]) {
        const url = "https://serversrepo.firebaseio.com/data.json";
        return this.http.post(url, servers);
    }
}