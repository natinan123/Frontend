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
import { PropertyComponent } from './product/property/property.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestSocketComponent } from './test-socket/test-socket.component';
import { MHomeComponent } from './m-home/m-home.component';
import { MAreaComponent } from './m-search/m-area/m-area.component';
import { MLocationComponent } from './m-search/m-location/m-location.component';
import { MMapComponent } from './m-search/m-map/m-map.component';
import { MPriceComponent } from './m-search/m-price/m-price.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    MainpageComponent,
    PropertyComponent,
    ArticleComponent,
    ArtDetailComponent,
    TestSocketComponent,
    MHomeComponent,
    MAreaComponent,
    MLocationComponent,
    MMapComponent,
    MPriceComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
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
    Ng2SearchPipeModule,
    Ng5SliderModule,
    AgmJsMarkerClustererModule,
  ]
})
export class MainpageModule { }
