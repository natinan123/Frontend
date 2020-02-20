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
import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SocketioService } from './@service/socketio.service';


@NgModule({
  declarations: [
    AppComponent
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
    Ng5SliderModule,
    Ng2SearchPipeModule,
    AgmJsMarkerClustererModule,
    GalleryModule.forRoot(),
    
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }


