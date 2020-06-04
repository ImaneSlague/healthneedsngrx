import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootURLS } from 'src/app/root-urls';
import { ICrudService } from '../icrud-service';
import { Requests } from './request';

@Injectable({
    providedIn: "root",
  })
export class RequestsService{

    private ReponseUrl = "http://144.91.76.98:5005/api/NewDemandes"


    RepByDm: Requests[];
  
    constructor(private http: HttpClient) {
    //   this.ReponseUrl=RootURLS.getUrl("NewDemandes");
    }
    
    get(): Observable<Requests[]>{
        return this.http.get<Requests[]>(this.ReponseUrl);
    }
    
     


    add(payload: Requests): Observable<Requests> {

        console.log("service Add",payload)
        return this.http.post<Requests>(this.ReponseUrl, payload);
      }

     
        delete(payload: string) {
            return this.http.delete(`${this.ReponseUrl}/${payload}`);
          } 
}