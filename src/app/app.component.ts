import { Component } from '@angular/core';
import { Config, Menu } from './shared/accordion/types';
import { MenuModel } from './shared/models/menu.model';
import { CourseService } from './shared/services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-formation-tool';
 
  // signle open mode
  options: Config = { multi: false };
  
  menu: Menu[] = [];

    

  constructor(private courseSvc: CourseService) {}

  ngOnInit() {
    this.courseSvc.getCourse(31)
    .subscribe((menu:MenuModel[]) => this.menu = menu)
  }
}
