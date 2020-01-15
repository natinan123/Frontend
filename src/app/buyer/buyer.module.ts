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
import { Com1Component } from '../shared/com1/com1.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';
import { ArticleComponent } from '../shared/article/article.component';

@NgModule({
  declarations: [
    BuyerComponent,
    BuyerhomeComponent,
    ListRequireComponent,
    MatchesComponent,
    RequireComponent,
    BuyTestComponent,
    Com1Component,
    ChatComponent,
    ArticleComponent,
    ArtDetailComponent,
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
  
  ]
})
export class BuyerModule { }
