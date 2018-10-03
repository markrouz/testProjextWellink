import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'src/app/authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'core',
    // todo как сделать, чтобы модуль не загружался, если canActivate = false
    loadChildren: 'src/app/core/core.module#CoreModule',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
