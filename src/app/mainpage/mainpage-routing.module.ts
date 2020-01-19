import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './search/map/map.component';
import { LocationComponent } from './search/location/location.component';
import { FilterComponent } from './search/filter/filter.component';
import { PropertyComponent } from './product/property/property.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';



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
      { // ค้นหาจากแผนที่
        path: 'map',
        component: MapComponent
      },
      { // ค้นหาจากที่ตั้ง
        path: 'location',
        component: LocationComponent
      },
      { // ค้นหา fillter
        path: 'fillter',
        component: FilterComponent
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
      { // หน้าหลัก
        path: 'home',
        component: HomeComponent
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
