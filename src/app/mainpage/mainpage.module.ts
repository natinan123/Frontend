import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-api';
import { ArtcleComponent } from './artcle/artcle.component';
import { ArtDetailComponent } from './artcle/art-detail/art-detail.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './product/property/property.component';
import { FilterComponent } from './search/filter/filter.component';
import { LocationComponent } from './search/location/location.component';
import { MapComponent } from './search/map/map.component';

@NgModule({
  declarations: [MainpageComponent, ArtcleComponent, ArtDetailComponent, HomeComponent, PropertyComponent, FilterComponent, LocationComponent, MapComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgbPaginationModule, NgbAlertModule,NgbModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: API.GOOGLE_API_KEY,
      libraries: ['places','geometry','drawing']
    }),//google api
  ]
})
export class MainpageModule { }
