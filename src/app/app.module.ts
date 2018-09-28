import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './fake-backend';
import { AppRoutingModule } from './app-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule,
         MatInputModule } from '@angular/material';
import { CommonFrameComponent } from './common-frame/common-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListPageComponent,
    CommonFrameComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    fakeBackendProvider, AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
