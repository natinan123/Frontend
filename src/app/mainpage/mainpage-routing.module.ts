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

      // todo ! ยังไม่ได้สร้าง พวก เช่า- ขาย
      // // todo : ขาย
      // { // ขาย บ้าน
      //   path: 'sellhouse',
      //   component: HouseComponent
      // },
      // { // ขาย ทาวน์เฮ้าส์
      //   path: 'selltownhouse',
      //   component: TownhouseComponent
      // },
      // { // ขาย อพาร์ทเม้น
      //   path: 'sellapartment',
      //   component: ApartmentComponent
      // },
      // { // ขาย เชิงพาณิชย์
      //   path: 'sellcommercial',
      //   component: CommercialComponent
      // },
      // { // ขาย คอนโดมิเนียม
      //   path: 'sellcondominium',
      //   component: CondominiumComponent
      // },
      // { // ขาย ที่ดิน
      //   path: 'sellland',
      //   component: LandComponent
      // },

      // // todo : เช่า
      // { // เช่า บ้าน
      //   path: 'renthouse',
      //   component: RenthouseComponent
      // },
      // { // เช่า ทาวน์เฮ้าส์
      //   path: 'renttownhouse',
      //   component: RenttownhouseComponent
      // },
      // { // เช่า อพาร์ทเม้น
      //   path: 'rentapartment',
      //   component: RentapartmentComponent
      // },
      // { // เช่า เชิงพาณิชย์
      //   path: 'rentcommercial',
      //   component: RentcommercialComponent
      // },
      // { // เช่า คอนโดมิเนียม
      //   path: 'rentcondominium',
      //   component: RentcondominiumComponent
      // },
      // { // เช่า ที่ดิน
      //   path: 'rentland',
      //   component: RentlandComponent
      // },
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
