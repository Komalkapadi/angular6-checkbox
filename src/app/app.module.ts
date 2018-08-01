import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProfileComponent,
        ChangepasswordComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
