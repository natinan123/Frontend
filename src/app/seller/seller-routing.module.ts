import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { ProfileComponent } from './profile/profile.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
import { SellChatComponent } from './sell-chat/sell-chat.component';
import { SellingComponent } from './selling/selling.component';
import { SellDraftComponent } from './sell-draft/sell-draft.component';
import { SellEditComponent } from './sell-edit/sell-edit.component';
import { SellCloseComponent } from './sell-close/sell-close.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { EditPropertyComponent } from './sell-edit/edit-property/edit-property.component';
import { SellUpgradeComponent } from './sell-upgrade/sell-upgrade.component';
import { TestingComponent } from './testing/testing.component';



const routes: Routes = [
  {
    path: 'seller',
    component: SellerComponent,
    children: [
      { // หน้าหลัก
        path: 'sellerhome',
        component: SellerhomeComponent
      },
      { // ข้อมูลส่วนตัว
        path: 'profile',
        component: ProfileComponent
      },
      { // รายการประกาศ
        path: 'selle-property',
        component: SellPropertyComponent
      },
      { // สนทนา
        path: 'seller-chat',
        component: SellChatComponent
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
      { // test
        path: 'test',
        component: TestingComponent
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
