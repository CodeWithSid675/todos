import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Week } from './app.model'
import { Constant } from '../constants/constant';

@Injectable()
export class AppService {
  constructor (
    private http: Http
  ) {}
   headers = new Headers({ 'Content-Type': 'application/json' });
   options = new RequestOptions({ headers: this.headers });
   week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   messages=[]
   url:any;y
  getUser() {
    this.url=Constant.GET_URL;
    return this.http.get(this.url).map((res:Response) =>{
                      console.log("Status : "+res.status)
                      return res.json();
      });
  }
  addUser(users) {
    this.url=Constant.POST_URL;
	    return this.http.post(this.url,users , this.options).map((res: Response) =>{ 
                       console.log("status   : "+res.status)
                       return res.json()
                    });
  }
  deleteUser() {
   return this.http.delete('https://reqres.in/api/users/2', this.options).map((res: Response) =>{ 
                       console.log("status   : "+res.status)
                       return res.json()
   });
      }
  updateUser(users){
    return this.http.put('https://reqres.in/api/users/2',users, this.options).map((res: Response) =>{ 
                        console.log("status   : "+res.status)
                        return res.json()
   });
    }  
}