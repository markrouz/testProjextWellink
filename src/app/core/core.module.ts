import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
         MatCheckboxModule,
         MatIconModule,
         MatListModule,
         MatSidenavModule,
       } from '@angular/material';
import { CommonFrameComponent } from 'src/app/core/components/common-frame/common-frame.component';
import { ListPageComponent } from 'src/app/core/components/list-page/list-page.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: [CommonFrameComponent, ListPageComponent],
  providers: [],
})
export class CoreModule { }
