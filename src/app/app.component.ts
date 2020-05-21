import { Component } from '@angular/core';
import { AppService } from "./app-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  userId = "1";
  datas = [];
  todos = [];
  constructor(private appService: AppService) { }

  onClickGet() {
    this.appService.getTodo().subscribe(data => {
      console.log("Get Response   : " + JSON.stringify(data));
      if (data.data) {
        this.datas = data.data;
      }
    });
  }


  onPostCall() {
    let data1 = {
      "userId": this.userId,
      "title": this.title
    }
    this.appService.addTodo(data1)
      .subscribe((res) => {
        console.log("Status code  : " + JSON.stringify(res))
        this.todos.push(res)
      });
  }

  onDeleteCall() {
    this.appService.deleteTodo().subscribe(response => {
      console.log("Delete Response>>>>" + JSON.stringify(response));
    });
  }

  onPutCall() {
    let data1 = {
      userId: this.userId,
      title: this.title
    }
    this.appService.updateTodo(data1)
      .subscribe(res => { this.todos.push(res); console.log("update call >>> " + JSON.stringify(res)) });
  }

}
