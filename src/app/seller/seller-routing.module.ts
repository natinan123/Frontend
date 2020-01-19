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
import { SellUpgradeComponent } from './sell-upgrade/sell-upgrade.component';
import { TestingComponent } from './testing/testing.component';
import { TestPostProComponent } from './test-post-pro/test-post-pro.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArticleComponent } from '../shared/article/article.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';
import { HomeComponent } from '../shared/home/home.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { MapComponent } from '../shared/search/map/map.component';



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
      { // รายละเอียดอสังหา
        path: 'ProductDetail/:pro_id',
        component: SellProductComponent
      },
      { // รายละเอียดอสังหา
        path: 'editproperty/:pro_id',
        component: EditPropertyComponent
      },
      { // อัพเกรด
        path: 'upgrade',
        component: SellUpgradeComponent
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
