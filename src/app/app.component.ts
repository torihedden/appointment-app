import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appointment App';
  searchParam = '';

  constructor(private http: HttpClient) {
  }

  public onSearch(searchParam) {
    console.log('search');

    this.http.get(`https://guarded-refuge-12450.herokuapp.com/appointments/search/${this.searchParam}`)
      .subscribe(data => {
        console.log(data);
      })
  }

}
