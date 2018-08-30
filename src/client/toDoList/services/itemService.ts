import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    crossDomain: true
};
 
@Injectable()
export class itemService {
 
    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getItems(id: any) {
        return this.http.get('http://localhost:3000/getItems/'+ id, httpOptions).pipe(map((res: any) => {
          console.log('res', id);
    }))
  }
    createItem(name:any) {
      console.log(JSON.stringify(name) + ' name')
      return this.http.post('http://localhost:3000/createUser', name, httpOptions).pipe(map((res: any) => {
  }))

    // Uses http.get() to load data from a single API endpoint
//     getUsers() {
//         return this.http.get('http://localhost:3000/getUsers');
//     }
//     createUser(name:string) {
//       return this.http.post('http://localhost:3000/createUser', name);
//   }
}
