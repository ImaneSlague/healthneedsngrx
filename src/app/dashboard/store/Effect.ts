import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map ,mergeMap,catchError} from 'rxjs/operators';
import {of , Observable} from'rxjs'
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store'

import * as ActionsFile from "src/app/dashboard/store/Action";
import { RequestsService } from '../request.service';
import { Requests } from '../request';
@Injectable()
export class reponseEffect {
    constructor(private actions$ : Actions,
        private reponseserv : RequestsService)
   {
   }

  @Effect()
  LoadReponses$: Observable<Action> = this.actions$.pipe(
      ofType<ActionsFile.LoadReponses>(
          ActionsFile.ReponseActionType.LOAD_Reponses
      ),
      mergeMap((Actions : ActionsFile.LoadReponses)=>
      this.reponseserv.get().pipe(
          map(
              (reponses : Requests[])=>
              new ActionsFile.LoadReponsesSuccess(reponses)
          ),
          catchError(err =>of(new ActionsFile.LoadReponsesFail(err)))
      )
      )
  )

}
