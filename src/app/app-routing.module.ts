import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { CoreModule } from 'src/app/core/core.module';

export function lazyCoreModule() {
  return CoreModule;
}

export function lazyAuthenticationModule() {
  return AuthenticationModule;
}

const routes: Routes = [
  {
    path: 'login',
    loadChildren: lazyAuthenticationModule,
  },
  {
    path: 'core',
    // todo как сделать, чтобы модуль не загружался, если canActivate = false
    loadChildren: lazyCoreModule,
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
