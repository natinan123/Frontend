import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { ProfileComponent } from './profile/profile.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
import { SellingComponent } from './selling/selling.component';
import { SellDraftComponent } from './sell-draft/sell-draft.component';
import { SellEditComponent } from './sell-edit/sell-edit.component';
import { SellCloseComponent } from './sell-close/sell-close.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { EditPropertyComponent } from './sell-edit/edit-property/edit-property.component';
import { TestingComponent } from './testing/testing.component';
import { TestPostProComponent } from './test-post-pro/test-post-pro.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArticleComponent } from '../shared/article/article.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';
import { HomeComponent } from '../shared/home/home.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { MapComponent } from '../shared/search/map/map.component';
import { SellPendingApprovalComponent } from './sell-pending-approval/sell-pending-approval.component';
import { LocationComponent } from '../shared/search/location/location.component';
import { PriceComponent } from '../shared/search/price/price.component';
import { AreaComponent } from '../shared/search/area/area.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { DetailSuggestComponent } from './suggestion-list/detail-suggest/detail-suggest.component';



const routes: Routes = [
  {
    path: 'seller',
    component: SellerComponent,
    children: [
      // ! home page
      { // หน้าหลัก
        path: 'home',
        component: HomeComponent
      },
      { // รายละเอียด
        path: 'detail/:pro_id',
        component: DetailComponent
      },
      { // แผนที่
        path: 'map',
        component: MapComponent
      },
      {                                       // ที่ตั้ง
        path: 'location',
        component: LocationComponent
      },
      {                                       //ค้นหาตามราคา
        path: 'price',
        component: PriceComponent
      },
      { //ค้นหาตามขนาดพื้นที่
        path: 'area',
        component: AreaComponent
      },
      // ! end home
     
      { // ข้อมูลส่วนตัว
        path: 'profile',
        component: ProfileComponent
      },
      { // รายการประกาศ
        path: 'selle-property',
        component: SellPropertyComponent
      },
      { // ประกาศขาย
        path: 'selling',
        component: SellingComponent
      },
      { // รออนุมัติ
        path: 'approval',
        component: SellPendingApprovalComponent
      },
      { // ฉบับร่าง
        path: 'draft',
        component: SellDraftComponent
      },
      { // หน้าแก้ไข
        path: 'edit',
        component: SellEditComponent
      },
      { // หน้าปิดประกาศ
        path: 'CloseProperty',
        component: SellCloseComponent
      },
      { // รายละเอียดอสังหาแก้ไขสถานะ
        path: 'ProductDetail/:pro_id',
        component: SellProductComponent
      },
      { // รายละเอียดอสังหา
        path: 'editproperty/:pro_id',
        component: EditPropertyComponent
      },
      { // test chat-shared 
        path: 'chat',
        component: ChatComponent
      },
      { // โฆษณา
        path: 'article',
        component: ArticleComponent
      },
      { // โฆษณา
        path: 'artdetail/:article_id',
        component: ArtDetailComponent
      },
      { // รายการส่งไปรายการแนะนำ
        path: 'suggest_list',
        component: SuggestionListComponent
      },
      { // รายละเอียดรายการส่งไปรายการแนะนำ
        path: 'datail_suggest/:pro_id',
        component: DetailSuggestComponent
      },
      { // test
        path: 'test',
        component: TestingComponent
      },
      { // test
        path: 'testPost',
        component: TestPostProComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'seller/selle-property',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
