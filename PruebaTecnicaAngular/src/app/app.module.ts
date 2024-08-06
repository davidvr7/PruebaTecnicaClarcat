import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './_components/aside/aside.component';
import { HeaderComponent } from './_components/header/header.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { CreateUserComponent } from './_components/user/create-user/create-user.component';
import { UserDetailsComponent } from './_components/user/user-details/user-details.component';
import { ListUserComponent } from './_components/user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CreateUserComponent,
    UserDetailsComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
