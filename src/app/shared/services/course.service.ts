import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  getCourse(id:number) {
    return this.http.get(`https://frederic-lossignol.com/api/v1/courses/${id}?withlessons=true`)
    .pipe(
      map( (res:any) => res.course.modules.map(
        (module:any) => new MenuModel(module)
      ))
    );
  }
}
