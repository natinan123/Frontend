import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { MapComponent } from './search/map/map.component';
import { LocationComponent } from './search/location/location.component';
import { PriceComponent } from './search/price/price.component';
import { AreaComponent } from './search/area/area.component';
import { TestsearchComponent } from './testsearch/testsearch.component';
import { SAptComponent } from './property/sell/s-apt/s-apt.component';
import { SCommerComponent } from './property/sell/s-commer/s-commer.component';
import { SCondoComponent } from './property/sell/s-condo/s-condo.component';
import { SHouseComponent } from './property/sell/s-house/s-house.component';
import { SLandComponent } from './property/sell/s-land/s-land.component';
import { STownComponent } from './property/sell/s-town/s-town.component';
import { LAptComponent } from './property/lease/l-apt/l-apt.component';
import { LCommerComponent } from './property/lease/l-commer/l-commer.component';
import { LCondoComponent } from './property/lease/l-condo/l-condo.component';
import { LHouseComponent } from './property/lease/l-house/l-house.component';
import { LLandComponent } from './property/lease/l-land/l-land.component';
import { LTownComponent } from './property/lease/l-town/l-town.component';


const routes: Routes = [
  {
    path: 'shared',
    children: [
      { // หน้าหลัก
        path: 'home',
        component: HomeComponent
      },
      { // รายละเอียด
        path: 'detail/:pro_id',
        component: DetailComponent
      },
      { // แชท
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
      { // แผนที่
        path: 'map',
        component: MapComponent
      },
      { // ที่ตั้ง
        path: 'location',
        component: LocationComponent
      },
      { //ค้นหาตามราคา
        path: 'price',
        component: PriceComponent
      },
      { //ค้นหาตามขนาดพื้นที่
        path: 'area',
        component: AreaComponent
      },
      { //test
        path: 'test_shared',
        component: TestsearchComponent
      },


      // todo sell property
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
