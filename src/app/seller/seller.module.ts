import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-api';
import { ProfileComponent } from './profile/profile.component';
import { SellCloseComponent } from './sell-close/sell-close.component';
import { SellDraftComponent } from './sell-draft/sell-draft.component';
import { SellEditComponent } from './sell-edit/sell-edit.component';
import { EditPropertyComponent } from './sell-edit/edit-property/edit-property.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
import { SellingComponent } from './selling/selling.component';
import { TestingComponent } from './testing/testing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TestPostProComponent } from './test-post-pro/test-post-pro.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { SellPendingApprovalComponent } from './sell-pending-approval/sell-pending-approval.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';

@NgModule({
  declarations: [
    SellerComponent,
    ProfileComponent,
    SellCloseComponent,
    SellDraftComponent,
    SellEditComponent,
    EditPropertyComponent,
    SellProductComponent,
    SellPropertyComponent,
    SellingComponent,
    TestingComponent,
    TestPostProComponent,
    SellPendingApprovalComponent,
    SuggestionComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
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
    GalleryModule.forRoot(),
  ]
})
export class SellerModule { }
