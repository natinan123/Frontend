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
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { ManageMainpageComponent } from './manage-mainpage/manage-mainpage.component';
import { ManageMemberComponent } from './manage-member/manage-member.component';
import { MemberDetailComponent } from './manage-member/member-detail/member-detail.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ProDetailComponent } from './manage-sale/pro-detail/pro-detail.component';
import { TastComponent } from './tast/tast.component';
import { WriteAdsComponent } from './write-ads/write-ads.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../shared/shared.module';
import { ListAdsComponent } from './list-ads/list-ads.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { ListApproveComponent } from './list-approve/list-approve.component';
import { ApproveComponent } from './list-approve/approve/approve.component';
import { ManageRecomComponent } from './manage-recom/manage-recom.component';
import { ApproveRecomComponent } from './manage-recom/approve-recom/approve-recom.component';
import { DetailMainpageComponent } from './manage-mainpage/detail-mainpage/detail-mainpage.component';



@NgModule({
  declarations: [
    AdminComponent,
    ManageLocationComponent,
    ManageMainpageComponent,
    ManageMemberComponent,
    MemberDetailComponent,
    ManageSaleComponent,
    ProDetailComponent,
    TastComponent,
    WriteAdsComponent,
    ListAdsComponent,
    EditAdsComponent,
    ListApproveComponent,
    ApproveComponent,
    ManageRecomComponent,
    ApproveRecomComponent,
    DetailMainpageComponent,
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    SharedModule,
    Ng2SearchPipeModule,
    AgmJsMarkerClustererModule,
  ]
})
export class AdminModule { }
