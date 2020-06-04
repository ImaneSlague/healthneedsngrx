import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './materialangular/material.module';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { reponseReducer } from './dashboard/store/Reducer';
import { reponseEffect } from './dashboard/store/Effect';
import { Menu2Component } from './menu2/menu2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    SendrequestComponent,
    SidebarComponent,
    Menu2Component,
    
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
  
    StoreModule.forRoot({}), 

    StoreModule.forFeature("reponses",reponseReducer),
    EffectsModule.forRoot([reponseEffect]), 
     FormsModule, ReactiveFormsModule
    // StoreModule.forFeature('filter-app', filterReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
