import { Component, OnInit } from '@angular/core';
import {STUDENTS} from '../mode-students';

@Component({
    selector: 'app-list-students',
    templateUrl: './list-students.component.html',
    styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
    students = STUDENTS;
    
    constructor() { }
    ngOnInit() { }
}