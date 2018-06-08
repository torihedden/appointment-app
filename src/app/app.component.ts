import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title            = 'Appointment App';
  searchParam      = '';
  appointments:any = [];
  submittedSearch  = false;
  createFormOpen   = false;
  errorMessage     = null;

  formData = {
    date : '',
    time : '',
    description : ''
  }


  constructor(private http: HttpClient) {
  }

  public onSearch(searchParam) {
    this.submittedSearch = true;
    this.errorMessage = null;
    this.http.get(`https://guarded-refuge-12450.herokuapp.com/appointments/search/${this.searchParam}`)
      .subscribe(data => {
        if (data[0]) {
          console.log(data);
          this.appointments = data;
          this.errorMessage = null;
        } else {
          this.errorMessage = "No search results found.";
          this.appointments = [];
        }
      })
  }

  public createAppointment(formData) {
    let dateTime = (new Date(`${formData.date} ${formData.time}`)).toISOString();
    let body = {dateTime: dateTime, description: `${formData.description}`};

    this.http.post(`https://guarded-refuge-12450.herokuapp.com/appointments/create`, body)
      .subscribe(data => {
        this.clearFormData(formData);
      })
  }

  public toggleForm (bool) {
    this.createFormOpen = bool;
  }

  public clearFormData(formData) {
    formData.date = '';
    formData.time = '';
    formData.description ='';
  }

  public cancelCreate(formData) {
    this.clearFormData(formData);
    this.toggleForm(false);
  }

  public deleteAppointment(appointment) {
    console.log(appointment);
  }

}
