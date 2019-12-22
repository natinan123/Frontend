import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-api';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdsComponent } from './ads/ads.component';
import { ChatComponent } from './chat/chat.component';
import { ChattaxtComponent } from './chat/chattaxt/chattaxt.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { ManageMainpageComponent } from './manage-mainpage/manage-mainpage.component';
import { RecommendComponent } from './manage-mainpage/recommend/recommend.component';
import { ManageMemberComponent } from './manage-member/manage-member.component';
import { MemberDetailComponent } from './manage-member/member-detail/member-detail.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ProDetailComponent } from './manage-sale/pro-detail/pro-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SearchMapComponent } from './search/search-map/search-map.component';
import { TastComponent } from './tast/tast.component';
import { UpgradMemberComponent } from './upgrad-member/upgrad-member.component';
import { WriteAdsComponent } from './write-ads/write-ads.component';


@NgModule({
  declarations: [AdminComponent, AdminhomeComponent, AdsComponent, ChatComponent, ChattaxtComponent, ManageLocationComponent, ManageMainpageComponent, RecommendComponent, ManageMemberComponent, MemberDetailComponent, ManageSaleComponent, ProDetailComponent, ProfileComponent, SearchComponent, SearchMapComponent, TastComponent, UpgradMemberComponent, WriteAdsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule { }
