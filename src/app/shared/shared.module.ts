import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Com1Component } from './com1/com1.component';
import { ChatComponent } from './chat/chat.component';
import { ArticleComponent } from './article/article.component';
import { ArtDetailComponent } from './article/art-detail/art-detail.component';


@NgModule({
  declarations: [
    Com1Component,
    ChatComponent,
    ArticleComponent,
    ArtDetailComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
