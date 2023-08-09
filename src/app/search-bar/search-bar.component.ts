import { Component } from "@angular/core";
import { ApiService, iUser } from "../api.service";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBar {
  user: iUser = {} as iUser;

  constructor(private apiService: ApiService) {}

  /*ngOnInit() {
    this.apiService.getUser("ArthurMTS").subscribe((data: iUser) => {
      this.user = data;
    });
  }*/
}
