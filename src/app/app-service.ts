import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor (
    private http: Http
  ) {}
   headers = new Headers({ 'Content-Type': 'application/json' });
   options = new RequestOptions({ headers: this.headers });
   
  getTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res:Response) =>{
                      console.log("Status : "+res.status)
                      return res.json();
      });
  }
  addTodo(todo) {
	    return this.http.post( 'https://jsonplaceholder.typicode.com/posts' ,todo , this.options).map((res: Response) =>{ 
                       console.log("status   : "+res.status)
                       return res.json()
                    });
  }
  deleteTodo() {
   return this.http.delete('https://reqres.in/api/users/2', this.options).map((res: Response) =>{ 
                       console.log("status   : "+res.status)
                       return res.json()
   });
      }
  updateTodo(todo){
    return this.http.put('https://reqres.in/api/users/2',todo, this.options).map((res: Response) =>{ 
                        console.log("status   : "+res.status)
                        return res.json()
   });
    }  
}