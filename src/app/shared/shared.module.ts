import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Com1Component } from './com1/com1.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    Com1Component,
    ChatComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
