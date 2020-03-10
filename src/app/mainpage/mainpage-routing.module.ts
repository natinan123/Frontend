import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { PropertyComponent } from './product/property/property.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';
import { MapComponent } from '../shared/search/map/map.component';
import { LocationComponent } from '../shared/search/location/location.component';
import { PriceComponent } from '../shared/search/price/price.component';
import { AreaComponent } from '../shared/search/area/area.component';
import { TestSocketComponent } from './test-socket/test-socket.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { HomeComponent } from '../shared/home/home.component';



const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
    children: [
      { // หน้าหลัก
        path: 'home',
        component: HomeComponent
      },
      // todo: ค้นหา
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
      { // รายละเอียด
        path: 'detail/:pro_id',
        component: DetailComponent
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
    ]
  },
  {
    path: '',
    redirectTo: 'mainpage/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
