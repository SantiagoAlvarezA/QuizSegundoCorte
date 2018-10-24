import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {STUDENTS} from '../model-students';

@Component({
    selector: 'app-detail-student',
    templateUrl: './detail-student.component.html',
    styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
    id_student:number;
    students = STUDENTS;


    constructor(private route:ActivatedRoute) { 
        this.id_student = this.route.snapshot.params.id_student;
    }
    ngOnInit() { }
}