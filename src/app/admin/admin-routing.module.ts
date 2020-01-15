import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ProDetailComponent } from './manage-sale/pro-detail/pro-detail.component';
import { ManageMemberComponent } from './manage-member/manage-member.component';
import { MemberDetailComponent } from './manage-member/member-detail/member-detail.component';
import { WriteAdsComponent } from './write-ads/write-ads.component';
import { ManageMainpageComponent } from './manage-mainpage/manage-mainpage.component';
import { RecommendComponent } from './manage-mainpage/recommend/recommend.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchMapComponent } from './search/search-map/search-map.component';
import { UpgradMemberComponent } from './upgrad-member/upgrad-member.component';
import { TastComponent } from './tast/tast.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArticleComponent } from '../shared/article/article.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'adminhome', //  ? ยังไม่ใช้
        component: AdminhomeComponent
      },
      {
        path: 'managesale',    // รายการอสังหา
        component: ManageSaleComponent,
      },
      {
        path: 'prodetail/:pro_id',  //รายละเอียดอสังหา
        component: ProDetailComponent
      },
      {
        path: 'managemember',       // รายการสมาชิก
        component: ManageMemberComponent
      },
      {
        path: 'memberdetail/:email_id',       // รายละเอียดสมาชิก
        component: MemberDetailComponent
      },
      {
        path: 'writerads',        // เขียนโฆษณา
        component: WriteAdsComponent
      },
      {
        path: 'managemainpage',       //รายการแนะนำ
        component: ManageMainpageComponent
      },
      {
        path: 'recommend/:recom_id',       //เพิ่มรายการแนะนำ
        component: RecommendComponent
      },
      {
        path: 'managelocation',     //จัดการทำเล
        component: ManageLocationComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'searchmap',            //  ? ค้นหาจากแผนที่
        component: SearchMapComponent
      },
      {
        path: 'upgrade',            // อัพเกรดระดับ sell
        component: UpgradMemberComponent
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
      {
        path: 'test',            //!  ไว้สำหรับบลอง
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
