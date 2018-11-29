import { Component } from '@angular/core';
import { Component } from '@angular/core';

import { Student } from './student/student.model';

@Component({
  selector: 'proj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    {name: 'Luan', isStudent: true, temple: 'Estuda muito'},
    {name: 'Wesley', isStudent: true, temple: 'Estuda muito'},
    {name: 'Natan', isStudent: false}
  ]
    
}
