import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'test-page',
    loadChildren: () => import('./test-page/test-page.module').then( m => m.TestPagePageModule)
  },
  {
    path: 'self-test',
    loadChildren: () => import('./self-test/self-test.module').then( m => m.SelfTestPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
