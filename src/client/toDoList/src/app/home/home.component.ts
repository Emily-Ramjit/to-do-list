import { Component, OnInit } from '@angular/core';
import { itemService } from '../../../services/itemService'
import { userService } from '../../../services/userService'
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number;
  private setID: any;

  item_id:any
  item_desc:any
  item_status:any;

  currentID: any;

  receivedData:boolean = false;
  setParam:boolean = false;
  items:any;
  

  constructor(private itemService : itemService, private userService: userService, 
    private modalService: NgbModal, private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    this.currentID = '';
    this.receivedData = false;
    this.setParam = false;
    this.items = [];
    this.setID = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });
   this.setParam = true;

   this.itemService.getItems(this.id).subscribe(
    data =>{
      this.items = data;
      console.log(JSON.stringify(this.items) + ' ITEMS')
    });
    this.receivedData = true;
  }
  
  newItem(){
    this.router.navigateByUrl('/home/createItem/'+ this.id)
  }

  markDone(id: any){
    console.log( id + ' markdoned')
    this.currentID = id;
    var currentID = JSON.stringify(this.currentID);
    this.itemService.markDone(currentID).subscribe();
    window.location.reload();
  }

  removeItem(id: any){
    console.log( id + ' removed d')
    this.currentID = id;
    var currentID = JSON.stringify(this.currentID);
    this.itemService.removeItem(currentID).subscribe();
    window.location.reload();
  }

  logOut(){
    this.router.navigateByUrl('')
  }

}
