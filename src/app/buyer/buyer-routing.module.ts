import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { BuyerhomeComponent } from './buyerhome/buyerhome.component';
import { RequireComponent } from './require/require.component';
import { ListRequireComponent } from './list-require/list-require.component';
import { MatchesComponent } from './matches/matches.component';
import { BuyTestComponent } from './buy-test/buy-test.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArticleComponent } from '../shared/article/article.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';
import { HomeComponent } from '../shared/home/home.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { MapComponent } from '../shared/search/map/map.component';
import { LocationComponent } from '../shared/search/location/location.component';
import { PriceComponent } from '../shared/search/price/price.component';
import { AreaComponent } from '../shared/search/area/area.component';
import { FavoriteComponent } from './favorite/favorite.component';


const routes: Routes = [
  {
    path: 'buyer',
    component: BuyerComponent,
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
      {                                       //ค้นหาตามขนาดพื้นที่
        path: 'area',
        component: AreaComponent
      },
      { // โฆษณา
        path: 'article',
        component: ArticleComponent
      },
      { // โฆษณา
        path: 'artdetail/:article_id',
        component: ArtDetailComponent
      },
      // ! end home
      { // หน้าหลัก
        path: 'buyerhome',
        component: BuyerhomeComponent
      },
      { // หน้าความต้องการ
        path: 'require',
        component: RequireComponent
      },
      { // รายการความต้องการ
        path: 'listrequire',
        component: ListRequireComponent
      },
      { // รายการความต้องการที่ตรงกัน
        path: 'matchas',
        component: MatchesComponent
      },
      { // รายการชื่นชอบ
        path: 'favorite',
        component: FavoriteComponent
      },
      { // test
        path: 'buy-test',
        component: BuyTestComponent
      },
      { // test chat-shared 
        path: 'chat',
        component: ChatComponent
      },
    
    ]
  },
  {
    path: '',
    redirectTo: 'buyer/buyerhome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
