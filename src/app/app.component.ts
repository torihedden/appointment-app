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
  appointments:any = [];


  constructor(private http: HttpClient) {
  }

  public onSearch(searchParam) {
    this.http.get(`https://guarded-refuge-12450.herokuapp.com/appointments/search/${this.searchParam}`)
      .subscribe(data => {
        this.appointments = data;
        console.log(this.appointments);
      })
  }

}

// export class Appointment {
//   id: string;
//   date: string;
//   time: string;
//   description: string;
// }
