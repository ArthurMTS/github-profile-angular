import { Component, Output, EventEmitter } from "@angular/core";

import { UserService } from "../../services/user.service";
import { iUser } from "src/models/user.interface";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBar {
  constructor(private userService: UserService) {}
  
  notFound = false;

  @Output() newItemEvent = new EventEmitter<iUser>();

  sendUser(user: iUser) {
    this.newItemEvent.emit(user);
  }

  setError(error: boolean) {
    this.notFound = error;
  }

  onSubmit(event: any) {
    event.preventDefault();
    const username = event.srcElement[0]?.value;
    this.userService.getUser(username, this.setError.bind(this)).subscribe((data: iUser) => {
      this.sendUser(data);
    });
  }
}
