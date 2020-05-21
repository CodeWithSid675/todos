import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  title = 'app';
  // data={};
  datas=[];
  users=[];
  name = "";
  job = "";
  message: any;
  // newUsers={};

  constructor(private appService: AppService) {}
  
  onClickGet(){
    // console.log("Get request send........");
      this.appService.getUser().subscribe(data =>{
        console.log("Get Response   : "+JSON.stringify(data));
        if(data.data){
          this.datas = data.data;
        }
        // this.datas = data.data;
    


    });
  }
  onPostCall(){
    console.log("user :  " +this.name);
    console.log("job :  " +this.job);
    let data1={
      "name":this.name,
      "job":this.job
    }
    this.appService.addUser(data1)
  .subscribe((user) => {
    console.log("Status code  : "+JSON.stringify(user) )
      this.users.push(user)
    });
    this.name="";
    this.job="";
  }

  onDeleteCall(){
    this.appService.deleteUser().subscribe(response=>{
      console.log("Delete Response>>>>"+JSON.stringify(response));
    });
  }

  onPutCall(){
    console.log("user :  " +this.name);
    console.log("job :  " +this.job);
    let data1={
      name:this.name,
      job:this.job
    }
    this.appService.updateUser(data1)
  .subscribe(hero => {this.users.push(hero);console.log("update call >>> "+JSON.stringify(hero))});
  this.name="";
  this.job="";
  }

getWeek(){
  
  let week=this.appService.getWeek();
  this.week=week
  for(let i=0;i<this.week.length;i++){
   
    console.log("week>>>"+this.week[i])
    if(this.week[i] === "Wednesday")
    {
      console.log("wedneday>>>" + this.week[i]);
      break;
    }
  }
  // this.week.forEach(element=>{

  // })
  console.log("weeks>>>>",week)
}
}
