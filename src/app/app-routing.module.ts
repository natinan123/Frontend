import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'mainpage',
    loadChildren: './mainpage/mainpage.module#MainpageModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'seller',
    loadChildren: './seller/seller.module#SellerModule'
  },
  {
    path: 'buyer',
    loadChildren: './buyer/buyer.module#BuyerModule'
  },
  {
    path: 'shared',
    loadChildren: './shared/shared.module#SharedModule'
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
