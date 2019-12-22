import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from "@agm/core";
import { FileUploadModule } from 'ng2-file-upload';
import { API } from './map-api';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgxWebstorageModule.forRoot(),
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: API.GOOGLE_API_KEY,
      libraries: ['places', 'geometry', 'drawing']
    }),//google api
    FileUploadModule,
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