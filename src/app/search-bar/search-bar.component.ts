import { Component, Output, EventEmitter } from "@angular/core";
import { ApiService, iUser } from "../api.service";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBar {
  constructor(private apiService: ApiService) {}

  user: iUser = {} as iUser;
  notFound = false;

  @Output() newItemEvent = new EventEmitter<iUser>();

  sendUser(user: iUser) {
    this.newItemEvent.emit(user);
  }

  onSubmit(event: any) {
    event.preventDefault();
    const username = event.srcElement[0]?.value;
    this.notFound = true;
    const something = this.apiService.getUser(username)?.subscribe((data: any) => {
      this.user = data;
      this.notFound = false;
      this.sendUser(this.user);
    });
    console.log(something);
  }
}
