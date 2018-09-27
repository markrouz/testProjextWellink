import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-page', component: ListPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
