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
    ]
  },
  { // 
    path: 'index',
   component: IndexComponent
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
