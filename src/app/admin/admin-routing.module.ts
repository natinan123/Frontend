import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ProDetailComponent } from './manage-sale/pro-detail/pro-detail.component';
import { ManageMemberComponent } from './manage-member/manage-member.component';
import { MemberDetailComponent } from './manage-member/member-detail/member-detail.component';
import { WriteAdsComponent } from './write-ads/write-ads.component';
import { ManageMainpageComponent } from './manage-mainpage/manage-mainpage.component';
import { RecommendComponent } from './manage-mainpage/recommend/recommend.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { ProfileComponent } from './profile/profile.component';
import { UpgradMemberComponent } from './upgrad-member/upgrad-member.component';
import { TastComponent } from './tast/tast.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArticleComponent } from '../shared/article/article.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';
import { HomeComponent } from '../shared/home/home.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { ListAdsComponent } from './list-ads/list-ads.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { MapComponent } from '../shared/search/map/map.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // ! toolbar
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

      // ! END toolbar


      {
        path: 'managesale',               // รายการอสังหา
        component: ManageSaleComponent,
      },
      {
        path: 'prodetail/:pro_id',        //รายละเอียดอสังหา
        component: ProDetailComponent
      },
      {
        path: 'managemember',             // รายการสมาชิก
        component: ManageMemberComponent
      },
      {
        path: 'memberdetail/:email_id',       // รายละเอียดสมาชิก
        component: MemberDetailComponent
      },
      {
        path: 'writerads',                // เขียนโฆษณา
        component: WriteAdsComponent
      },
      {                                   // รายการโฆษณา
        path: 'listArticle',
        component: ListAdsComponent
      },
      {                                   // แก้ไข-รายการโฆษณา
        path: 'editArticle/:article_id',
        component: EditAdsComponent
      },
      {
        path: 'managemainpage',           //รายการแนะนำ
        component: ManageMainpageComponent
      },
      {
        path: 'recommend/:recom_id',       //เพิ่มรายการแนะนำ
        component: RecommendComponent
      },
      {
        path: 'managelocation',           //จัดการทำเล
        component: ManageLocationComponent
      },
      {
        path: 'profile',                    // ! ยังไม่ใช้
        component: ProfileComponent
      },
      {
        path: 'upgrade',                     // อัพเกรดระดับ sell
        component: UpgradMemberComponent
      },

      // ! page shared
      {                                       // chat-shared 
        path: 'chat',
        component: ChatComponent
      },
      {                                       // โฆษณา
        path: 'article',
        component: ArticleComponent
      },
      {                                       // รายละเอียดโฆษณา
        path: 'artdetail/:article_id',
        component: ArtDetailComponent
      },

      {
        path: 'test',                         //!  ไว้สำหรับบลอง
        component: TastComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'admin/managesale',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
