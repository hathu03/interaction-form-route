import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {UserService} from "./services/user.service";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MasterComponent} from "./master/master.component";
import {UserAddComponent} from "./users/user-add/user-add.component";

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
      path: 'register',
      component: RegisterComponent
    },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: MasterComponent,
        children: [
          {
            path: 'users',
            component: UserListComponent
          },
          {
            path: 'users/:id/detail',
            component: UserDetailComponent
          },
          {
            path: 'users/create',
            component: UserAddComponent
          },
        ]
      },
      {
        path: '404',
        component: NotFoundComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'admin/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
