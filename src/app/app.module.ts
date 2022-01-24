import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { InputSearchComponent } from './share/input-search/input-search.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MasterComponent } from './master/master.component';
import { UserAddComponent } from './users/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    UserDetailComponent,
    InputSearchComponent,
    LoginComponent,
    NotFoundComponent,
    MasterComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
