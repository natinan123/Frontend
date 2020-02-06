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
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { LocationComponent } from './search/location/location.component';
import { PriceComponent } from './search/price/price.component';
import { AreaComponent } from './search/area/area.component';


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
    GalleryModule,
    LightboxModule,
    GallerizeModule,

  ]
})
export class SharedModule { }
