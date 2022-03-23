import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  public getStudents() {
    return this.http.get('https://localhost:7099/api/students');
  }

  public getStudent(id: number) {
    return this.http.get('https://localhost:7099/api/students/' + id);
  }

  public createStudent() {
    //
  }

  public updateStudent(id: number, body: any) {
    return this.http.put('https://localhost:7099/api/students/' + id, body)
  }

  public deleteStudent() {
    //
  }
}
