import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SellerComponent,
    BuyerComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 //  อาจจะไม่ใช้
//  "@angular/platform-server": "^8.0.0",
//  "angular-alert-module": "^2.0.3",
//  "angular-authentication-service": "^1.1.8",
//  "angular-font-awesome": "^3.1.2",
//  "angular-image-slider": "0.0.8",
//  "font-awesome": "^4.7.0",
//  "ngx-papaparse": "^3.0.2",