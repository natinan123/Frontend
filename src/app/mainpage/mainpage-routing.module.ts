import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { PropertyComponent } from './product/property/property.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';
import { TestSocketComponent } from './test-socket/test-socket.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { MHomeComponent } from './m-home/m-home.component';
import { MAreaComponent } from './m-search/m-area/m-area.component';
import { MMapComponent } from './m-search/m-map/m-map.component';
import { MLocationComponent } from './m-search/m-location/m-location.component';
import { MPriceComponent } from './m-search/m-price/m-price.component';
import { IndexComponent } from './index/index.component';
import { VerifyComponent } from './verify/verify.component';
import { SAptComponent } from './m-search/sell/s-apt/s-apt.component';
import { SCommerComponent } from './m-search/sell/s-commer/s-commer.component';
import { SCondoComponent } from './m-search/sell/s-condo/s-condo.component';
import { SHouseComponent } from './m-search/sell/s-house/s-house.component';
import { SLandComponent } from './m-search/sell/s-land/s-land.component';
import { STownComponent } from './m-search/sell/s-town/s-town.component';
import { LAptComponent } from './m-search/lease/l-apt/l-apt.component';
import { LCommerComponent } from './m-search/lease/l-commer/l-commer.component';
import { LCondoComponent } from './m-search/lease/l-condo/l-condo.component';
import { LHouseComponent } from './m-search/lease/l-house/l-house.component';
import { LLandComponent } from './m-search/lease/l-land/l-land.component';
import { LTownComponent } from './m-search/lease/l-town/l-town.component';




const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
    children: [
      { // หน้าหลัก
        path: 'Mhome',
        component: MHomeComponent
      },
      // todo: ค้นหา
      { // แผนที่
        path: 'Mmap',
        component: MMapComponent
      },
      { // ที่ตั้ง
        path: 'Mlocation',
        component: MLocationComponent
      },
      { //ค้นหาตามราคา
        path: 'Mprice',
        component: MPriceComponent
      },
      { //ค้นหาตามขนาดพื้นที่
        path: 'Marea',
        component: MAreaComponent
      },
      // todo : รายละเอียด
      { // รายละเอียด
        path: 'property/:pro_id',
        component: PropertyComponent
      },

      // โฆษณา
      {
        path: 'article',
        component: ArticleComponent
      },
      { //รายละเอียด
        path: 'artdetail/:article_id',
        component: ArtDetailComponent
      },
      { // 
        path: 'socket',
        component: TestSocketComponent
      },

      // !
      { //SApt
        path: 'SApt',
        component: SAptComponent
      },
      { //SCommer
        path: 'SCommer',
        component: SCommerComponent
      },
      { //SCondo
        path: 'SCondo',
        component: SCondoComponent
      },
      { //SHouse
        path: 'SHouse',
        component: SHouseComponent
      },
      { //SLand
        path: 'SLand',
        component: SLandComponent
      },
      { //STown
        path: 'STown',
        component: STownComponent
      },
      // todo lease property
      { //LApt
        path: 'LApt',
        component: LAptComponent
      },
      { //LCommer
        path: 'LCommer',
        component: LCommerComponent
      },
      { //LCondo
        path: 'LCondo',
        component: LCondoComponent
      },
      { //LHouse
        path: 'LHouse',
        component: LHouseComponent
      },
      { //LLand
        path: 'LLand',
        component: LLandComponent
      },
      { //LTown
        path: 'LTown',
        component: LTownComponent
      },
    ]
  },
  { // 
    path: 'index',
   component: IndexComponent
  }, 
  { // 
    path: 'verify',
   component: VerifyComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
