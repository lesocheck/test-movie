import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})


export class SearchComponentComponent implements OnInit {


  public cinemaDetailView: boolean = false;

  selectedItem: any = '';
  error: any = '';
  cinemaDetails: any[] = [];
  cinemaItems: any[] = [];
  cinemaItemsList: any;
  config: any = { 'placeholder': 'Enter the name of the movie', 'sourceField': ['Title']};
  localValue: any = JSON.parse(localStorage.getItem("cinemaItemsList"));


  cinemaDetailsNewItem = function (param, option) {
    this.param = param;
    this.option = option;
  };



  constructor(
    private apiService: ApiService,
  ) {
    this.localValue ? this.cinemaItemsList = this.localValue :  this.cinemaItemsList = []
  }

  onSelect(item: any) {
    this.selectedItem = item;
    this.cinemaItemsList.push(this.selectedItem);
    localStorage.setItem('cinemaItemsList', JSON.stringify(this.cinemaItemsList));
    this.error = null
  }


  search (title: string) {
    this.fetchCinemes(title)
  }

  viewCinemaDetails (id: any) {
    this.fetchCinemaDetails(id)
  }

  delete (i: any) {
    this.cinemaItemsList.splice(i,1);
    localStorage.setItem('cinemaItemsList', JSON.stringify(this.cinemaItemsList));
  }



  private fetchCinemes(title) {
    this.apiService.fetchCinemes(title).subscribe(e => {
      if(e.json().Response = 'False'){
        this.error = e.json().Error
      }
        this.cinemaItems = e.json().Search;
        this.cinemaDetailView = false;
    }, (error: any) => {
      console.error(error.json());
    });
  }

  private fetchCinemaDetails(id) {
    this.apiService.fetchCinemaDetails(id).subscribe(e => {
      let response: any = e.json();
      for (let key in response) {
        let newItem = new this.cinemaDetailsNewItem(response[key], key);
        this.cinemaDetails.push(newItem);
      }
      this.cinemaDetailView = true

    }, (error: any) => {
      console.error(error.json());
    });
  }

  ngOnInit() {
  }

}
