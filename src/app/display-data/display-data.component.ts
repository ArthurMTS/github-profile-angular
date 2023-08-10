import { Component, Input } from "@angular/core";

@Component({
  selector: 'display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayData {
  @Input() title = "";
  @Input() value = 0;
}