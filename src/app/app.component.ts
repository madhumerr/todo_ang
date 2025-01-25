import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  tasks:string[]=[]
  task_text:string=''
  completed:string[]=[]
  addText(event:any){
    this.task_text=event.target.value

  }
  addTask(){
    if(this.task_text==''){
      alert('Please enter task')
    }
    else{
      this.tasks.push(this.task_text)
    let v:any=document.getElementById('inp')
    v.value=''
    this.task_text=''
    }     
  }
  deleteTask(ind:any){
    this.tasks.splice(ind,1 )
  }
  taskCompleted(index:any){
    const audio=new Audio('assets/deletesound.mp3')
    audio.play()

    setTimeout(()=>{
    this.completed.push(this.tasks[index])
    this.tasks.splice(index,1)
  },1000)
}
}