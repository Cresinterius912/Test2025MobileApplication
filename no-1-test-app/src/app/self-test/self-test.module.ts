import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfTestPageRoutingModule } from './self-test-routing.module';

import { SelfTestPage } from './self-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfTestPageRoutingModule
  ],
  declarations: [SelfTestPage]
})
export class SelfTestPageModule {}
