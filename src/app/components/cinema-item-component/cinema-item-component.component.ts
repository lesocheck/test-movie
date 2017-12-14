import { Input,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-item-component',
  templateUrl: './cinema-item-component.component.html',
  styleUrls: ['./cinema-item-component.component.scss']
})
export class CinemaItemComponentComponent implements OnInit {

  @Input() cinema: any;

  constructor() {  }

  ngOnInit() {
  }

}
