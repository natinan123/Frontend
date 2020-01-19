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
      { // test
        path: 'buy-test',
        component: BuyTestComponent
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
