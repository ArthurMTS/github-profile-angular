import { Component } from '@angular/core';
import { iUser } from '../models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: iUser = {} as iUser;

  getUser(user: iUser) {
    this.user = user;
  }
}
