import { Component, /*OnInit*/ } from "@angular/core";
import { ApiService, iUser } from "../api.service";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBar /*implements OnInit*/ {
  username = "";
  user: iUser = {} as iUser;
  notFound = false;

  constructor(private apiService: ApiService) {}

  /*ngOnInit() {
    try {
      this.apiService.getUser("ArthurMTS").subscribe((data: iUser) => {
        this.user = data;
        if (data?.message === "Not Found") {
          this.found = true;
          return;
        }
        this.found = false;
      });
    } catch(err) {
      console.error(err);
      this.found = true;
    }
  }*/
}
