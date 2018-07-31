import {Component, Input, OnInit, Output} from '@angular/core';
import {AppComponent} from '../app.component';
import { EventEmitter } from 'events';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    password: string;
    email: string;
    @Input() isLogin: boolean;
    @Output() isLoginNew  = new EventEmitter();
    ngOnInit() {
        console.log(this.isLoginNew);
        // this.isLoginNew = true;
    }

    doLogin() {
        if (this.email === 'user' && this.password === '123') {
            this.isLogin = true;
            alert('login success!!!');
            alert(this.isLogin);
        }
    }

    doClear() {
        this.email = '';
        this.password = '';
    }
}
