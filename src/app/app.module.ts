import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  {path: 'user/register', component: UserRegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [UserRegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
