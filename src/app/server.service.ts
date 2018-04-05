import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
    baseUrl = "https://serversrepo.firebaseio.com/";
    url = this.baseUrl + "data.json";
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        //return this.http.post(this.url, servers, { headers: headers });
        return this.http.put(this.url, servers, { headers: headers });
    }

    getServers() {
        return this.http.get(this.url).map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            })
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw('Errorrrrrr');
                }
            );
    }

    getAppName() {
        return this.http.get(this.baseUrl + "appName.json").map(
            (response: Response) => {
                return response.json();
            }
        );
    }
}