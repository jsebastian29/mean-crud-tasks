import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
   selectedTask: Task;
   tasks: Task[];
   readonly URL_API = 'http://localhost:3000/api/tasks/';
   
  constructor(private http: HttpClient) { 
    this.selectedTask = new Task();
  }

  getTasks() {
    return this.http.get(this.URL_API);
  }

  createTask(task: Task) {
    return this.http.post(this.URL_API, task);
  }

  updateTask(task: Task) {
    return this.http.put(this.URL_API + `${task._id}`, task);
  }

  deleteTask(_id: String) {
    return this.http.delete(this.URL_API + `${_id}`);
  }

}
