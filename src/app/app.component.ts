import { Component, Input , Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    isLoginNew = false;

    doLogout() {
      alert('logout');
      this.isLoginNew = false;
    }
}
