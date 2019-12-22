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
import { SellChatComponent } from './sell-chat/sell-chat.component';
import { SellCloseComponent } from './sell-close/sell-close.component';
import { SellDraftComponent } from './sell-draft/sell-draft.component';
import { SellEditComponent } from './sell-edit/sell-edit.component';
import { EditPropertyComponent } from './sell-edit/edit-property/edit-property.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
import { SellUpgradeComponent } from './sell-upgrade/sell-upgrade.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { SellingComponent } from './selling/selling.component';
import { TestingComponent } from './testing/testing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [SellerComponent, ProfileComponent, SellChatComponent, SellCloseComponent, SellDraftComponent, SellEditComponent, EditPropertyComponent, SellProductComponent, SellPropertyComponent, SellUpgradeComponent, SellerhomeComponent, SellingComponent, TestingComponent],
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
  ]
})
export class SellerModule { }
