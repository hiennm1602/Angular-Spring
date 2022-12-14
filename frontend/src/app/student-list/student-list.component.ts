import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
      console.log(data);
    });
  }

  onDeleteS(Sid: number): void {
    this.studentService.deleteStudent(Sid)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students'])
            .then(() => window.location.reload()); //reload page
        },
        error => {
          console.log(error);
        });
  }



}