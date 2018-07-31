import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    filternames = [
        {
            name: 'Music',
            checked: false
        },
        {
            name: 'Reading',
            checked: false
        },
        {
            name: 'Sports',
            checked: false
        },
    ];

    checked() {
        return this.filternames.filter(item => { return item.checked; });
    }
}