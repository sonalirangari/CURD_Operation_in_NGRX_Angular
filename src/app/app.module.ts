import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {StoreRouterConnectingModule,routerReducer,RouterStateSerializer} from "@ngrx/router-store";

 import { CustomSerializer } from "./shared/utils";



@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerComponent,
    HomeComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        StoreModule.forRoot({
      router: routerReducer
    }),
   StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [provide: RouterStateSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
// import { HttpClientModule } from "@angular/common/http";

// import { StoreModule } from "@ngrx/store";
// import { EffectsModule } from "@ngrx/effects";
// import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// import {StoreRouterConnectingModule,routerReducer,RouterStateSerializer} from "@ngrx/router-store";

// import { CustomSerializer } from "./shared/utils";

// import { AppRoutingModule } from "./app-routing.module";

// import { AppComponent } from "./app.component";
// import { HomeComponent } from "./home/home.component";
// import { NavbarComponent } from "./navbar/navbar.component";

// @NgModule({
//   declarations: [AppComponent, HomeComponent, NavbarComponent],
//   imports: [
//     BrowserModule,
//     StoreModule.forRoot({
//     router: routerReducer
//     }),
//     StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
//     StoreDevtoolsModule.instrument(),
//     EffectsModule.forRoot([]),
//     HttpClientModule,
//     AppRoutingModule
//   ],
//    providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}