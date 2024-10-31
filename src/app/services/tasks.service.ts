import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../types/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }


  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
