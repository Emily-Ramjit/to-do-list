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
        console.log(JSON.stringify(id) + ' id')
        return this.http.get('http://localhost:3000/getItems/'+ id, httpOptions);
  }
    createItem(itemArray:any) {
      console.log(JSON.stringify(itemArray) + ' itemArray')
      return this.http.post('http://localhost:3000/createItem',itemArray, httpOptions).pipe(map((res: any) => {
        }))
    }
    removeItem(id:any) {
        console.log(JSON.stringify(id) + ' Item Id')
        return this.http.post('http://localhost:3000/removeItem/' + id, httpOptions).pipe(map((res: any) => {
          }))
      }
    markDone(id:any) {
        console.log(JSON.stringify(id) + ' Item Id')
        return this.http.post('http://localhost:3000/markDone/' + id, httpOptions).pipe(map((res: any) => {
          }))
      }
}
