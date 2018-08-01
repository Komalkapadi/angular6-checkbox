import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangepasswordComponent} from './changepassword/changepassword.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'password', component: ChangepasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
