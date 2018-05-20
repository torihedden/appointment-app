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

  formData = {
    date : '',
    time : '',
    description : ''
  }


  constructor(private http: HttpClient) {
  }

  public onSearch(searchParam) {
    this.http.get(`https://guarded-refuge-12450.herokuapp.com/appointments/search/${this.searchParam}`)
      .subscribe(data => {
        this.appointments = data;
        console.log(this.appointments);
      })
  }

  public createAppointment(formData) {
    // TODO: format data before constructing the POST request
    let dateTime = (new Date(`${formData.date} ${formData.time}`)).toISOString();
    console.log({dateTime: dateTime, description: `${formData.description}`});
  }

}

// export class Appointment {
//   id: string;
//   date: string;
//   time: string;
//   description: string;
// }
