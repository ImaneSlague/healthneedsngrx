import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
   },
   {
     path:'login',
     redirectTo:'',
     pathMatch:'full'
   },
 {
    path:'home',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'Dashboard',component:DashboardComponent,pathMatch:'full'
  },
  {
    path:'Sendrequest',component:SendrequestComponent,pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
