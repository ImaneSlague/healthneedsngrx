import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';

import * as ActionsFile from "src/app/dashboard/store/Action";
import { RequestsService } from './request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list: any;

  constructor(private store : Store<any> , private reponseserv : RequestsService) { 
    this.store.dispatch(new ActionsFile.LoadReponses)
    this.store.subscribe(data =>{
      this.list = data.reponses.Reponses
      // console.log(data)
      console.log("list ; ",this.list)
 
    }
      )
  }
  ngOnInit(): void {
  }

}
