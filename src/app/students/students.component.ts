import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['firstName', 'lastName', 'email', 'class', 'action'];
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((results: any) => {
      this.dataSource.data = results.students;
    });
  }

  public navigateToDetails(id: number) {
    this.router.navigate(['students/' + id]);
  }

}
