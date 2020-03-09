import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageSaleComponent } from './manage-sale/manage-sale.component';
import { ProDetailComponent } from './manage-sale/pro-detail/pro-detail.component';
import { ManageMemberComponent } from './manage-member/manage-member.component';
import { MemberDetailComponent } from './manage-member/member-detail/member-detail.component';
import { WriteAdsComponent } from './write-ads/write-ads.component';
import { ManageMainpageComponent } from './manage-mainpage/manage-mainpage.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { TastComponent } from './tast/tast.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { ArticleComponent } from '../shared/article/article.component';
import { ArtDetailComponent } from '../shared/article/art-detail/art-detail.component';
import { HomeComponent } from '../shared/home/home.component';
import { DetailComponent } from '../shared/detail/detail.component';
import { ListAdsComponent } from './list-ads/list-ads.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { MapComponent } from '../shared/search/map/map.component';
import { ListApproveComponent } from './list-approve/list-approve.component';
import { ApproveComponent } from './list-approve/approve/approve.component';
import { LocationComponent } from '../shared/search/location/location.component';
import { PriceComponent } from '../shared/search/price/price.component';
import { AreaComponent } from '../shared/search/area/area.component';
import { TestsearchComponent } from '../shared/testsearch/testsearch.component';
import { ManageRecomComponent } from './manage-recom/manage-recom.component';
import { ApproveRecomComponent } from './manage-recom/approve-recom/approve-recom.component';
import { SAptComponent } from '../shared/property/sell/s-apt/s-apt.component';
import { SCommerComponent } from '../shared/property/sell/s-commer/s-commer.component';
import { SCondoComponent } from '../shared/property/sell/s-condo/s-condo.component';
import { SHouseComponent } from '../shared/property/sell/s-house/s-house.component';
import { SLandComponent } from '../shared/property/sell/s-land/s-land.component';
import { STownComponent } from '../shared/property/sell/s-town/s-town.component';
import { LAptComponent } from '../shared/property/lease/l-apt/l-apt.component';
import { LCommerComponent } from '../shared/property/lease/l-commer/l-commer.component';
import { LCondoComponent } from '../shared/property/lease/l-condo/l-condo.component';
import { LHouseComponent } from '../shared/property/lease/l-house/l-house.component';
import { LLandComponent } from '../shared/property/lease/l-land/l-land.component';
import { LTownComponent } from '../shared/property/lease/l-town/l-town.component';
import { DetailMainpageComponent } from './manage-mainpage/detail-mainpage/detail-mainpage.component';


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
        path: 'detail-mainpage/:pro_id',           //รายละเอียด รายการแนะนำ
        component: DetailMainpageComponent
      },
      {
        path: 'managelocation',           //จัดการทำเล
        component: ManageLocationComponent
      },
      {
        path: 'list-approve',           //รายการอนุมัติ
        component: ListApproveComponent
      },
      {
        path: 'approve/:pro_id',       //อนุมัติ อสังหา
        component: ApproveComponent
      },
      {
        path: 'ManageRecom',              // จัดการรายการแนะนำ
        component: ManageRecomComponent
      },
      {
        path: 'ApproveRecom/:pro_id',              // รายละเอียด จัดการรายการแนะนำ
        component: ApproveRecomComponent
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
      {                                       // ที่ตั้ง
        path: 'location',
        component: LocationComponent
      },
      {                                       //ค้นหาตามราคา
        path: 'price',
        component: PriceComponent
      },
      {                                        //ค้นหาตามขนาดพื้นที่
        path: 'area',
        component: AreaComponent
      },
      {
        path: 'test',                         //!  ไว้สำหรับบลอง
        component: TastComponent
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
