import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    crossDomain: true
};

// let options = new RequestOptions({withCredentials: true});
 
@Injectable()
export class userService {
 
    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getUsers() {
        return this.http.get('http://localhost:3000/getUsers', httpOptions).pipe(map((res: any) => {
          console.log('res', res);
          return res;
    }))
  }
    createUser(name:any) {
      console.log(JSON.stringify(name) + ' name')
      return this.http.post('http://localhost:3000/createUser', name, httpOptions).pipe(map((res: any) => {
  }))
  }
}
