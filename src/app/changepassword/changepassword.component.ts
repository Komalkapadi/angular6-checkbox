import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
    public changePasswordForm = new FormGroup({
        'password': new FormControl(),
        'confPassword': new FormControl()
    });
    // public formErrors = {
    //     password: '',
    //     confPassword: '',
    // };

    constructor() {
    }

    ngOnInit() {
        // this.changePasswordForm = new FormGroup({
        //     'password': new FormControl(),
        //     'confPassword': new FormControl()
        // });
    }

}
