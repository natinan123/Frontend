import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { BuyerhomeComponent } from './buyerhome/buyerhome.component';
import { RequireComponent } from './require/require.component';
import { ListRequireComponent } from './list-require/list-require.component';
import { MatchesComponent } from './matches/matches.component';
import { BuyTestComponent } from './buy-test/buy-test.component';


const routes: Routes = [
  {
    path: 'buyer',
    component: BuyerComponent,
    children: [
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
