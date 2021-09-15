import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  postEmployeeDetails(detailsObj){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers };
    return this.http.post(
     `http://localhost:3000/employee`,
      detailsObj,
      options
    );
  }

  getEmployeeDetails(){
    return this.http.get(`http://localhost:3000/employee`);
  }
}
