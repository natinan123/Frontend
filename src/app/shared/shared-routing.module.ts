import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { ChatComponent } from './chat/chat.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';


const routes: Routes = [
  {
    path: 'shared',
    children: [
      { // หน้าหลัก
        path: 'com1',
        component: Com1Component
      },
      { // แชท
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
