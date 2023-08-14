import { Component, Output, EventEmitter } from "@angular/core";

import { ApiService, iUser } from "../api.service";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBar {
  constructor(private apiService: ApiService) {}
  
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
    this.apiService.getUser(username, this.setError.bind(this)).subscribe((data: any) => {
      this.sendUser(data);
    });
  }
}
