import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonFrameComponent } from 'src/app/core/components/common-frame/common-frame.component';

const routes: Routes = [
  {
    path: '',
    component: CommonFrameComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]})
export class CoreRoutingModule { }
