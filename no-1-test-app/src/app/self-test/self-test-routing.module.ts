import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfTestPage } from './self-test.page';

const routes: Routes = [
  {
    path: '',
    component: SelfTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfTestPageRoutingModule {}
