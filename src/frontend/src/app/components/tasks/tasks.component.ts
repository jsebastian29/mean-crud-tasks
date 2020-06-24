import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task';

declare var M: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.resetForm();
    this.getTasks();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.taskService.selectedTask = new Task();
    }
  }

  addOrUpdateTask(form: NgForm) {
    console.log(form);
    if (form.value._id) {
      this.updateTask(form);
    } else {
      this.addTask(form);
    }
  }

  addTask(form: NgForm) {
    this.taskService.createTask(form.value)
      .subscribe(res => {
        this.resetForm(form);        
        M.toast({html: res["status"], classes: "green"});
        this.getTasks();
      });
  }

  updateTask(form: NgForm) {
    this.taskService.updateTask(form.value)
      .subscribe(res => {
        this.resetForm(form);        
        M.toast({html: res["status"], classes: "green"});
        this.getTasks();
      });
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(res => {
        this.taskService.tasks = res as Task[];
      });
  }

  editTask(task: Task) {
    this.taskService.selectedTask = task;
    console.log(this.taskService.selectedTask);
  }

  deleteTask(id: string) {
    if (confirm("Are you sure you want to delete this item")) {
      this.taskService.deleteTask(id)
        .subscribe(res => {
          M.toast({html: res["status"], classes: "green"});
          this.getTasks();
        });
    }
  }
}
