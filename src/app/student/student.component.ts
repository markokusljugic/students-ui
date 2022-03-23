import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public firstNameFormControl: FormControl = new FormControl();
  public student: any;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params.id;
      this.studentService.getStudent(id).subscribe((student) => {
        console.log('OVO JE student', student);
        this.student = student;
        this.initFormControls();
      })
    })
  }

  public updateStudent() {
    this.student.firstName = this.firstNameFormControl.value;
    console.log('student', this.student);
    this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
      //
    })
  }

  private initFormControls() {
    this.firstNameFormControl = new FormControl(this.student.firstName);
  }

}
