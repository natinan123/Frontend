import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-api';
import { Ng5SliderModule } from 'ng5-slider';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapComponent } from './search/map/map.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { LocationComponent } from './search/location/location.component';
import { PriceComponent } from './search/price/price.component';
import { AreaComponent } from './search/area/area.component';
import * as moment from 'moment';
import { TestsearchComponent } from './testsearch/testsearch.component';
import { SHouseComponent } from './property/sell/s-house/s-house.component';
import { STownComponent } from './property/sell/s-town/s-town.component';
import { SAptComponent } from './property/sell/s-apt/s-apt.component';
import { SCommerComponent } from './property/sell/s-commer/s-commer.component';
import { SCondoComponent } from './property/sell/s-condo/s-condo.component';
import { SLandComponent } from './property/sell/s-land/s-land.component';
import { LHouseComponent } from './property/lease/l-house/l-house.component';
import { LTownComponent } from './property/lease/l-town/l-town.component';
import { LAptComponent } from './property/lease/l-apt/l-apt.component';
import { LCommerComponent } from './property/lease/l-commer/l-commer.component';
import { LCondoComponent } from './property/lease/l-condo/l-condo.component';
import { LLandComponent } from './property/lease/l-land/l-land.component';

@NgModule({
  declarations: [
    ChatComponent,
    ArticleComponent,
    ArtDetailComponent,
    HomeComponent,
    DetailComponent,
    MapComponent,
    LocationComponent,
    PriceComponent,
    AreaComponent,
    TestsearchComponent,
    SHouseComponent,
    STownComponent,
    SAptComponent,
    SCommerComponent,
    SCondoComponent,
    SLandComponent,
    LHouseComponent,
    LTownComponent,
    LAptComponent,
    LCommerComponent,
    LCondoComponent,
    LLandComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbPaginationModule, NgbAlertModule, NgbModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: API.GOOGLE_API_KEY,
      libraries: ['places', 'geometry', 'drawing']
    }),//google api
    Ng5SliderModule,
    Ng2SearchPipeModule,
    AgmJsMarkerClustererModule,

  ]
})
export class SharedModule { }
