import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../../types/task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskService: TasksService){}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((data) => {
      this.tasks =  data;

      console.log(data, 'Lista de tarefas:: data')
    })

  };

};
