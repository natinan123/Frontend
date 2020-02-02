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
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './product/property/property.component';
import { FilterComponent } from './search/filter/filter.component';
import { LocationComponent } from './search/location/location.component';
import { MapComponent } from './search/map/map.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from '../shared/shared.module';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

@NgModule({
  declarations: [
    MainpageComponent,
    HomeComponent,
    PropertyComponent,
    FilterComponent,
    LocationComponent,
    MapComponent,
    ArticleComponent,
    ArtDetailComponent
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
    SharedModule,
    AgmJsMarkerClustererModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
  ]
})
export class MainpageModule { }
