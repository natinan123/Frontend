import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {
    path: 'shared',
    children: [
      { // หน้าหลัก
        path: 'com1',
        component: Com1Component
      },
      { // 
        path: 'chat',
        component: ChatComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
