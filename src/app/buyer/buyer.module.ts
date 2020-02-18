import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-api';
import { BuyerhomeComponent } from './buyerhome/buyerhome.component';
import { ListRequireComponent } from './list-require/list-require.component';
import { MatchesComponent } from './matches/matches.component';
import { RequireComponent } from './require/require.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BuyTestComponent } from './buy-test/buy-test.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    BuyerComponent,
    BuyerhomeComponent,
    ListRequireComponent,
    MatchesComponent,
    RequireComponent,
    BuyTestComponent,
    FavoriteComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
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
    SharedModule,
    Ng2SearchPipeModule,
    AgmJsMarkerClustererModule,
  ]
})
export class BuyerModule { }
