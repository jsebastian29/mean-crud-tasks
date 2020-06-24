import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "tasks", component: TasksComponent}
  // {path: "**", component: 404NotFound} When page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
